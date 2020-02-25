import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppWConstructor from "./AppWConstructor";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

/* 
// Example of passing props to set the initial state.
ReactDOM.render(
  <AppWConstructor startCount={10} />,
  document.getElementById("root")
); 
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
