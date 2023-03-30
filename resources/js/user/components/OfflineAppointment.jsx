import React from "react";
import Calendar from "./Calendar";
import SlotBooking from "./SlotBooking";

function OfflineAppointment(){
    let todayDateRaw = new Date();
    let todayDate = todayDateRaw.toString().substring(0, 10);

    const [date, setDate] = React.useState(todayDate);

    var dd = String(todayDateRaw.getDate()).padStart(2, '0');
    var mm = String(todayDateRaw.getMonth() + 1).padStart(2, '0');
    var yyyy = todayDateRaw.getFullYear();
    var today = yyyy + '-' + mm + '-' + dd;

    const [otherAppointments, setOtherAppointments] = React.useState([]);

    function dateChange(newDate, rawDate){
        var year = rawDate.toString().substring(11, 15);
        var month = rawDate.toString().substring(4, 7);
        var date = rawDate.toString().substring(8, 10);
        month = convertMonth(month);
        var selectedDate = year + '-' + month + '-' + date;
        if (selectedDate >= today){
            setDate(newDate);
            const data = {
                docId: doctor.id,
                date: selectedDate
            };
            axios.post('/user/online-appointment/check-slots', data)
            .then(
                response => setOtherAppointments(() => {return response.data})
            );
        }else {
            window.location.reload();
        }
    }

    function convertMonth(mon){
        if (mon === "Jan"){
            return "01";
        }else if (mon === "Feb"){
            return "02";
        }else if (mon === "Mar"){
            return "03";
        }else if (mon === "Apr"){
            return "04";
        }else if (mon === "May"){
            return "05";
        }else if (mon === "Jun"){
            return "06";
        }else if (mon === "Jul"){
            return "07";
        }else if (mon === "Aug"){
            return "08";
        }else if (mon === "Sep"){
            return "09";
        }else if (mon === "Oct"){
            return "10";
        }else if (mon === "Nov"){
            return "11";
        }else if (mon === "Dec"){
            return "12";
        }
    }

    var timeValue = null;
    function timeGetFeed(timeVal){
        timeValue = timeVal;
    }

    var actDate = date.substring(8, 10);
    var actMon = date.substring(4, 7);
    actMon = convertMonth(actMon);
    var dateValue = yyyy + '-' + actMon + '-' + actDate;

    function handleBookingSubmit(event){
        event.preventDefault();
        if (timeValue !== null && dateValue !== null){
            const data = {
                docId: doctor.id,
                appointment: "offline",
                date: dateValue,
                time: timeValue
            };
            axios.post('/user/appointment/initiate-booking', data)
            .then(
                response => window.location.href = response.data
            );
        }else {
            window.alert("Please select time of appointment");
        }
    }

    return (
        <div className="mt-20 mb-20">
            <h1 className="text-2xl text-center font-bold">Book Onsite Appointment</h1>
            <div className="grid md:grid-cols-4 gap-5 my-4 mx-5">
                <Calendar onDateChange={dateChange} />
                <SlotBooking timeFeed={timeGetFeed} online="no" currentDate={date} otherDateApp={otherAppointments} />
                <button onClick={handleBookingSubmit} className="bg-emerald-600 text-white rounded-lg w-fit p-2 hover:bg-emerald-400 text-base font-bold justify-self-center">Confirm Booking</button>
            </div>
        </div>
    );
}

export default OfflineAppointment;