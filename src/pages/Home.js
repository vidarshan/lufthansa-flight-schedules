import React, { useState, useEffect, forwardRef, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import cover from "../images/ssd.jpeg";
import Select from 'react-select';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
import { getToken } from '../actions/accessActions';
import DatePicker from "react-datepicker";
import { format } from 'date-fns'
import airports from '../data/airports.json';
import "react-datepicker/dist/react-datepicker.css";
import AircraftCard from "../components/AircraftCard";
import map from 'lodash.map';

const Home = () => {

    const dispatch = useDispatch();

    const accessDetails = useSelector((state) => state.getAccess);
    const { accessInfo, loading, error } = accessDetails;

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date().setMonth(startDate.getMonth() + 1))
    const [departureCountry, setDepartureCountry] = useState('');
    const [departureAirport, setDepartureAirport] = useState('');
    const [arrivalCountry, setArrivalCountry] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const countries = useRef([]);
    const departureAirports = useRef([]);
    const arrivalAirports = useRef([]);


    useEffect(() => {
        if (startDate > endDate) setStartDate(endDate)
    }, [endDate, startDate])

    useEffect(() => {
        if (startDate > endDate) setEndDate(startDate)
    }, [startDate, endDate])

    useEffect(() => {

        if (!accessInfo) {
            dispatch(getToken())
        }


        const ids = airports.map(airport => airport.country)
        let filtered = airports.filter(({ country }, index) => !ids.includes(country, index + 1))

        map(filtered, (filter) => {


            countries.current.push({ value: filter.country, label: filter.country })

        })



        console.log(countries.current)
    }, [])


    useEffect(() => {
        departureAirports.current.length = 0;

        airports.map((airport) => {

            if (airport.country === departureCountry && airport.type === 'Airports') {
                departureAirports.current.push({ value: airport.code, label: airport.name })
            }
        })

        console.log(departureAirports)
    }, [departureCountry])

    useEffect(() => {

        arrivalAirports.current.length = 0;

        console.log('arr', arrivalCountry)
        airports.map((airport) => {
            if (airport.country === arrivalCountry && airport.type === 'Airports' && airport.name !== departureAirport) {
                arrivalAirports.current.push({ value: airport.code, label: airport.name })
            }
            console.log(airport)
        })

    }, [arrivalCountry])

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className='p-10'>

            <div className="flex flex-row">

                <div className="bg-white flex justify-center rounded-xl flex-col items-center flex-row p-5 w-full mr-4 shadow-2xl">
                    <p className='mb-5 text-xl'>Find Flight</p>
                    <p className='text-blue-900'><FaPlaneDeparture /></p>
                    <Select placeholder='Departure airport' className='p-3 w-full' options={countries.current} onChange={(event) => setDepartureCountry(event.value)} />
                    <Select placeholder='Departure airport' className='p-3 w-full' options={departureAirports.current} onChange={(event) => setDepartureAirport(event.value)} />
                    <p className='text-blue-900'><FaPlaneArrival /></p>
                    <Select placeholder='Arrival to' className='p-3 w-full' options={countries.current} onChange={(event) => setArrivalCountry(event.value)} />
                    <Select placeholder='Arrival airport' className='p-3 w-full' options={arrivalAirports.current} onChange={(event) => setArrivalAirport(event.value)} />
                    <div className='w-full p-3'>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            nextMonthButtonLabel=">"
                            previousMonthButtonLabel="<"
                            popperClassName="react-datepicker-left"
                            customInput={<ButtonInput />}
                            renderCustomHeader={({
                                date,
                                decreaseMonth,
                                increaseMonth,
                                prevMonthButtonDisabled,
                                nextMonthButtonDisabled,
                            }) => (
                                <div className="flex items-center justify-between px-2 py-2">
                                    <span className="text-lg text-gray-700">
                                        {format(date, 'MMMM yyyy')}
                                    </span>

                                    <div className="space-x-2">
                                        <button
                                            onClick={decreaseMonth}
                                            disabled={prevMonthButtonDisabled}
                                            type="button"
                                            className={`
                                            ${prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
                                        >
                                            {/* <ChevronLeftIcon className="w-5 h-5 text-gray-600" /> */}
                                        </button>

                                        <button
                                            onClick={increaseMonth}
                                            disabled={nextMonthButtonDisabled}
                                            type="button"
                                            className={`
                                            ${nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
                                        >
                                            {/* <ChevronRightIcon className="w-5 h-5 text-gray-600" /> */}
                                        </button>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Direct Flight</span>
                    </label>
                    <div className='w-full p-3'>
                        <button className='bg-blue-900 text-yellow-400 w-full rounded-md py-2 font-bold'>Search</button>

                    </div>
                </div>
                {/* <img className="rounded-xl shadow-2xl" src={cover} alt="" /> */}
            </div>
            <div className='flex flex-col mt-10'>
                <p className='text-center text-3xl'>Aircrafts</p>
                <AircraftCard />
            </div>
        </div>
    );
};


const ButtonInput = forwardRef(({ value, onClick }, ref) => (
    <button
        onClick={onClick}
        ref={ref}
        type="button"
        className='inline-flex justify-start w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500'
    >
        {format(new Date(value), 'dd MMMM yyyy')}
    </button>
))

export default Home;
