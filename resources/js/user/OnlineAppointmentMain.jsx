import React from "react";
import ReactDOM from "react-dom";
import OnlineAppointment from "./components/OnlineAppointment";

if (document.getElementById("online-appointment")) {
    ReactDOM.render(<OnlineAppointment />, document.getElementById("online-appointment"));
}