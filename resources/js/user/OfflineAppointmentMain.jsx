import React from "react";
import ReactDOM from "react-dom";
import OfflineAppointment from "./components/OfflineAppointment";

if (document.getElementById("offline-appointment")) {
    ReactDOM.render(<OfflineAppointment />, document.getElementById("offline-appointment"));
}