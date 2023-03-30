import React from "react";
import ReactDOM from "react-dom";
import PatientReport from './components/PatientReport';

if (document.getElementById("patient-report")) {
    ReactDOM.render(<PatientReport />, document.getElementById("patient-report"));
}