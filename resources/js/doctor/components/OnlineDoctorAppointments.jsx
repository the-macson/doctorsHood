import React from 'react'

const OnlineDoctorAppointments = (props) => {
    const [patient_name, setPatientName] = React.useState("");
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    
    const packet = {
        patient_id : props.patient_id
    };

    function loadData(){
        axios.post('/doctor/getPatientData', packet)
        .then(
            response => setPatientName(response.data)
        )
    }

    function convertTime(input) {
        input = input.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [input];
        if (input.length > 1){
            input = input.slice (1);
            input[3] = +input[0] < 12 ? ' AM' : ' PM';
            input[0] = +input[0] % 12 || 12;
        }
        return input.join ('');
    }

    React.useEffect(() => {
        loadData();
        setDate(props.date.split("-").reverse().join("-"));
        setTime(convertTime(props.time));
    });

    if (props.status === "upcoming"){
        return (
            <div>
                <div className="mb-5">
                    <div className="sm:ml-80 border-1 border-black bg-white w-1/3 rounded-lg">
                        <div className="mx-3 mt-3 mb-3">
                            <p><span className="font-bold">Appointment ID: </span><span>{props.id}</span></p>
                            <p><span className="font-bold">Patient Name: </span><span>{patient_name}</span></p>
                            <p><span className="font-bold">Status: </span><button className="mx-2 py-1 px-1 bg-teal-300 items-center justify-center hover:bg-green-300 focus:ring-green-300 focus:ring-offset-teal-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Upcoming</button></p>
                            <p><span className="font-bold">Date: </span><span>{date}</span></p>
                            <p><span className="font-bold">Time: </span><span>{time}</span></p>
                            <button onClick={() => {window.location.href="/doctor/meeting-lobby/" + props.id}} className="py-1 w-36 px-3 mx-32 bg-rose-500 justify-center hover:bg-rose-500 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-3 hover:cursor-pointer">Join Now</button>
                            <button onClick={() => {window.location.href="/doctor/create-report/" + props.id}} className="py-1 w-36 px-3 mx-32 bg-orange-500 justify-center hover:bg-orange-400 focus:ring-orange-400 focus:ring-offset-orange-400 text-white w-36 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg hover:cursor-pointer">Create Report</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else if (props.status === "completed"){
        return (
            <div>
                <div className="mb-5">
                    <div className="sm:ml-80 border-1 border-black bg-white w-1/3 rounded-lg">
                        <div className="mx-3 mt-3 mb-3">
                            <p><span className="font-bold">Appointment ID: </span><span>{props.id}</span></p>
                            <p><span className="font-bold">Patient Name: </span><span>{patient_name}</span></p>
                            <p><span className="font-bold">Status: </span><button className="mx-2 py-1 px-1 bg-teal-400 items-center justify-center hover:bg-green-300 focus:ring-green-300 focus:ring-offset-teal-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Completed</button></p>
                            <p><span className="font-bold">Date: </span><span>{date}</span></p>
                            <p><span className="font-bold">Time: </span><span>{time}</span></p>
                            <button onClick={() => {window.location.href="/doctor/view-report/" + props.id}} className="py-1 px-3 mx-32 bg-emerald-400 justify-center hover:bg-emerald-300 focus:ring-emerald-500 focus:ring-offset-emerald-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg hover:cursor-pointer">View Report</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OnlineDoctorAppointments;