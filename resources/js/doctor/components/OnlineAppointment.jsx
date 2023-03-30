import React, { useState } from 'react';
import SidebarComp from './SidebarComp';
import OnlineDoctorAppointments from './OnlineDoctorAppointments';

const OnlineAppointment = () => {
  const [upcoming, setUpcoming] = useState(true);
  const [completed, setCompleted] = useState(false);

  function updateUpcoming(){
    setUpcoming(true);
    setCompleted(false);
  }

  function updateCompleted(){
    setCompleted(true);
    setUpcoming(false);
  }

  return (
    <div>
      {/* <SidebarComp /> */}
      <div className="sm:ml-80 top-0 fixed w-5/6">
        <h1 className="mx-3 mt-3 text-2xl font-bold">Online Appointment</h1>
        <div className="mx-3 sm:mt-8 mb-3">
          <button type="button" className={upcoming ? "py-2 px-4 bg-teal-600 items-center justify-center hover:bg-teal-600 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" : "py-2 px-4 bg-teal-600 items-center justify-center focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"} onClick={updateUpcoming}>
            Upcoming
          </button>
          <button type="button" className={completed ? "mx-8 py-2 px-4 bg-teal-600 items-center justify-center focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" : "mx-8 py-2 px-4 bg-teal-600 items-center justify-center hover:bg-teal-600 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-32 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"} onClick={updateCompleted}>
            Completed
          </button>
        </div>
      </div>
      <div className="mt-44">
        {upcoming ?
          upcoming_appointments.map((props) => (<OnlineDoctorAppointments status ="upcoming" id={props.id} patient_id={props.patient_id} date={props.date} time={props.time} />))
          :
          completed_appointments.map((props) => (<OnlineDoctorAppointments status ="completed" id={props.id} patient_id={props.patient_id} date={props.date} time={props.time} />))
        }
      </div>
    </div>
  );
}

export default OnlineAppointment;