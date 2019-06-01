import React from "react";

import App from "./components/app";

import { DarkSkyService } from "./services";
import { DarkSkyServiceProvider } from "./dark-sky-context";

import "./styles/stylesheet.scss";

const weatherService = new DarkSkyService();

const WeatherApp = () => {
  return (
    <DarkSkyServiceProvider value={weatherService}>
      <App />
    </DarkSkyServiceProvider>
  );
};
export default WeatherApp;
