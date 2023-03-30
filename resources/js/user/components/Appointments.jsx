import React from 'react';
import AppointmentsCard from './AppointmentsCard';

const Appointments = () => {
  return (
    <div className='pt-14 pb-10'>
        <h1 className='text-3xl font-bold text-center my-4'>My Appointments</h1>
        {mainAppointmentArr.map((props) =>
          <AppointmentsCard appId={props.app_id} docId={props.doctor_id} appType={props.app_type} status={props.status} meetLink={props.meet_link} date={props.date} time={props.time} />
        )}
    </div>
    );
}

export default Appointments;