import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
// import cover from "../images/ssd.jpeg";
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
import { getToken } from '../actions/accessActions';
import { getSchedules } from '../actions/scheduleActions';
import { DatePicker } from '@mantine/dates';
import { Select, Checkbox } from '@mantine/core';
import airports from '../data/airports.json';
import "react-datepicker/dist/react-datepicker.css";
import AircraftCard from "../components/AircraftCard";
import map from 'lodash.map';
import moment from 'moment';

const Home = () => {

    const countries = useRef([]);
    const departureAirports = useRef([]);
    const arrivalAirports = useRef([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const accessDetails = useSelector((state) => state.getAccess);

    const { accessInfo } = accessDetails;

    const [departureCountry, setDepartureCountry] = useState('');
    const [departureAirport, setDepartureAirport] = useState('');
    const [arrivalCountry, setArrivalCountry] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [direct, setDirect] = useState(false);
    const [date, setDate] = useState();

    const submitHandler = () => {

        navigate(`/schedules/${departureAirport}/${arrivalAirport}/${moment(date).format('YYYY-MM-DD')}/${direct}/1`)
        // let details = {
        //     from: departureAirport,
        //     to: arrivalAirport,
        //     date: moment(date).format('YYYY-MM-DD'),
        //     direct
        // }
        // dispatch(getSchedules(details));
    }


    useEffect(() => {
        if (!accessInfo) {
            dispatch(getToken())
        }
        const ids = airports.map(airport => airport.country)
        let filtered = airports.filter(({ country }, index) => !ids.includes(country, index + 1))

        map(filtered, (filter) => {
            countries.current.push({ value: filter.country, label: filter.country })
        })


    }, [dispatch, accessInfo])


    useEffect(() => {
        departureAirports.current.length = 0;
        map(airports, (airport) => {

            if (airport.country === departureCountry && airport.type === 'Airports') {
                departureAirports.current.push({ value: airport.code, label: airport.name })
            }
        })
    }, [departureCountry])

    useEffect(() => {
        arrivalAirports.current.length = 0;
        map(airports, (airport) => {
            if (airport.country === arrivalCountry && airport.type === 'Airports' && airport.code !== departureAirport) {
                arrivalAirports.current.push({ value: airport.code, label: airport.name })
            }

        })

    }, [arrivalCountry, departureAirport])

    return (
        <div className='p-10'>

            <div className="flex flex-row">

                <div className="bg-white flex justify-center rounded-xl flex-col items-center flex-row p-5 w-full mr-4 shadow-2xl">
                    <p className='mb-5 text-xl'>Find Flight</p>
                    <p className='text-blue-900'><FaPlaneDeparture /></p>

                    <Select
                        className='p-3 w-full'
                        label="Flight from"
                        placeholder="Pick a country"
                        searchable
                        nothingFound="No countries"
                        data={countries.current}
                        onChange={(e) => setDepartureCountry(e)}

                    />
                    <Select
                        className='p-3 w-full'
                        label="Flight from"
                        placeholder="Pick an airport"
                        searchable
                        nothingFound="No airports"
                        data={departureAirports.current}
                        onChange={(e) => setDepartureAirport(e)}
                    />

                    <p className='text-blue-900'><FaPlaneArrival /></p>
                    <Select
                        className='p-3 w-full'
                        label="Flight to"
                        placeholder="Pick a country"
                        searchable
                        nothingFound="No countries"
                        data={countries.current}
                        onChange={(e) => setArrivalCountry(e)}
                    />
                    <Select
                        className='p-3 w-full'
                        label="Flight to"
                        placeholder="Pick an airport"
                        searchable
                        nothingFound="No airports"
                        data={arrivalAirports.current}
                        onChange={(e) => setArrivalAirport(e)}
                    />

                    <div className='w-full p-3'>
                        <DatePicker label='Date' placeholder='Pick a date' locale="de" onChange={(e) => setDate(e)} />
                    </div>
                    <label className="inline-flex items-center">
                        <Checkbox checked label="Direct Flight" onChange={(e) => e.target.checked ? setDirect(true) : setDirect(false)} />
                    </label>
                    <div className='w-full p-3'>
                        <button className='bg-blue-900 text-yellow-400 w-full rounded-md py-2 font-bold' onClick={() => submitHandler()}>Search</button>

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


export default Home;
