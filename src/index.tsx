import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "react-router-dom";
import history from "./configs/history";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
//good
