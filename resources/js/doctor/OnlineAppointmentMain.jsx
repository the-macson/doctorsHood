import React from "react";
import ReactDOM from "react-dom";
import OnlineAppointment from "./components/OnlineAppointment";

if (document.getElementById("online-doctor-appointment")) {
    ReactDOM.render(<OnlineAppointment />, document.getElementById("online-doctor-appointment"));
}