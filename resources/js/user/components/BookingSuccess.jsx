import React from "react";
import Check from "../Assets/Svg/SubmitIcon.gif";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';

const BookingSuccess = () => {
    const notify = () => toast.success("Redirecting in 3 seconds");
    function Notifiction() {
        useEffect(() => {
            notify();
        }, []);
        return <div></div>;
    }
    setTimeout(() => {
        window.location.href = '/homepage';
    }, 4000);
    return (
        <div className="bg-[#ffffff]">
            <img className="m-auto pt-28" src={Check} alt="" />
            <h1 className="text-center text-3xl sm:text-5xl pt-14 mx-5">Appointment Booked</h1>
            <Notifiction />
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </div>
    );
};

export default BookingSuccess;
