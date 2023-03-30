import React from "react";
import ReactDOM from "react-dom";
import Team from "./components/Team";

if (document.getElementById("our-team")) {
    ReactDOM.render(<Team />, document.getElementById("our-team"));
}