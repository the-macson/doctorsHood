import React from 'react';
import Rrofile from '../Assets/Images/profile.jpg';
import { useState } from 'react';

const CreateUserProfile = () => {
  const [name, setName] = useState(patient.name);
  const [gender,setGender] = useState(patient.gender);
  const [age, setAge] = useState(patient.age);
  const [bloodGroup, setBloodGroup] = useState(patient.blood_group);
  const [height, setHeight] = useState(patient.height_cm);
  const [weight, setWeight] = useState(patient.weight_kg);
  const [state, setState] = useState(patient.state);
  const [city, setCity] = useState(patient.city);
  const [address, setAddress] = useState(patient.address);
  function handleSubmit(){
    const data = {
      name : name,
      gender : gender,
      age : age,
      bloodGroup : bloodGroup,
      height : height,
      weight : weight,
      state : state,
      city : city,
      address : address
    };
    axios.post('/user/set-profile', data)
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
  function takeBloodGroup(event){
    setBloodGroup(event.target.value);
  }
  function takeHeight(event){
    setHeight(event.target.value);
  }
  function takeWeight(event){
    setWeight(event.target.value);
  }
  function takeState(event){
    setState(event.target.value);
  }
  function takeCity(event){
    setCity(event.target.value);
  }
  function takeAddress(event){
    setAddress(event.target.value);
  }
  return(
    <div className='profile-div'>
      <div className='child-div'>
        <div>
          <h1>Create Your Profile</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='sm:flex sm:flex-row '>
          <div className='sm:basis-1/5 img-parent'>
            <img src={Rrofile} alt='profile' className='profile-img'/>
          </div>
          <div className='sm:basis-4/5 img-parent1'>
            <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
              <div className='sm:basis-1/2'>
                <label htmlFor="full-name" className='sm:w-32'>
                  Full Name
                </label>
                <input required defaultValue={patient.name} onChange={takeName} type="text" id="full-name" placeholder="Enter your Name" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
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
              <div className='sm:basis-1/2'>
              <label htmlFor="age" className='sm:w-32'>
                Age
              </label>
              <input required onChange={takeAge} type="number" id="age" placeholder="Enter your Age" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
              </div>
              <div className='sm:basis-1/2'>
              <label htmlFor="blood-group" className='sm:w-32'>
                Blood Group
              </label>
              <select required onChange={takeBloodGroup} name="blood" id="blood" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'>
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
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
              <div className='sm:basis-1/2'>
              <label htmlFor="height" className='sm:w-32'>
                Height (cm)
              </label>
              <input required onChange={takeHeight} type="text" id="height" placeholder="Enter your Height in cm" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
              </div>
              <div className='sm:basis-1/2'>
              <label htmlFor="weight" className='sm:w-32'>
                 Weight (kg)
              </label>
              <input required onChange={takeWeight} type="text" id="weight" placeholder="Enter your Weight in kg" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
            </div>
          </div>
        </div>
        </div>
        <div className='sm:flex sm:flex-row'>
          <div className='basis-1/5 img-parent'>
          </div>
          <div className='basis-4/5 img-parent1'>
            <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
              <div className='sm:basis-1/2'>
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
              <div className='sm:basis-1/2'>
              <label htmlFor="city" className='sm:w-32'>
                 City
              </label>
              <input required onChange={takeCity} type="text" id="city" placeholder="Enter your City" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:w-56'/>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:flex sm:flex-row'>
            <div className='basis-1/5 img-parent'></div>
            <div className='basis-4/5 img-parent1'>
              <div className='sm:pt-4 sm:pl-4 sm:flex sm:flex-row'>
                  <label htmlFor="address" className='sm:w-32'>
                    Address
                  </label>
                  <textarea required onChange={takeAddress} id="address" rows="5" className='border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 w-9/12 sm:w-10/12 mx-5 sm:mx-4'></textarea>
              </div>
            </div>
        </div>
        <div className='sm:flex sm:flex-row'>
          <div className='basis-1/5 img-parent'></div>
          <div className='basis-4/5 img-parent1 dec'>
            <div className="sm:flex sm:flex-row">
              <input required type="checkbox" name="declaration" id="declaration" className='dec-c'/>
              <p className='dec-p'>I hereby declare that I am lawfully authorized to provide the abbove information on behalf of the owner of the information</p>
            </div>
            <div className='dec-btn'>
              <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' value="Submit" />
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserProfile;