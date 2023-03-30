import React from "react";
import ReactDOM from "react-dom";
import CreateUserProfile from './components/CreateUserProfile';

if (document.getElementById("setup-user-profile")) {
    ReactDOM.render(<CreateUserProfile />, document.getElementById("setup-user-profile"));
}