import React from "react";
import ReactDOM from "react-dom";
import CreateDoctorProfile from './components/CreateDoctorProfile';

if (document.getElementById("setup-doctor-profile")) {
    ReactDOM.render(<CreateDoctorProfile />, document.getElementById("setup-doctor-profile"));
}