import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

ReactDOM.render(<App />, document.getElementById("root"));
