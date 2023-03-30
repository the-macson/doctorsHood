import React from 'react';
import jar from "../Assets/Images/jar.png";
import other from "../Assets/Images/other.png";
import pills from "../Assets/Images/pills.png";
import syringe from "../Assets/Images/syringe.png";
import tablet from "../Assets/Images/tablet.png";

const AddMedicine = () => {

    const [dosage, setdosage] = React.useState('');
    const [medication_type, setMedicationType] = React.useState('');
    const [instructions, setinstructions] = React.useState('');
    const [frequency, setfrequency] = React.useState('');
    const [time, settime] = React.useState();
    const [days, setdays] = React.useState('');
    const [status, setstatus] = React.useState(false);
    const [medicine_name, setMedicineName] = React.useState('');

    function handleSubmit(){
        const packets = {
            medicine_name: medicine_name,
            medication_type: medication_type,
            instructions: instructions,
            frequency: frequency,
            time: time,  
            days: days,
            status: status,
            dosage: dosage,
        };

        axios.post('/user/upload-medicine', packets)
        .then(
            response => window.location.href = response.data
        )
        .catch(error => {
            console.log("ERROR:: ", error);  
        });
    }

    function nameChange(event){
        setMedicineName(event.target.value);
    }
    function dosageChange(event){
        setdosage(event.target.value);
    }
    function typeChange(event){
        setMedicationType(event.target.value);
    }
    function instructionsChange(event){
        setinstructions(event.target.value);
    }
    function frequencyChange(event){
        setfrequency(event.target.value);
    }
    function timeChange(event){
        settime(event.target.value);
    }
    function daysChange(event){
        setdays(event.target.value);
    }

    function ReminderSection(){
        if(status === true) {
            return(
                <div className="mt-4">
                    <div className="bg-gray-200 sm:w-96 h-8 rounded-lg px-3">
                        <label htmlFor="specialisation" className="mt-1.5">Reminder</label>
                        <select onChange={frequencyChange}  value={frequency} className='border border-transparent rounded-lg bg-gray-50 ml-2'>
                            <option value="">How many times per day ?</option>
                            <option value="1">Once a day</option>
                            <option value="2">2 times a day</option>
                            <option value="3">3 times a day</option>
                            <option value="4">4 times a day</option>
                        </select>
                    </div>
                    <div className="sm:flex">
                        <div className="inline p-3">
                            <input type="time" value={time} onChange={timeChange} className="bg-gray-200 h-7 w-18 rounded-lg mt-4"/>
                        </div>
                    </div> 
                    <div className="sm:flex mt-3">
                        <button type="button" className={days == 'Sunday' ? "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base font-semibold rounded-lg " : "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg"} onClick={daysChange} value='Sunday'>
                            Sunday
                        </button>
                        <button type="button" className={days == 'Monday' ? "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base rounded-lg ml-5" : "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg ml-5"} onClick={daysChange} value='Monday'>
                            Monday
                        </button>
                        <button type="button" className={days == 'Tuesday' ? "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base rounded-lg ml-5" : "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg ml-5"} onClick={daysChange} value='Tuesday'>
                            Tuesday
                        </button>
                        <button type="button" className={days == 'Wednesday' ? "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base rounded-lg ml-5" : "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg ml-5"} onClick={daysChange} value='Wednesday'>
                            Wednesday
                        </button>
                        <button type="button" className={days == 'Thursday' ? "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base rounded-lg ml-5" : "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg ml-5"} onClick={daysChange} value='Thursday'>
                            Thursday
                        </button>
                        <button type="button" className={days == 'Friday' ? "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base rounded-lg ml-5" : "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg ml-5"} onClick={daysChange} value='Friday'>
                            Friday
                        </button>
                        <button type="button" className={days == 'Saturday' ? "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base rounded-lg ml-5" : "m-2 px-3 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg ml-5"} onClick={daysChange} value='Saturday'>
                            Saturday
                        </button>
                    </div>
                </div> 
            );
        }else {
            return (<p></p>);
        }
    }
    
    return (
        <div>
            <h1 className="text-2xl text-center mt-8 font-bold">Medicine Reminder</h1>
            <div className="reminder sm:ml-24 mt-8">
                <form>
                    <div className="flex flex-row">
                        <div className="relative text-justify mt-4">
                            <label htmlFor="name-with-label" className="text-gray-700 text-base">Medication Name:</label>
                            <input type="text" id="name-with-label" onChange={nameChange} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-65 py-0.5 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent ml-4" name="medicine" placeholder="e.g. Paracetanol"/>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="relative text-justify mt-4">
                            <label htmlFor="name-with-label" className="text-gray-700 text-base">No of doses:</label>
                            <input type="number" id="rounded-email" onChange={dosageChange} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-16 py-0.5 px-1 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent ml-4" placeholder="1"/> 
                        </div>
                    </div>
                    <div className="relative text-justify mt-4">
                        <label htmlFor="name-with-label" className="text-gray-700 text-base">Medication Type:</label>
                    </div>
                    <div className="flex flex-row mt-3">
                        <button type="button" className={medication_type == 'Liquid' ?  "bg-[#A9F1DF] h-13 w-14 sm:h-20 sm:w-20 cursor-pointer" : "bg-gray-200 h-13 w-14 sm:h-20 sm:w-20  cursor-pointer"} onClick={typeChange} value="Liquid">
                            <img className="m-auto mt-2 sm:w-10 sm:h-10 w-5 h-5" src={jar} />
                            <p className="mt-1">Liquid</p>
                        </button>
                        <button type="button" className={medication_type == 'Pill' ? "bg-[#A9F1DF] h-13 w-14 sm:h-20 sm:w-20 ml-5 cursor-pointer" : "bg-gray-200 h-13 w-14 sm:h-20 sm:w-20 ml-5 cursor-pointer"} onClick={typeChange} value="Pill">
                            <img className="m-auto mt-2 sm:w-10 sm:h-10 w-5 h-5" src={pills}/>
                            <p className="mt-1">Pill</p>
                        </button>
                        <button type="button" className={medication_type == 'Syringe' ? "bg-[#A9F1DF] h-13 w-14 sm:h-20 sm:w-20 ml-5 cursor-pointer" : "bg-gray-200 h-13 w-14 sm:h-20 sm:w-20 ml-5 cursor-pointer"} onClick={typeChange} value="Syringe">
                            <img className="m-auto mt-2 sm:w-10 sm:h-10 w-5 h-5" src={syringe}/>
                            <p className="mt-1">Syringe</p>
                        </button>
                        <button type="button" className={medication_type == 'Tablet' ? "bg-[#A9F1DF] h-13 w-14 sm:h-20 sm:w-20 ml-5 cursor-pointer" : "bg-gray-200 h-13 w-14 sm:h-20 sm:w-20 ml-5 cursor-pointer"} onClick={typeChange} value="Tablet">
                            <img className="m-auto mt-2 sm:w-10 sm:h-10 w-5 h-5" src={tablet}/>
                            <p className="mt-1 ">Tablet</p>
                        </button>
                        <button type="button" className={medication_type == 'Other' ? "bg-[#A9F1DF] h-13 w-14 sm:h-20 sm:w-20 ml-5 cursor-pointer" : "bg-gray-200 h-13 w-14 sm:h-20 sm:w-20 ml-5 cursor-pointer"} onClick={typeChange} value="Other">
                            <img className="m-auto mt-2 sm:w-10 sm:h-10 w-5 h-5" src={other}/>
                            <p className="mt-1 test-xs">Other</p>
                        </button>
                    </div>
                    <div className="relative text-justify mt-4">
                        <label htmlFor="name-with-label" className="text-gray-700 text-base">Instructions:</label>
                    </div>
                    <div className="sm:flex mt-3 -ml-2">
                        <button type="button" className={instructions == 'No Instructions' ? "m-2 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base font-semibold rounded-lg " : "m-2 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg "} onClick={instructionsChange} value='No Instructions'>
                            No Instructions
                        </button>
                        <button type="button" className={instructions== 'Before eating' ? "m-2 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base rounded-lg ml-5" : "m-2 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg ml-5"} onClick={instructionsChange} value='Before eating'>
                            Before eating
                        </button>
                        <button type="button" className={instructions == 'After eating' ? "m-2 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base rounded-lg ml-5" : "m-2 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg ml-5"} onClick={instructionsChange} value='After eating'>
                            After eating
                        </button>
                        <button type="button" className={instructions == 'While eating' ? "m-2 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-[#A9F1DF] text-gray-600 text-center text-base rounded-lg ml-5" : "m-2 sm:m-0 w-28 sm:w-44 h-8 sm:flex justify-center items-center bg-gray-200 text-gray-600 text-center text-base rounded-lg ml-5"} onClick={instructionsChange} value='While eating'>
                            While eating
                        </button>
                    </div>
                    <div className="mt-4">
                        <div className="bg-gray-200 sm:w-96 h-8 rounded-lg">
                            <p className="text-justify ml-8 text-gray-700 text-lg">Schedule & Reminder</p>
                            <div className="text-right -mt-6">
                                <div className="relative inline-block w-10  align-middle select-none">
                                    <input onClick={()=>setstatus(!status)} type="checkbox" name="toggle" id="Blue" className={status ? "checked:bg-teal-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-teal-500 border-4 appearance-none cursor-pointer" : "checked:bg-teal-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"}/>
                                    <label htmlFor="Blue" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>                     
                                </div> 
                            </div>
                            <ReminderSection />
                            <input type="submit" value="Add" className="mt-12 w-28 sm:w-28 h-8 sm:flex justify-center items-center text-gray-600 text-center text-base rounded-lg bg-teal-200 hover:bg-teal-300 hover:text-black" onClick={handleSubmit}/>                                     
                        </div>
                    </div>
                </form>  
            </div>
        </div>
    );
}   

export default AddMedicine;