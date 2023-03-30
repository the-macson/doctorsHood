import { identity } from "lodash";
import React from "react";

function MeetingLobby(){
    const [link, setLink] = React.useState("");
    const [success, setSuccess] = React.useState(null);

    function linkChange(event){
        setLink(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        setSuccess("Sending...");
        const data = {
            app_id : id,
            meet_link : link,
            email : patient_email
        };
        axios.post('/doctor/feed-meet-link', data)
        .then(
            response => setSuccess(response.data)
        );
    }

    return (
        <section className="text-gray-600 body-font">
            <h1 className="text-3xl text-center mt-4 shadow-md pb-3">Meeting Lobby</h1>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                <p className="leading-relaxed">
                                    Join the meeting and copy meeting link
                                    <a className="bg-emerald-400 ml-3 rounded-md px-3 py-2 text-white text-lg hover:bg-emerald-300" href="https://meet.google.com/new?hs=180&amp;amp;authuser=0" target="_blank">Join Now</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                <p className="leading-relaxed">
                                    Paste the link below and send it to the patient
                                    <br />
                                    <form onSubmit={handleSubmit} className="mt-2">
                                        <input onChange={linkChange} type="url" className="border-2 border-teal-500 rounded-md w-72 px-3 py-1" placeholder="https://meet.google.com/xxx-yyyy-zzz" required />
                                        <input type="submit" value="Send" className="bg-teal-400 ml-4 rounded-md px-3 py-2 text-white text-md hover:bg-teal-300" />
                                    </form>
                                </p>
                                <p className="mt-1 ml-1 text-green-600">{success !== null ? success : null}</p>
                            </div>
                        </div>
                        <button onClick={() => {window.location.href="/doctor/online-appointment"}} className="py-1 w-28 px-3 mx-32 bg-cyan-400 justify-center hover:bg-cyan-300 text-white text-center text-base font-semibold shadow-md rounded-lg mb-3 hover:cursor-pointer">Done</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MeetingLobby;