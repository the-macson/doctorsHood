import React from "react";
import ReactDOM from "react-dom";
import Symptom from "./components/Symptom";

if (document.getElementById("select-symptom")) {
    ReactDOM.render(<Symptom />, document.getElementById("select-symptom"));
}