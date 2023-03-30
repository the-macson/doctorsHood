import React from "react";
import ReactDOM from "react-dom";
import VirtualDoctor from "./components/VirtualDoctor";

if (document.getElementById("virtual-doctor")) {
    ReactDOM.render(<VirtualDoctor />, document.getElementById("virtual-doctor"));
}