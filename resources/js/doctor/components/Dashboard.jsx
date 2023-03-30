import React from "react";
import SidebarComp from "./SidebarComp";

function Dashboard(){

    function redirectUser(){
        window.location.href = "/doctor/login";
    }

    function logoutUser(){
        var packet = {
            role : "doctor"
        };
        axios.post("/logout", packet).then(redirectUser());
    }

    return (
        <div>
            <SidebarComp />
            <div className="ml-4 top-20 py-4 px-3 w-5/6 md:ml-80 md:top-5 fixed bg-white border-2 rounded-lg md:w-3/6 md:py-10 md:px-5">
                <div className="md:flex md:justify-between">
                    <h1 className="text-2xl mb-2">Welcome to Dashboard !</h1>
                    <a onClick={logoutUser} className="rounded bg-teal-500 text-white text-lg py-2 px-3 hover:bg-teal-400 cursor-pointer">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;