import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import BottonA from "./components/bottonA";
import BottonB from "./components/bottonB";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(<BottonA />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
