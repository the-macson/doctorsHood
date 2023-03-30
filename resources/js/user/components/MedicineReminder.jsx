import React from 'react';
import MedicineList from './MedicineList';
import addicon from "../Assets/Images/addicon.png";

const MedicineReminder = () => {
    const d = new Date();
    let day = d.getDay();

    if (day === 1){
        day = "Monday";
    }else if (day === 2){
        day = "Tuesday";
    }else if (day === 3){
        day = "Wednesday";
    }else if (day === 4){
        day = "Thursday";
    }else if (day === 5){
        day = "Friday";
    }else if (day === 6){
        day = "Saturday";
    }else if (day === 7){
        day = "Sunday";
    }

    const [query, setquery] = React.useState(day);
    
    function queryChange(event){
        setquery(event.target.value);
    }

    const customStyle = {
        backgroundColor : "#65C18C",
        border : "5px solid black"
    };

    return (
        <div className="mt-10 mb-20">
            <h1 className="text-2xl flex justify-center text-center font-bold">
                <span className="mt-2 mr-4">Medicine Reminder</span>
                <button onClick={() => {window.location.href = "/user/add-medicine"}} className="bg-gray-200 rounded-full w-12 h-12 hover:bg-teal-300 ml-4">
                    <img src={addicon} />
                </button>
            </h1>
            <div className="grid md:grid-cols-4 gap-5 my-4 mx-5">
                <div className="w-18 border-1 border-gray-500 rounded-lg text-center">
                    <button type="button" style={query === 'Sunday' ? customStyle : null} className="w-18 border-1 border-gray-500 bg-teal-400 text-white px-5 py-1 mt-3 rounded-lg shadow-md hover:bg-teal-300" onClick={queryChange} value='Sunday'>Sunday</button>
                    <button type="button" style={query === 'Monday' ? customStyle : null} className="w-18 border-1 border-gray-500 bg-teal-400 text-white px-5 py-1 mt-3 rounded-lg shadow-md hover:bg-teal-300" onClick={queryChange} value='Monday'>Monday</button>
                    <button type="button" style={query === 'Tuesday' ? customStyle : null} className="w-18 border-1 border-gray-500 bg-teal-400 text-white px-5 py-1 mt-3 rounded-lg shadow-md hover:bg-teal-300" onClick={queryChange} value='Tuesday'>Tuesday</button>
                    <button type="button" style={query === 'Wednesday' ? customStyle : null} className="w-18 border-1 border-gray-500 bg-teal-400 text-white px-5 py-1 mt-3 rounded-lg shadow-md hover:bg-teal-300" onClick={queryChange} value='Wednesday'>Wednesday</button>
                    <button type="button" style={query === 'Thursday' ? customStyle : null} className="w-18 border-1 border-gray-500 bg-teal-400 text-white px-5 py-1 mt-3 rounded-lg shadow-md hover:bg-teal-300" onClick={queryChange} value='Thursday'>Thursday</button>
                    <button type="button" style={query === 'Friday' ? customStyle : null} className="w-18 border-1 border-gray-500 bg-teal-400 text-white px-5 py-1 mt-3 rounded-lg shadow-md hover:bg-teal-300" onClick={queryChange} value='Friday'>Friday</button>
                    <button type="button" style={query === 'Saturday' ? customStyle : null} className="w-18 border-1 border-gray-500 bg-teal-400 text-white px-5 py-1 mt-3 rounded-lg shadow-md mb-3 hover:bg-teal-300" onClick={queryChange} value='Saturday'>Saturday</button>        
                </div>
                <div className="w-5/6 md:col-span-3 md:row-span-6 border-1 border-gray-500 rounded-lg sm:ml-2">
                    {medicine_reminders.length > 0 ?
                        medicine_reminders.map((props) => (<MedicineList name={props.name} dose={props.dosage} type={props.type} instructions={props.instruction} frequency={props.frequency} time={props.time} day={props.day} status={props.status} dayQuery={query} />))
                        :
                        <div className="flex justify-center mt-4">
                            <p className="text-lg">No reminders are scheduled for {query} !</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default MedicineReminder;