import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {ImCross} from "react-icons/im";

const Navbar = (props) => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    function redirectUser(userRole){
        if (userRole === "patient"){
            window.location.href = "/user/login";
        }else if (userRole === "doctor"){
            window.location.href = "/doctor/login";
        }
    }

    function logoutUser(){
        var packet = {
            role : props.userRole
        };
        axios.post("/logout", packet).then(redirectUser(props.userRole));
    }

    return (
        <header className="text-gray-600 body-font nav">
            <div className={showMediaIcons ? "hero" : "container mx-auto flex flex-wrap p-0 lg:p-2 sm:flex-col md:flex-row items-center hero1"}>
                <div className="mobile-nav">
                <div className="hamburger-menu">
                    <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    {showMediaIcons ? <ImCross /> : <GiHamburgerMenu />}
                    </button>
                </div>
                <a className="sm:flex title-font font-medium sm:items-center text-white mb-4 md:mb-0" href="/homepage">
                    <span className="sm:ml-3 text-xl logo-text md:relative md:top-1">DoctorsHood</span>
                </a>
                </div>
                <nav className={showMediaIcons ? "menu-link mobile-menu-link" : "md:ml-auto sm:flex sm:flex-wrap sm:items-center text-base sm:justify-center nav-link"}>
                    <a onClick={() => setShowMediaIcons(false)} href="/homepage" className="sm:mr-5 text-white">
                        Home
                    </a>
                    <a onClick={() => setShowMediaIcons(false)} href="/user/virtual-doctor" className="sm:mr-5 text-white">
                        Virtual Doctor
                    </a>
                    <a onClick={() => setShowMediaIcons(false)} href="/user/select-specialisation" className="sm:mr-5 text-white">
                        Book Appointments
                    </a>
                    <a onClick={() => setShowMediaIcons(false)} href="/user/medicine-reminder" className="sm:mr-5 text-white">
                        Medicine Reminder
                    </a>
                    {props.userRole !== null ?
                        props.userRole === "patient" ?
                            <div>
                                <a onClick={() => setShowMediaIcons(false)} href="/user/my-appointments" className="sm:mr-5 text-white">
                                    My Appointments
                                </a>
                                <a onClick={() => setShowMediaIcons(false)} href="/user/create-profile" className="sm:mr-5 text-white">
                                    Profile Settings
                                </a>
                                <a onClick={() => setShowMediaIcons(false)} href="/our-team" className="sm:mr-5 text-white">
                                    Our Team
                                </a>
                                <a onClick={logoutUser} className="sm:mr-5 font-bold md:bg-white md:rounded md:py-1 md:px-2 cursor-pointer">
                                    Logout
                                </a>
                            </div>
                            :
                            <div>
                                <a onClick={() => setShowMediaIcons(false)} href="/our-team" className="sm:mr-5 text-white">
                                    Our Team
                                </a>
                                <a onClick={() => setShowMediaIcons(false)} href="/doctor/dashboard" className="sm:mr-5 text-white">
                                    Dashboard
                                </a>
                                <a onClick={logoutUser} className="sm:mr-5 font-bold md:bg-white md:rounded md:py-1 md:px-2 cursor-pointer">
                                    Logout
                                </a>
                            </div>
                        :
                        <div>
                            <a onClick={() => setShowMediaIcons(false)} href="/our-team" className="sm:mr-5 text-white">
                                Our Team
                            </a>
                            <a onClick={() => setShowMediaIcons(false)} href="/user/login" className="sm:mr-5 text-white">
                                Login
                            </a>
                            <a onClick={() => setShowMediaIcons(false)} href="/user/register" className="sm:mr-5 text-white">
                                Signup
                            </a>
                            <a onClick={() => setShowMediaIcons(false)} href="/doctor/login" className="sm:mr-5 font-bold md:bg-white md:rounded md:py-1 md:px-2">
                                Doctor Login
                            </a>
                        </div>
                    }
                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mr-4 md:mt-0 btn">
                    Download Our App
                </button> */}
            </div>
        </header>
    );
};

export default Navbar;