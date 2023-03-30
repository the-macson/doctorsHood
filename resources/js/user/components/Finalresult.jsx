import React, { useState } from "react";
import ListItem from './ListItem';
import NoResults from './NoResults';

const Finalresult =() =>{
  const [onLine, setOnLine] = useState(true);
  const [onSite, setOnSite] = useState(false);

  function updateOnline(){
    setOnLine(true);
    setOnSite(false);
  }

  function updateOnsite(){
    setOnSite(true);
    setOnLine(false);
  }

  if (mainArr.length == 0){
    return (<NoResults />);
  }else {
    return (
      <div>
        <div className="center-00">
          <div className="flex items-center justify-center gap-4">
            <button type="button" className={onLine ? "py-2 px-10  bg-teal-600 hover:bg-teal-900 focus:ring-teal-600 focus:ring-offset-teal-600 text-white w-65 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-10 ml-10" : "py-2 px-10 bg-white hover:bg-gray-100 focus:ring-teal-600 focus:ring-offset-teal-600 text-teal-600 text-Blue w-65 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-10 ml-10"} onClick={updateOnline} >
              Online Booking                     
            </button>
            <button type="button" className={onSite ? "py-2 px-10  bg-teal-600  focus:ring-teal-600 focus:ring-offset-indigo-200 text-white w-65 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-10 mr-10" : "py-2 px-10 bg-white hover:bg-gray-100 focus:ring-teal-600 focus:ring-offset-teal-600 text-teal-600 text-Blue w-65 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-10 mr-10"} onClick={updateOnsite}>
              Onsite Booking
            </button>
          </div>
        </div>
        <div className="mt-32">
          {mainArr.map((props) => (
            <ListItem key={props.id} id={props.id} title={props.name} yrs ={props.year_of_experience} cast = {props.specialisation} online ={props.online} onsite ={props.onsite} checkOnline = {onLine} checkOnsite={onSite}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Finalresult;
