import React from 'react';
import a380 from '../images/a380.jpeg';

const AircraftCard = () => {
    return (
        <div className='flex flex-row shadow-xl rounded-lg'>
            <img className='w-80' src={a380} alt="" />
            <div>
                <p>Airbus A380</p>
            </div>
        </div>
    )
}

export default AircraftCard
