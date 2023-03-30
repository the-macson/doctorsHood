import React from 'react'
import SidebarComp from "./SidebarComp";

const PatientReport = () => {
  const [healthTitle, setHealthTitle] = React.useState('');
  const [diagnosisDetails, setDiagnosisDetails] = React.useState('');
  const [symptomDetails, setSymptomDetails] = React.useState('');
  const [prescribedMedicines, setPrescribedMedicines] = React.useState('');
  const [instructions , setInstructions] = React.useState('');

  function handleSubmit() {
    const data = {
      appointmentId: appId,
      patientId: patient[0].id,
      doctorId: doctor[0].id,
      healthTitle: healthTitle,
      diagnosisDetails: diagnosisDetails,
      symptomDetails: symptomDetails,
      prescribedMedicines: prescribedMedicines,
      instructions: instructions
    };

    axios.post('/doctor/generate-report', data)
    .then(
        response => window.location.href = response.data
    );
  }
  function takeHealthTitle(event) {
    setHealthTitle(event.target.value);
  }
  function takeDiagnosisDetails(event) {
    setDiagnosisDetails(event.target.value);
  }
  function takeSymptomDetails(event) {
    setSymptomDetails(event.target.value);
  }
  function takePrescribedMedicines(event) {
    setPrescribedMedicines(event.target.value);
  }
  function takeInstructions(event) {
    setInstructions(event.target.value);
  }

  return (
    <div>
      <SidebarComp />
        <div className="md:absolute md:left-96 md:top-6 sm:ml-0 ml-5">
          <h1 className='sm:text-xl sm:mt-0 sm:mb-2 mt-20 font-bold'>Patient Details : </h1>
          <div className='card sm:w-full sm:h-44 w-64 h-60 sm:mt-0 mt-2 bg-white z-[-1]'>
            <div className='sm:flex sm:flex-row sm:gap-24 sm:p-2 sm:ml-0 ml-2 sm:mt-0 mt-2'>
              <div className='sm:ml-5 sm:mt-3'>
                <p><span className='font-bold'>Name: </span><span>{patient[0].name}</span></p>
                <p><span className='font-bold'>Phone: </span><span>{patient[0].phone}</span></p>
                <p><span className='font-bold'>Email: </span><span>{patient[0].email}</span></p>
                <p><span className='font-bold'>Gender: </span><span>{patient[0].gender}</span></p>
                <p><span className='font-bold'>Age: </span><span>{patient[0].age}</span></p>
              </div>
              <div className='sm:mr-5 sm:mt-3'>
                <p><span className='font-bold'>City: </span><span>{patient[0].city}</span></p>
                <p><span className='font-bold'>Blood Group: </span><span>{patient[0].blood_group}</span></p>
                <p><span className='font-bold'>Height: </span><span>{patient[0].height_cm} cm</span></p>
                <p><span className='font-bold'>Weigth: </span><span>{patient[0].weight_kg} kg</span></p>
                <p><span className='font-bold'>Address: </span><span>{patient[0].address}</span></p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} >
            <h1 className='sm:text-xl mt-6 font-bold sm:mb-3'>Fill Details : </h1>
            <div className='cd'>
              <div className='sm:mt-2 mt-1 '>
                <label htmlFor="health-title" className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Health Title :</label>
                <input required onChange={takeHealthTitle} type="text" id="health-title" name="health-title" className="block sm:inline sm:ml-20 w-11/12 md:w-96 sm:px-2 sm:py-1 py-1.5 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300 " />
              </div>
              <div className='mt-3'>
                <label htmlFor="diagnosis-details" className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Diagnosis details :</label>
                <textarea required onChange={takeDiagnosisDetails} type="text" id="diagnosis-details" name='diagnosis-details' rows='4' cols='15' className="block sm:inline sm:ml-12 w-11/12 sm:w-96 sm:px-2 sm:py-1 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300" />
              </div>
              <div className='mt-3'>
                <label htmlFor="symptom-details" className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Symptom Details :</label>
                <textarea required onChange={takeSymptomDetails} type="text" id="symptom-details" name='symptom-details' rows='4' className="block sm:inline sm:ml-12 sm:px-2 sm:py-1 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300 w-11/12 sm:w-96" />
              </div>
              <div className='mt-3'>
                <label htmlFor="prescribed-medicines" className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Prescribed Medicines :</label>
                <textarea required onChange={takePrescribedMedicines} type="text" id="prescribed-medicines" name='prescribed-medicines' rows='4' cols='15' className="block sm:inline sm:ml-6 sm:px-2 sm:py-1 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300 w-11/12 sm:w-96" />
              </div>
              <div className='mt-3'>
                <label htmlFor="instructions" className="block sm:inline text-sm font-medium text-gray-200 dark:text-gray-600 align-top">Instructions :</label>
                <textarea required onChange={takeInstructions} type="text" id="instructions" name='instructions' rows='4' cols='15' className="block sm:inline sm:ml-20 sm:px-2 sm:py-1 border rounded-lg focus:outline-none focus:ring focus:ring-teal-300 w-11/12 sm:w-96" />
              </div>
            </div>
            <div>
              <input value="Submit" type="submit" className="sm:mt-1 mt-4 text-white bg-teal-700 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"/>
            </div>
          </form>
        </div> 
    </div>
  );
}

export default PatientReport;