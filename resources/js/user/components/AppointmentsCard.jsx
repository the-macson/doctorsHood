import React from 'react';
import { useState } from 'react';
import DocProfile from '../Assets/Images/profile.jpg';

const AppointmentsCard = (props) => {
    const [showDetails , setShowDetails] = useState(false);
    const [showTitle, setShowTitle] = useState("View more details");

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [status, setStatus] = useState(props.status);

    const [docName, setDocName] = useState("");
    const [docSpec, setDocSpec] = useState("");

    const [healthTitle, setHealthTitle] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [symptoms, setSymptoms] = useState("");

    function convertTime(input) {
        input = input.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [input];
        if (input.length > 1){
            input = input.slice (1);
            input[3] = +input[0] < 12 ? ' AM' : ' PM';
            input[0] = +input[0] % 12 || 12;
        }
        return input.join ('');
    }

    function updateStatus(){
        var today = new Date();
        var todayDate = today.toISOString().slice(0, 10);
        var todayTime = today.toLocaleTimeString();
        if (props.date === todayDate){
            if (props.time < todayTime){
                setStatus("completed");
            }
        }else if (props.date < todayDate){
            setStatus("completed");
        }
    }

    function loadDocData(docId){
        var packet = {
            id : docId
        };
        axios.post('/user/getDoctorData', packet)
        .then(
            response => {
                setDocName(response.data[0].name);
                setDocSpec(response.data[0].specialisation);
            }
        )
    }

    function loadPrescribeData(appId){
        var packet = {
            id : appId
        };
        axios.post('/user/getPrescribeData', packet)
        .then(
            response => {
                setHealthTitle(response.data[0].health_title);
                setDiagnosis(response.data[0].diagnosis_details);
                setSymptoms(response.data[0].symptom_details);
            }
        )
    }

    React.useEffect(() => {
        loadDocData(props.docId);
        loadPrescribeData(props.appId);
        updateStatus();
        setDate(props.date.split("-").reverse().join("-"));
        setTime(convertTime(props.time));
    });

    function MoreDetails(){
        if(showDetails == true){
            setShowTitle("View less details");
            return(
                <div>
                    <ul className='list-outside list-disc pl-8 pt-4'>
                        {diagnosis !== null ?
                            <li className="mb-3">
                                <span className='font-bold text-lg'>Diagnosis</span>
                                <ul className='font-semibold'>
                                    <li>{diagnosis}</li>
                                </ul>
                            </li>
                            : null
                        }
                        {symptoms !== null ?
                            <li>
                                <span className='font-bold text-lg'>Symptoms</span>
                                <ul className='font-semibold'>
                                    <li>{symptoms}</li>
                                </ul>
                            </li>
                            : null
                        }
                    </ul>
                </div>
            )
        }else{
            setShowTitle("View more details");
            return <div></div>;
        }
    }

    return (
        <div className='my-4 sm:m-10 box-content'>
            <div className='bg-teal-100 md:w-6/12 w-11/12 m-auto sm:px-4 py-3 rounded-lg Appoint-div'>
                <h1 className='text-xl sm:text-2xl'>{healthTitle !== "" ? healthTitle : (props.appType.charAt(0).toUpperCase() + props.appType.slice(1) + " Appointment")}</h1>
                <p className='text-sm' >{date} || {time} <span className='bg-[#1EAE98] p-1 pt-0.5 rounded-xl text-xs ml-2 text-white'>{status}</span></p>
                <div className='flex flex-row pt-3'>
                    <div className='w-16'>
                        <img className='rounded-full' src={DocProfile} alt="doctor-pic" />
                    </div>
                    <div>
                        <h1 className='text-base sm:text-lg pt-2.5 pl-5 font-bold'>{docName}</h1>
                        <p className='text-sm pl-5 font-semibold'>{docSpec}</p>
                    </div>
                    <div className='flex-auto'>
                        {status === "upcoming" ?
                            props.meetLink !== null ?
                            <a href={props.meetLink} target="_blank" className='text-xs sm:text-sm mt-3 float-right mr-2 sm:mr-5 px-3 py-2 sm:py-2.5 sm:px-3 flex justify-center items-center bg-emerald-600 text-white rounded-lg w-fit hover:bg-emerald-400 text-center text-base font-semibold focus:outline-none rounded-lg cursor-pointer'>Join Meeting</a>
                            :
                            <a className='text-xs sm:text-sm mt-3 float-right mr-2 sm:mr-5 px-3 py-2 sm:py-2.5 sm:px-3 flex justify-center items-center bg-slate-400 text-white rounded-lg w-fit text-center text-base font-semibold focus:outline-none rounded-lg cursor-not-allowed'>Not Available</a>
                        :
                        <a href={"/user/" + (props.appType === "online" ? "online-appointment" : "offline-appointment") + "/" + props.docId} className='text-xs sm:text-sm mt-3 float-right mr-2 sm:mr-5 px-3 py-2 sm:py-2.5 sm:px-3 flex justify-center items-center bg-emerald-600 text-white rounded-lg w-fit hover:bg-emerald-400 text-center text-base font-semibold focus:outline-none rounded-lg cursor-pointer'>Consult again</a>
                        }
                    </div>
                </div>
                <MoreDetails />
                {props.status === "completed" ?
                    <div className='flex flex-row py-1 sm:py-3'>
                        <div className='flex-auto'>
                            <a href={"/user/my-prescriptions/" + props.appId} className='text-xs sm:text-sm mt-3 mr-12 px-6 py-2.5 sm:py-3 flex justify-center items-center bg-emerald-600 text-white rounded-lg w-fit hover:bg-emerald-400 text-center text-base font-semibold focus:outline-none rounded-lg m-auto cursor-pointer'>View Prescription</a>
                        </div>
                        <div className='flex-auto'>
                            <button onClick={()=> setShowDetails(!showDetails)} type='button' className='text-xs sm:text-sm mt-3 mr-12 px-6 py-2.5 sm:py-3 flex justify-center items-center bg-emerald-600 text-white rounded-lg w-fit hover:bg-emerald-400 text-center text-base font-semibold focus:outline-none rounded-lg m-auto'>{showTitle}</button>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}

export default AppointmentsCard;