import React from "react";
import ReactDOM from "react-dom";
import PrescriptionPage from "./components/PrescriptionPage";

if (document.getElementById("prescription-page")) {
    ReactDOM.render(<PrescriptionPage />, document.getElementById("prescription-page"));
}