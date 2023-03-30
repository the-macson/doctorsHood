import React from "react";
import ClinicDetails from "./ClinicDetails";

function ClinicList(){
    return (
        <section className="py-3 px-4 -mt-5 md:mt-0">
            <h1 className="text-lg md:text-base font-bold mb-3">Clinic Details</h1>
            <ClinicDetails name={doctor.clinic_title} address={doctor.clinic_address} />
        </section>
    );
}

export default ClinicList;