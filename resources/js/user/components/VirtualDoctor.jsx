import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import background from "../Assets/Images/backgroundImage.jpeg";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';

function VirtualDoctor(){
    const notify = () => toast.success("Initiate conversation by saying 'Hi'");
    function Notifiction() {
        useEffect(() => {
            notify();
        }, []);
        return <div></div>;
    }
    return (
        <div>
            <Navbar userRole={role} />
            <div className="flex justify-content-center mt-20 mb-5">
                <div className="border-3 bg-contain bg-no-repeat bg-center bg-origin-content" style={{ backgroundImage: `url(${background})` }}>
                    <iframe
                        allow="microphone;"
                        width="550"
                        height="630"
                        src="https://console.dialogflow.com/api-client/demo/embedded/baf9f6a2-1ccd-461f-97ee-36a8d1dec47e">
                    </iframe>
                </div>
            </div>
            <Notifiction />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={true}
            />
            <Footer />
        </div>
    );
}

export default VirtualDoctor;