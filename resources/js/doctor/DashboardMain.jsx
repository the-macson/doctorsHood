import React from "react";
import ReactDOM from "react-dom";
import Dashboard from './components/Dashboard';

if (document.getElementById("doctor-dashboard")) {
    ReactDOM.render(<Dashboard />, document.getElementById("doctor-dashboard"));
}