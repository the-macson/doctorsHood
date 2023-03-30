import React from "react";
import ReactDOM from "react-dom";
import Specialisation from "./components/Specialisation";

if (document.getElementById("select-specialisation")) {
    ReactDOM.render(<Specialisation />, document.getElementById("select-specialisation"));
}