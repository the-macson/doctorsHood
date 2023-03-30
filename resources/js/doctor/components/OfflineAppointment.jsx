import React, { useState } from 'react';
// import SidebarComp from './SidebarComp';
import OfflineDoctorAppointments from './OfflineDoctorAppointments';

const OfflineAppointment = () => {
  const [upcoming1, setUpcoming1] = useState(true);
  const [completed1, setCompleted1] = useState(false);

  function updateUpcoming1(){
    setUpcoming1(true);
    setCompleted1(false);
  }

  function updateCompleted1(){
    setCompleted1(true);
    setUpcoming1(false);
  }

  return (
    <div>
      {/* <SidebarComp /> */}
      <div className="sm:ml-80 top-0 fixed w-5/6">
        <h1 className="mx-3 mt-3 text-2xl font-bold">Offline Appointment</h1>
        <div className="mx-3 sm:mt-8 mb-3">
          <button type="button" className={upcoming1 ? "py-2 px-4 bg-teal-600 items-center justify-center hover:bg-teal-600 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" : "py-2 px-4 bg-teal-600 items-center justify-center focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"} onClick={updateUpcoming1}>
            Upcoming
          </button>
          <button type="button" className={completed1 ? "mx-8 py-2 px-4 bg-teal-600 items-center justify-center focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" : "mx-8 py-2 px-4 bg-teal-600 items-center justify-center hover:bg-teal-600 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"} onClick={updateCompleted1}>
            Completed
          </button>
        </div>
      </div>
      <div className="mt-44">
        {upcoming1 ?
          upcoming_appointments.map((props) => (<OfflineDoctorAppointments status ="upcoming" id={props.id} patient_id={props.patient_id} date={props.date} time={props.time} />))
          :
          completed_appointments.map((props) => (<OfflineDoctorAppointments status ="completed" id={props.id} patient_id={props.patient_id} date={props.date} time={props.time} />))
        }
      </div>
    </div>
  );
}

export default OfflineAppointment;