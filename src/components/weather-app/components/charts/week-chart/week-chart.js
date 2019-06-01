import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import msline from "fusioncharts/fusioncharts.charts";
import GammelTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import WeekDataConstructor from "../chart-data-constructors";
import { connect } from "react-redux";
import { withWeatherService } from "../../hoc";
import { configurateChart } from "./config";
import ErrorIndicator from "../../error-indicator";
import WeatherStatistics from "../../weather-statistics";
ReactFC.fcRoot(FusionCharts, msline, GammelTheme);
class WeekChart extends React.Component {
  state = {
    loading: true,
    config: []
  };
  componentDidMount() {
    this.getWeatherData();
    console.log(this.props.forecast);
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.getWeatherData();
    }
  }
  getWeatherData() {
    const weekTemp = new WeekDataConstructor(
      this.props.forecast.actualWeather.daily.data
    );
    console.log(this.props.forecast.actualWeather);
    const chartConfigs = configurateChart(
      weekTemp.categories,
      weekTemp.dataset,
      weekTemp.annotations,
      this.props.forecast.city
    );
    this.setState({ config: chartConfigs });
  }
  render() {
    const { config } = this.state;
    const isCorrect = this.props.forecast.isCorrectCity;
    if (!isCorrect) {
      return <ErrorIndicator />;
    }
    return (
      <React.Fragment>
        <ReactFC {...config} />
        <WeatherStatistics
          dailyStatistic={this.props.forecast.actualWeather.currently}
        />
      </React.Fragment>
    );
  }
}
const MapStateToProps = state => {
  return {
    forecast: state
  };
};
export default connect(MapStateToProps)(withWeatherService()(WeekChart));
