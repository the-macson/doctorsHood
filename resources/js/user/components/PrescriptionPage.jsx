import React from "react";
import picture from "../Assets/Images/profile.jpg";

function PrescriptionPage(){
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");

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
        setDate(appointment[0].date.split("-").reverse().join("-"));
        setTime(convertTime(appointment[0].time));
    });

    return (
        <div>
        <h1 className='text-3xl font-bold text-center my-4'>My Prescriptions</h1>
        <div className='my-4 sm:m-10 box-content'>
            <div className='bg-slate-200 border-2 border-teal-400 md:w-6/12 w-11/12 m-auto sm:px-4 py-3 rounded-lg Appoint-div'>
                <h1 className='text-xl sm:text-2xl'>{prescriptions[0].health_title}</h1>
                <p className='text-sm'>{date} || {time}</p>
                <div className='flex flex-row pt-3'>
                    <div className='w-16'>
                        <img className='rounded-full' src={picture} alt="doctor-pic" />
                    </div>
                    <div>
                        <h1 className='text-base sm:text-lg pt-2.5 pl-5 font-bold'>{doctor[0].name}</h1>
                        <p className='text-sm pl-5 font-semibold'>{doctor[0].specialisation}</p>
                    </div>
                    <div className='flex-auto'>
                        <a href={"/user/" + (appointment[0].appointment_type === "online" ? "online-appointment" : "offline-appointment") + "/" + appointment[0].doctor_id} className='text-xs sm:text-sm mt-3 float-right mr-2 sm:mr-5 px-3 py-2 sm:py-2.5 sm:px-3 flex justify-center items-center bg-emerald-600 text-white rounded-lg w-fit hover:bg-emerald-400 text-center text-base font-semibold focus:outline-none rounded-lg cursor-pointer'>Consult again</a>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-xl">Prescribed Medicines:</h1>
                    <span className="text-lg">• {prescriptions[0].prescribed_medicines}</span>
                </div>
                {prescriptions[0].instructions !== null ?
                    <div className="mt-3">
                        <h1 className="text-xl">Instructions:</h1>
                        <span className="text-lg">• {prescriptions[0].instructions}</span>
                    </div>
                    :
                    null
                }
            </div>
        </div>
        </div>
    );
}

export default PrescriptionPage;
