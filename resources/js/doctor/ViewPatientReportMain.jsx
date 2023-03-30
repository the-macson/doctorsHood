import React from "react";
import ReactDOM from "react-dom";
import Report from './components/ViewReport';

if (document.getElementById("view-patient-report")) {
    ReactDOM.render(<Report />, document.getElementById("view-patient-report"));
}