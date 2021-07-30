import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <CookiesProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CookiesProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
//good
