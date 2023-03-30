import React from "react";
import ReactDOM from "react-dom";
import BookingSuccess from './components/BookingSuccess';

if (document.getElementById("booking-success")) {
    ReactDOM.render(<BookingSuccess />, document.getElementById("booking-success"));
}