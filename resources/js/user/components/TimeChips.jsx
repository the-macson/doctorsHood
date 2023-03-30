import React from "react";

function TimeChips(props){
    const [clicked, setClicked] = React.useState(false);
    const [timeVal, setTimeVal] = React.useState(null);

    const customStyle = {
        border: "2px solid #20c997",
        color: "#1EAE98"
    };

    function handleClick(event){
        if (event.target.getAttribute('value') !== null){
            setTimeVal(event.target.getAttribute('value'));
        }
        setClicked((preValue) => {
            return !preValue;
        });
    }

    if (timeVal !== null){
        props.onTimeChange(timeVal);
    }

    return(
        <div value={props.available === "yes" ? props.time : null} onClick={handleClick} style={clicked ? props.available === "yes" ? customStyle : null : null} className={props.available === "yes" ?
            "w-24 text-xs md:text-sm text-center md:w-fit inline-block rounded border-2 border-gray-600 py-2 px-3 text-gray-800 font-bold cursor-pointer"
            :
            "w-24 text-xs md:text-sm text-center md:w-fit inline-block rounded border-2 border-gray-300 py-2 px-3 text-gray-400 font-bold cursor-not-allowed"
        }>{props.time}</div>
    );
}

export default TimeChips;