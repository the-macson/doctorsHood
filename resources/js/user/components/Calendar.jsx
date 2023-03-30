import React from "react";
import DatePicker from 'sassy-datepicker';

function Calendar(props){
    const onChange = (date) => {
        let newDate = date.toString();
        props.onDateChange(newDate.substring(0, 10), newDate);
    };
    return (
        <div className="h-fit w-fit border-1 border-gray-500 rounded-lg justify-self-center">
            <DatePicker onChange={onChange} />
        </div>
    );
}

export default Calendar;