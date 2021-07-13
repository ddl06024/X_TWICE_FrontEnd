import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button>부트스트랩?</Button>
  </React.StrictMode>,
  document.getElementById("root")
);
//good