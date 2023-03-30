import React from "react";

function ClinicDetails(props){
    return (
        <div className="bg-white w-full lg:w-1/2 md:w-full cursor-pointer">
            <div className="flex border-2 rounded-lg border-teal-700 border-opacity-50 p-4 sm:flex-row flex-col">
                <div className="w-12 h-12 sm:mr-8 sm:mb-0 mb-4 hidden md:inline-flex items-center justify-center rounded-full bg-indigo-100 text-emerald-600 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div className="flex-grow">
                    <h2 className="text-lg font-bold mb-2">{props.name}</h2>
                    <p className="md:block hidden text-gray-500 font-semibold mb-2">{props.address}</p>
                    <p className="block md:hidden text-gray-500 font-semibold mb-2">{props.address}</p>
                </div>
            </div>
        </div>
    );
}

export default ClinicDetails;