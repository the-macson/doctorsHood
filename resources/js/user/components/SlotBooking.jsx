import React from "react";
import ClinicList from "./ClinicList";
import TimeSlots from "./TimeSlots";

function SlotBooking(props){
    function timeChanged(timeVal){
        props.timeFeed(timeVal);
    }

    return (
        <div className="h-fit md:col-span-3 md:row-span-6 border-1 border-gray-500 rounded-lg">
            <section className="py-3 px-4">
                <h1 className="text-lg md:text-base font-bold mb-3">Doctor Details</h1>
                <div className="flex flex-wrap md:flex-nowrap">
                    <img className="inline-block h-16 w-16 mr-3 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="doc-img" />
                    <div className="flex flex-col">
                        <h1 className="inline-block text-base font-bold mt-2">{doctor.name}</h1>
                        <p className="inline-block text-gray-500 font-semibold">{doctor.specialisation}</p>
                    </div>
                </div>
            </section>
            {props.online === "no" && <ClinicList />}
            <TimeSlots timeGetChanged={timeChanged} date={props.currentDate} range={doctor.time_slots} days={doctor.days_slots} otherApp={props.otherDateApp} />
        </div>
    );
}

export default SlotBooking;