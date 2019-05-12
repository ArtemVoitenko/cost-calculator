import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import App from "./components/app";
import JavascriptTimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
JavascriptTimeAgo.locale(en);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
