import React from "react";
import TimeChips from "./TimeChips";

function TimeSlots(props){
    const clockArr = ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM"];
    const timeArr = [];
    var count = 0;

    function timeConvert(time) {
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
            time = time.slice(1);
            time[3] = +time[0] < 12 ? " AM" : " PM";
            time[0] = +time[0] % 12 || 12;
        }
        return time.join("");
    }

    var [bookedAppointments] = React.useState([]);

    if ((props.otherApp).length !== 0){
        bookedAppointments = [];
        for (var i = 0; i < (props.otherApp).length; i++){
            bookedAppointments.push(timeConvert(props.otherApp[i].time));
        }
    }else {
        let todayDateRaw = new Date();
        let todayDate = todayDateRaw.toString().substring(0, 10);
        if (props.date === todayDate){
            bookedAppointments = [];
            for (var i = 0; i < appointments.length; i++){
                bookedAppointments.push(timeConvert(appointments[i].time));
            }
        }
    }

    if (props.range == "9am-9pm"){
        count = 12;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-8pm"){
        count = 11;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-7pm"){
        count = 10;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-6pm"){
        count = 9;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-5pm"){
        count = 8;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-4pm"){
        count = 7;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-3pm"){
        count = 6;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-2pm"){
        count = 5;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-1pm"){
        count = 4;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-12pm"){
        count = 3;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-11am"){
        count = 2;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "9am-10am"){
        count = 1;
        for (var i = 0; i <= count; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-9pm"){
        count = 11;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-8pm"){
        count = 10;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-7pm"){
        count = 9;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-6pm"){
        count = 8;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-5pm"){
        count = 7;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-4pm"){
        count = 6;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-3pm"){
        count = 5;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-2pm"){
        count = 4;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-1pm"){
        count = 3;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-12pm"){
        count = 2;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "10am-11am"){
        count = 1;
        for (var i = 1; i <= count+1; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-9pm"){
        count = 10;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-8pm"){
        count = 9;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-7pm"){
        count = 8;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-6pm"){
        count = 7;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-5pm"){
        count = 6;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-4pm"){
        count = 5;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-3pm"){
        count = 4;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-2pm"){
        count = 3;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-1pm"){
        count = 2;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }else if (props.range == "11am-12pm"){
        count = 1;
        for (var i = 2; i <= count+2; i++){
            if (bookedAppointments.includes(clockArr[i])){
                timeArr.push({
                    time: clockArr[i],
                    available: "no"
                });
            }else {
                timeArr.push({
                    time: clockArr[i],
                    available: "yes"
                });
            }
        }
    }

    const daysArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var doctorDaysArr = [];

    if (props.days == "Mon-Fri"){
        for (var i = 0; i <= 4; i++){
            doctorDaysArr.push(daysArr[i]);
        }
    }else if (props.days == "Mon-Sat"){
        for (var i = 0; i <= 5; i++){
            doctorDaysArr.push(daysArr[i]);
        }
    }else if (props.days == "All days"){
        doctorDaysArr = daysArr;
    }

    var selectedDay = props.date.substring(0, 3);
    var isOpen = false;

    if (doctorDaysArr.includes(selectedDay)){
        isOpen = true;
    }

    function timeChange(timeVal){
        props.timeGetChanged(timeVal);
    }

    return (
        <section className="py-3 px-4 -mt-5 md:mt-0">
            <h1 className="text-base font-bold mb-3">{props.date}, availability</h1>
            <div className="flex flex-wrap gap-4">
                {isOpen ?
                    timeArr.map((val) => {
                        return <TimeChips onTimeChange={timeChange} time={val.time} available={val.available} />
                    })
                : <div className="bg-zinc-200 rounded-lg p-2 text-black">No slots available! Try another day</div>
                }
            </div>
        </section>
    );
}

export default TimeSlots;