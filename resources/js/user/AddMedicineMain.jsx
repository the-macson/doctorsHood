import React from "react";
import ReactDOM from "react-dom";
import AddMedicine from "./components/AddMedicine";

if (document.getElementById("add-medicine")) {
    ReactDOM.render(<AddMedicine />, document.getElementById("add-medicine"));
}