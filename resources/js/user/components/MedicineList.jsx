import React from 'react';

const MedicineList = (props) => {
    
    function convertTime(input) {
        input = input.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [input];
        if (input.length > 1){
            input = input.slice (1);
            input[3] = +input[0] < 12 ? ' AM' : ' PM';
            input[0] = +input[0] % 12 || 12;
        }
        return input.join ('');
    }

    var medTime = convertTime(props.time);

    if (props.dayQuery === props.day){
        return (
            <form className="w-5/6 border-1 border-black bg-white rounded-lg scroll-m-2 sm:ml-5 ml-5 mb-6 mt-3">
                <h1 className='sm:text-xl mt-6 font-bold sm:mb-3 ml-5'>Reminder</h1>
                <div className='cd ml-5'>
                    <div className='sm:mt-2 mt-1 '>
                        <label  className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Medication Name :</label>
                        <input type="text" id="health-title" disabled value={props.name} className="block sm:inline sm:ml-8 w-5/6 md:w-80 sm:px-2 sm:py-1 py-1.5 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300" />
                    </div>
                    <div className='mt-3'>
                        <label  class="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">No. of Doses :</label>
                        <input type="text" id="health-title" disabled value={props.dose} className="block sm:inline sm:ml-16 w-5/6 md:w-80 sm:px-2 sm:py-1 py-1.5 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300" />
                    </div>
                    <div className='mt-3'>
                        <label  class="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Medication Type :</label>
                        <input type="text" id="health-title" disabled value={props.type} className="block sm:inline sm:ml-10 w-5/6 md:w-80 sm:px-2 sm:py-1 py-1.5 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300" />
                    </div>
                    <div className='mt-3'>
                        <label  className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Instruction :</label>
                        <input type="text" id="health-title" disabled value={props.instructions} className="block sm:inline sm:ml-20 w-5/6 md:w-80 sm:px-2 sm:py-1 py-1.5 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300" />
                    </div>
                    <div>
                        <p className="text-sm mt-2 font-bold">Schedule and Reminder:</p>
                        <div className='mt-3'>
                            <label for="frequency" className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Frequency :</label>
                            <input type="text" id="frequency" disabled value={props.frequency + " time(s) a day"} className="block sm:inline sm:ml-6 w-5/6 md:w-80 sm:px-2 sm:py-1 py-1.5 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300" />
                        </div>
                        <div className='mt-3'>
                            <label for="prescribed-medicines" className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Time :</label>
                            <input type="text" id="health-title" disabled value={medTime} className="block sm:inline sm:ml-6 w-5/6 md:w-80 sm:px-2 sm:py-1 py-1.5 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300" />
                        </div>
                        <div className='mt-3 mb-2'>
                            <label for="instructions" className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Day :</label>
                            <input type="text" id="health-title" disabled value={props.day} className="block sm:inline sm:ml-8 w-5/6 md:w-80 sm:px-2 sm:py-1 py-1.5 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300" />
                        </div>
                        <div className='mt-3 mb-2'>
                            <label for="status" className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Status :</label>
                            <input type="text" id="status" disabled value={props.status} className="block sm:inline sm:ml-8 w-5/6 md:w-80 sm:px-2 sm:py-1 py-1.5 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }else {
        return ("");
    }
}

export default MedicineList;