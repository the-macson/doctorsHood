import React from 'react';

const Specialisation = () => {
    return (
        <div>
            <div className="py-6 text-center lg:py-10 bg-gray-100">
                <h2 className="text-3xl block text-teal-500 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Choose Specialisation
                </h2>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:mx-60 mb-32 p-1 sm:mt-auto mt-10 text-xl md:text-4xl text-teal-500 rounded-lg">
                {specialisations.map((props) => (
                    <div onClick={event =>  window.location.href="/user/select-doctor/" + props.name} className="h-16 mt-8 p-3 text-center my-2 sm:mx-4 shadow hover:bg-teal-500 hover:text-white hover:shadow-2xl hover:cursor-pointer rounded">{props.name}</div>
                ))}
            </div>
        </div>
    );
};

export default Specialisation;