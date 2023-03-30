import React from "react";
import ReactDOM from "react-dom";
import AddMedicine from "./components/MedicineReminder";

if (document.getElementById("medicine-reminder")) {
    ReactDOM.render(<AddMedicine />, document.getElementById("medicine-reminder"));
}