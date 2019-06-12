import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import App from "./components/app";
import JavascriptTimeAgo from "javascript-time-ago";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import NoteApp from "./components/notes/notes";
import en from "javascript-time-ago/locale/en";
import firebase from "./firebase";
import FinanceApp from "./components/finance-app";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import WeatherApp from "./components/weather-app";
import TodoApp from "./components/TodoApp";
JavascriptTimeAgo.locale(en);
class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/App");
      } else {
        this.props.history.push("/Login");
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <ErrorBoundry>
          <Switch>
            <Route path="/NoteApp" component={NoteApp} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
            <Route path="/FinanceApp" component={FinanceApp} />
            <Route path="/TodoApp" component={TodoApp} />
            <Route path="/App" component={App} />
            <Route path="/WeatherForecast" component={WeatherApp} />
          </Switch>
        </ErrorBoundry>
      </Provider>
    );
  }
}
const RootWithAuth = withRouter(Root);
ReactDOM.render(
  <Router>
    <RootWithAuth />
  </Router>,
  document.getElementById("root")
);
