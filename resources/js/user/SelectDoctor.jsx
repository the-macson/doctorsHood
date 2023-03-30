import React from "react";
import ReactDOM from "react-dom";
import Finalresult from './components/Finalresult';

if (document.getElementById("select-doctor")) {
    ReactDOM.render(<Finalresult />, document.getElementById("select-doctor"));
}