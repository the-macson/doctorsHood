import React from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import {
    FaHome,
    FaCalendarPlus,
    FaArrowCircleDown,
    FaArrowCircleUp
} from "react-icons/fa";

function SidebarComp(){
    const [isAppointExp, setAppointStatus] = React.useState(false);

    function expandAppoint(){
        setAppointStatus(!isAppointExp);
    }

    const items = [
        <SidebarItem href="/homepage" hoverHighlight="#2DD4BF">
            <span className="text-slate-50 text-3xl flex justify-center">DoctorsHood</span>
        </SidebarItem>,
        <SidebarItem href="/doctor/dashboard" leftIcon={<FaHome />}>
            <span className="text-xl">Home</span>
        </SidebarItem>,
        <SidebarItem leftIcon={<FaCalendarPlus />} rightIcon={isAppointExp ? <FaArrowCircleUp /> : <FaArrowCircleDown />}>
            <span onClick={expandAppoint} className="text-xl">Appointments</span>
        </SidebarItem>
    ];

    const items_appointments = [
        ...items,
        <SidebarItem href="/doctor/online-appointment">
            <ul className="list-disc ml-5">
                <li className="text-lg">Online Appointments</li>
            </ul>
        </SidebarItem>,
        <SidebarItem href="/doctor/offline-appointment">
            <ul className="list-disc ml-5">
                <li className="text-lg">Offline Appointments</li>
            </ul>
        </SidebarItem>
    ];

    return (<Sidebar background="#2DD4BF" breakpoint={980} content={isAppointExp ? items_appointments : items}></Sidebar>);
}

export default SidebarComp;