import React from "react";
import cover from "../images/ssd.jpeg";
import Select from 'react-select'
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa'

const Home = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className="flex flex-row p-10">

            <div className="bg-white flex justify-center rounded-xl flex-col items-center flex-row p-5 w-full mr-4 shadow-2xl">
                <p className='mb-5'>Find Flight</p>
                <p className='text-yellow-400'><FaPlaneDeparture /></p>
                <Select placeholder='Departure from' className='p-3 w-full' options={options} />
                <Select placeholder='Departure airport' className='p-3 w-full' options={options} />
                <p className='text-yellow-400'><FaPlaneArrival /></p>
                <Select placeholder='Arrival to' className='p-3 w-full' options={options} />
                <Select placeholder='Arrival airport' className='p-3 w-full' options={options} />
                <button className='bg-blue-900 w-full text-yellow-400 p-2 rounded-md font-bold'>Search</button>
            </div>

            <img className="rounded-xl shadow-2xl" src={cover} alt="" />

        </div>
    );
};

export default Home;
