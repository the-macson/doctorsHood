import React from 'react';
import Rrofile from '../Assets/Images/profile.jpg';
import { useState } from 'react';

const CreateDoctorProfile = () => {
  const [name, setName] = useState(doctor.name);
  const [gender,setGender] = useState(doctor.gender);
  const [age, setAge] = useState(doctor.age);
  const [qualification, setQualification] = useState(doctor.qualifications);
  const [specialisation, setSpecialisation] = useState(doctor.specialisation);
  const [disease_expertise, setDiseaseExpertise] = useState(doctor.disease_expertise);
  const [experience, setExperience] = useState(doctor.year_experience);
  const [state, setState] = useState(doctor.state);
  const [city, setCity] = useState(doctor.city);
  const [appointmentType, setAppointmentType] = useState(doctor.appointment_type);
  const [clinicTitle, setClinicTitle] = useState(doctor.clinic_title);
  const [clinicAddress, setClinicAddress] = useState(doctor.clinic_address);
  const [timeSlots, setTimeSlots] = useState(doctor.time_slots);
  const [daysSlots, setDaysSlots] = useState(doctor.days_slots);
  function handleSubmit(){
    const data = {
      name : name,
      gender : gender,
      age : age,
      qualification : qualification,
      specialisation : specialisation,
      disease_expertise : disease_expertise,
      experience : experience,
      state : state,
      city : city,
      appointment_type : appointmentType,
      clinic_title : clinicTitle,
      clinic_address : clinicAddress,
      time_slots : timeSlots,
      days_slots : daysSlots
    };
    axios.post('/doctor/set-profile', data)
    .then(
      response => window.location.href = response.data
    )
  }
  function takeName(event){
    setName(event.target.value);
  }
  function takeGender(event){
    setGender(event.target.value);
  }
  function takeAge(event){
    setAge(event.target.value);
  }
  function takeQualification(event){
    setQualification(event.target.value);
  }
  function takeSpecialisation(event){
    setSpecialisation(event.target.value);
  }
  function takeDiseaseExpertise(event){
    setDiseaseExpertise(event.target.value);
  }
  function takeExperience(event){
    setExperience(event.target.value);
  }
  function takeState(event){
    setState(event.target.value);
  }
  function takeCity(event){
    setCity(event.target.value);
  }
  function takeAppointmentType(event){
    setAppointmentType(event.target.value);
  }
  function takeClinicTitle(event){
    setClinicTitle(event.target.value);
  }
  function takeClinicAddress(event){
    setClinicAddress(event.target.value);
  }
  function takeTimeSlots(event){
    setTimeSlots(event.target.value);
  }
  function takeDaysSlots(event){
    setDaysSlots(event.target.value);
  }
  return(
    <div className='profile-div'>
      <div className='child-div'>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Create Your Profile</h1>
          </div>
          <div className='sm:flex sm:flex-row '>
            <div className='sm:basis-1/5 img-parent'>
              <img src={Rrofile} alt='profile' className='profile-img'/>
            </div>
            <div className='sm:basis-4/5 img-parent1'>
              <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
                <div className="sm:basis-1/2">
                <label htmlFor="full-name" className='sm:w-32'>
                  Full Name
                </label>
                <input required onChange={takeName} defaultValue={doctor.name} type="text" id="full-name" placeholder="Enter your Name" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
                </div>
              </div>
            </div>
          </div>
          <div className='gender sm:flex sm:flex-row'>
            <div className='basis-1/5'></div>
            <div className='basis-4/5 sm:flex sm:flex-row gender1'>
            <div className='basis-1/5 gender-div1 sm:pl-4'>
            <p>Gender</p>
            </div>
            <div className="flex items-center gap-8 gender-div">
            <input required type="radio" name='gender' defaultChecked={gender} value="male" onChange={takeGender} />
            <label htmlFor="gender">Male</label>
            <input required type="radio" name='gender' defaultChecked={gender} value="female" onChange={takeGender} />
            <label htmlFor="gender">Female</label>
            <input required type="radio" name='gender' defaultChecked={gender} value="other" onChange={takeGender} />
            <label htmlFor="gender">Other</label> 
            </div>
          </div>
          </div>
          <div className='sm:flex sm:flex-row'>
            <div className='basis-1/5 img-parent'>
            </div>
            <div className='basis-4/5 img-parent1'>
              <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
                <div className="sm:basis-1/2">
                <label htmlFor="age" className='sm:w-32'>
                  Age
                </label>
                <input required onChange={takeAge} type="number" id="age" placeholder="Enter your Age" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
                </div>
                <div className="sm:basis-1/2">
                <label htmlFor="degree" className='sm:w-32'>
                  Degrees
                </label>
                <select required onChange={takeQualification} name="degree" id="degree" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'>
                  <option value="">Select Degree</option>
                  <option value="Degree 1">Degree 1</option>
                  <option value="Degree 2">Degree 2</option>
                  <option value="Degree 3">Degree 3</option>
                </select>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-row'>
            <div className='basis-1/5 img-parent'>
            </div>
            <div className='basis-4/5 img-parent1'>
              <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
                <div className="sm:basis-1/2">
                <label htmlFor="specialisation" className='sm:w-32'>
                Specialisation
                </label>
                <select required onChange={takeSpecialisation} name="specialisation" id="specialisation" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'>
                  <option value="">Select Specialisation</option>
                  <option value="Allergist">Allergists</option>
                  <option value="Cardiologist">Cardiologists</option>
                  <option value="Endocrinologist">Endocrinologists</option>
                  <option value="Neurologist">Neurologists</option>
                  <option value="Ophthalmologist">Ophthalmologists</option>
                  <option value="Dermatologist">Dermatologist</option>
                </select>
                </div>
                <div className="sm:basis-1/2">
                <label htmlFor="diseases" className='sm:w-32'>
                Diseases 
                </label>
                <select required onChange={takeDiseaseExpertise} name="diseases" id="diseases" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'>
                  <option value="">Select Diseases</option>
                  <option value="Back Pain">Back Pain</option>
                  <option value="Fatigue">Fatigue</option>
                  <option value="Cough">Cough</option>
                  <option value="Constipation">Constipation</option>
                  <option value="Itching">Itching</option>
                  <option value="Vomiting">Vomiting</option>
                </select>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-row'>
            <div className='basis-1/5 img-parent'>
            </div>
            <div className='basis-4/5 img-parent1'>
              <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
                <div className="sm:basis-1/2">
                <label htmlFor="experience" className='sm:w-32'>
                  Year of Ex.
                </label>
                <input required onChange={takeExperience} type="number" id="experience" placeholder="Enter Years of experience" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
                </div>
                <div className="sm:basis-1/2">
                <label htmlFor="state" className='sm:w-32'>
                  State
                </label>
                <select required onChange={takeState} name="state" id="state" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'>
                  <option value="">Select your State</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Lakshadweep">Lakshadweep </option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Orissa">Orissa</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-row'>
            <div className='basis-1/5 img-parent'>
            </div>
            <div className='basis-4/5 img-parent1'>
              <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
                <div className="sm:basis-1/2">
                  <label htmlFor="city" className='sm:w-32'>
                    City
                  </label>
                  <input required onChange={takeCity} type="text" id="city" placeholder="Enter your City" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
                </div>
                <div className='sm:basis-1/2'>
                  <label htmlFor="appointment_type" className='sm:w-32'>
                    Appointment
                  </label>
                  <select onChange={takeAppointmentType} required name="diseases" id="diseases" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'>
                    <option value="">Select Appointment</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-row'>
            <div className='basis-1/5 img-parent'>
            </div>
            <div className='basis-4/5 img-parent1'>
              <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
                <div className="sm:basis-1/2">
                  <label htmlFor="clinic_title" className='sm:w-32'>
                    Clinic Title
                  </label>
                  <input required onChange={takeClinicTitle} type="text" id="clinic_title" placeholder="Enter your Clinic Title" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
                </div>
                <div className='sm:basis-1/2'>
                  <label htmlFor="clinic_address" className='sm:w-32'>
                    Address
                  </label>
                  <input required onChange={takeClinicAddress} type="text" placeholder="Enter your Clinic address" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-row'>
            <div className='basis-1/5 img-parent'>
            </div>
            <div className='basis-4/5 img-parent1'>
              <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
                <div className="sm:basis-1/2">
                  <label htmlFor="opening_time" className='sm:w-32'>
                    Time Slots
                  </label>
                  <select required onChange={takeTimeSlots} name="opening_time" id="opening" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'>
                    <option value="">Select time Slots</option>
                    <option value="9am-9pm">09:00 AM - 09:00 PM</option>
                    <option value="9am-8pm">09:00 AM - 08:00 PM</option>
                    <option value="9am-7pm">09:00 AM - 07:00 PM</option>
                    <option value="9am-6pm">09:00 AM - 06:00 PM</option>
                    <option value="9am-5pm">09:00 AM - 05:00 PM</option>
                    <option value="9am-4pm">09:00 AM - 04:00 PM</option>
                    <option value="9am-3pm">09:00 AM - 03:00 PM</option>
                    <option value="9am-2pm">09:00 AM - 02:00 PM</option>
                    <option value="9am-1pm">09:00 AM - 01:00 PM</option>
                    <option value="9am-12pm">09:00 AM - 12:00 PM</option>
                    <option value="9am-11am">09:00 AM - 11:00 AM</option>
                    <option value="9am-10am">09:00 AM - 10:00 AM</option>
                    <option value="10am-9pm">10:00 AM - 09:00 PM</option>
                    <option value="10am-8pm">10:00 AM - 08:00 PM</option>
                    <option value="10am-7pm">10:00 AM - 07:00 PM</option>
                    <option value="10am-6pm">10:00 AM - 06:00 PM</option>
                    <option value="10am-5pm">10:00 AM - 05:00 PM</option>
                    <option value="10am-4pm">10:00 AM - 04:00 PM</option>
                    <option value="10am-3pm">10:00 AM - 03:00 PM</option>
                    <option value="10am-2pm">10:00 AM - 02:00 PM</option>
                    <option value="10am-1pm">10:00 AM - 01:00 PM</option>
                    <option value="10am-12pm">10:00 AM - 12:00 PM</option>
                    <option value="10am-11am">10:00 AM - 11:00 AM</option>
                    <option value="11am-9pm">11:00 AM - 09:00 PM</option>
                    <option value="11am-8pm">11:00 AM - 08:00 PM</option>
                    <option value="11am-7pm">11:00 AM - 07:00 PM</option>
                    <option value="11am-6pm">11:00 AM - 06:00 PM</option>
                    <option value="11am-5pm">11:00 AM - 05:00 PM</option>
                    <option value="11am-4pm">11:00 AM - 04:00 PM</option>
                    <option value="11am-3pm">11:00 AM - 03:00 PM</option>
                    <option value="11am-2pm">11:00 AM - 02:00 PM</option>
                    <option value="11am-1pm">11:00 AM - 01:00 PM</option>
                    <option value="11am-12pm">11:00 AM - 12:00 PM</option>
                    {/* <option value="12pm-9pm">12:00 PM - 09:00 PM</option>
                    <option value="12pm-8pm">12:00 PM - 08:00 PM</option>
                    <option value="12pm-7pm">12:00 PM - 07:00 PM</option>
                    <option value="12pm-6pm">12:00 PM - 06:00 PM</option>
                    <option value="12pm-5pm">12:00 PM - 05:00 PM</option>
                    <option value="12pm-4pm">12:00 PM - 04:00 PM</option>
                    <option value="12pm-3pm">12:00 PM - 03:00 PM</option>
                    <option value="12pm-2pm">12:00 PM - 02:00 PM</option>
                    <option value="12pm-1pm">12:00 PM - 01:00 PM</option>
                    <option value="1pm-9pm">01:00 PM - 09:00 PM</option>
                    <option value="1pm-8pm">01:00 PM - 08:00 PM</option>
                    <option value="1pm-7pm">01:00 PM - 07:00 PM</option>
                    <option value="1pm-6pm">01:00 PM - 06:00 PM</option>
                    <option value="1pm-5pm">01:00 PM - 05:00 PM</option>
                    <option value="1pm-4pm">01:00 PM - 04:00 PM</option>
                    <option value="1pm-3pm">01:00 PM - 03:00 PM</option>
                    <option value="1pm-2pm">01:00 PM - 02:00 PM</option>
                    <option value="2pm-9pm">02:00 PM - 09:00 PM</option>
                    <option value="2pm-8pm">02:00 PM - 08:00 PM</option>
                    <option value="2pm-7pm">02:00 PM - 07:00 PM</option>
                    <option value="2pm-6pm">02:00 PM - 06:00 PM</option>
                    <option value="2pm-5pm">02:00 PM - 05:00 PM</option>
                    <option value="2pm-4pm">02:00 PM - 04:00 PM</option>
                    <option value="2pm-3pm">02:00 PM - 03:00 PM</option>
                    <option value="3pm-9pm">03:00 PM - 09:00 PM</option>
                    <option value="3pm-8pm">03:00 PM - 08:00 PM</option>
                    <option value="3pm-7pm">03:00 PM - 07:00 PM</option>
                    <option value="3pm-6pm">03:00 PM - 06:00 PM</option>
                    <option value="3pm-5pm">03:00 PM - 05:00 PM</option>
                    <option value="3pm-4pm">03:00 PM - 04:00 PM</option>
                    <option value="4pm-9pm">04:00 PM - 09:00 PM</option>
                    <option value="4pm-8pm">04:00 PM - 08:00 PM</option>
                    <option value="4pm-7pm">04:00 PM - 07:00 PM</option>
                    <option value="4pm-6pm">04:00 PM - 06:00 PM</option>
                    <option value="4pm-5pm">04:00 PM - 05:00 PM</option>
                    <option value="5pm-9pm">05:00 PM - 09:00 PM</option>
                    <option value="5pm-8pm">05:00 PM - 08:00 PM</option>
                    <option value="5pm-7pm">05:00 PM - 07:00 PM</option>
                    <option value="5pm-6pm">05:00 PM - 06:00 PM</option>
                    <option value="6pm-9pm">06:00 PM - 09:00 PM</option>
                    <option value="6pm-8pm">06:00 PM - 08:00 PM</option>
                    <option value="6pm-7pm">06:00 PM - 07:00 PM</option>
                    <option value="7pm-9pm">07:00 PM - 09:00 PM</option>
                    <option value="7pm-8pm">07:00 PM - 08:00 PM</option>
                    <option value="8pm-9pm">08:00 PM - 09:00 PM</option> */}
                  </select>
                </div>
                <div className="sm:basis-1/2">
                  <label htmlFor="day_slot" className='sm:w-32'>
                    Day's Slots
                  </label>
                  <select required onChange={takeDaysSlots} name="day_slot" id="day_slot" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'>
                    <option value="">Select Day's Slots</option>
                    <option value="Mon-Sat">Mon-Sat</option>
                    <option value="Mon-Fri">Mon-Fri</option>
                    <option value="All days">All days</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-row'>
            <div className='basis-1/5 img-parent'></div>
          </div>
          <div className='sm:flex sm:flex-row'>
            <div className='basis-1/5 img-parent'></div>
            <div className='basis-4/5 img-parent1 dec'>
              <div className="sm:flex sm:flex-row">
                <input required type="checkbox" name="declaration" id="declaration" className='dec-c'/>
                <p className='dec-p'>I hereby declare that I am lawfully authorized to provide the abbove information on behalf of the owner of the information</p>
              </div>
              <div className='dec-btn'>
                <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' value="Submit"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDoctorProfile;