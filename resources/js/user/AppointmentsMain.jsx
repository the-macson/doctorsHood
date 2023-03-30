import React from "react";
import ReactDOM from "react-dom";
import Appointments from './components/Appointments';

if (document.getElementById("my-appointments")) {
    ReactDOM.render(<Appointments />, document.getElementById("my-appointments"));
}