import React from "react";
import ReactDOM from "react-dom";
import MeetingLobby from './components/MeetingLobby';

if (document.getElementById("meeting-lobby")) {
    ReactDOM.render(<MeetingLobby />, document.getElementById("meeting-lobby"));
}