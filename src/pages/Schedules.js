import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSchedules } from '../actions/scheduleActions';
import { Divider, Pagination, Stepper } from '@mantine/core';
import { GiCommercialAirplane } from 'react-icons/gi';
import { FiClock } from 'react-icons/fi'
import { List, ThemeIcon } from '@mantine/core';
import { AiFillStar } from 'react-icons/ai';
import { FaPlane, FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
import { BsFillCheckCircleFill, BsFillXCircleFill, BsClockFill } from 'react-icons/bs';

const Schedules = () => {

    const dispatch = useDispatch();



    const scheduleDetails = useSelector((state) => state.getSchedules);
    const { loading, error, schedules } = scheduleDetails; const [active, setActive] = useState(1);


    const params = useParams();
    console.log(params)

    useEffect(() => {
        let details = {
            from: params.from,
            to: params.to,
            date: params.date,
            direct: params.direct
        }
        // dispatch(getSchedules(details));
    }, [dispatch])
    return (
        <div className='grid grid-cols-1 m-6 p-10'>
            {/* {loading ? <div>loading</div> : error ? <div>errr</div> : <div>
                <div className='shadow-xl'>d</div>
            </div>} */}
            <div className='m-3 pb-5'>
                <p className='text-xl font-semibold'>Schedules on 12-01-2022 from JFK to FRA</p>
                <Divider />
            </div>
            <div className='shadow-xl rounded-lg m-3 p-8 bg-white'>


                <p className='p-4 text-xl font-semibold'>Quatar Airways</p>

                <div className='shadow-xl rounded-lg p-5 m-3'>
                    <Stepper active={active} completedIcon={<GiCommercialAirplane />}>
                        <Stepper.Step icon={<GiCommercialAirplane size={18} />} label={params.from} description='Germany' />
                        <Stepper.Step icon={<GiCommercialAirplane size={18} />} label={params.to} description='United States' />
                    </Stepper>
                </div>
                <div className='p-3'>
                    <p className='text-xl font-semibold text-gray-500 mt-4'>Time</p>
                    <Divider />
                </div>
                <div className='grid grid-cols-2'

                >
                    <div className='shadow-lg rounded-lg m-3 p-3 flex flex-col justify-center items-center'>
                        <FaPlaneDeparture />
                        <p className='mt-3 text-lg'>2021-12-21 14:30</p>
                    </div>
                    <div className='shadow-lg rounded-lg m-3 p-3 flex flex-col justify-center items-center'>
                        <FaPlaneDeparture />
                        <p className='mt-3 text-lg'>Terminal 2</p>
                    </div>
                </div>
                <div className='p-3'>
                    <p className='text-xl font-semibold text-gray-500 mt-4'>Journey Information</p>
                    <Divider />
                </div>
                <div className='grid grid-cols-3 '>
                    <div className='flex flex-col bg-red-100 justify-center items-center m-3 p-3 shadow-xl rounded-lg'>
                        <BsClockFill />
                        <p className='mt-3 text-lg'>8 hours and 30 minutes</p>
                    </div>

                    <div className='flex flex-col justify-center items-center shadow-xl m-3 p-4 rounded-lg'>
                        <FaPlane />
                        <p className='mt-3 text-lg'>Airbus A380-200</p>
                    </div>
                    <div className='grid grid-cols-2 shadow-xl m-3 p-4'>
                        <div className='flex flex-col justify-center items-center'>
                            <FaPlaneDeparture />
                            <p className='mt-3 text-lg'>Terminal 2</p>
                        </div>
                        <div className='flex flex-col  justify-center items-center'>
                            <FaPlaneArrival />
                            <p className='mt-3 text-lg'>Terminal 2</p>
                        </div>
                    </div>
                </div>
                <div className='p-3'>
                    <p className='text-xl font-semibold text-gray-500 mt-4'>Compartments</p>
                    <Divider />
                </div>
                <div className='grid grid-cols-3'>
                    <div className='shadow-xl rounded-lg p-5 m-3'>
                        <p className='text-2xl font-bold mb-4'>Economic</p>
                        <List
                            spacing="md"
                            size="md"
                            className='text-gray-600'
                            center
                            icon={
                                <ThemeIcon className='bg-blue-500' size={24} radius="xl">
                                    <AiFillStar size={18} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Power Seats</List.Item>
                            <List.Item>Fly Net</List.Item>
                            <List.Item>Seat Power</List.Item>
                            <List.Item>USB</List.Item>
                            <List.Item>Live TV</List.Item>
                        </List>
                    </div>
                    <div className='shadow-xl rounded-lg p-5 m-3'>
                        <p className='text-2xl font-bold mb-4'>Premium Economy</p>
                        <List
                            spacing="md"
                            size="md"
                            className='text-gray-600'
                            center
                            icon={
                                <ThemeIcon className='bg-yellow-500' size={24} radius="xl">
                                    <AiFillStar size={18} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Seat Power</List.Item>
                            <List.Item>Fly Net</List.Item>
                            <List.Item>Seat Power</List.Item>
                            <List.Item>USB</List.Item>
                            <List.Item>Live TV</List.Item>
                        </List>
                    </div>
                    <div className='shadow-xl rounded-lg p-5 m-3'>
                        <p className='text-2xl font-bold mb-4'>Business</p>
                        <List
                            spacing="md"
                            size="md"
                            className='text-gray-600'
                            center
                            icon={
                                <ThemeIcon className='bg-green-500' size={24} radius="xl">
                                    <AiFillStar size={18} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Seat Power</List.Item>
                            <List.Item>Fly Net</List.Item>
                            <List.Item>Seat Power</List.Item>
                            <List.Item>USB</List.Item>
                            <List.Item>Live TV</List.Item>
                        </List>
                    </div>
                </div>
                <div className='p-3'>
                    <p className='text-xl font-semibold text-gray-500 mt-4'>Days of Operation</p>
                    <Divider />
                </div>
                <div>
                    <div className='grid grid-cols-7'>
                        <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Monday
                            </p>
                        </div>
                        <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Tuesday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill className='text-green-500' />
                            </div>
                            <p>
                                Wednesday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Thursday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Friday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Saturday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillXCircleFill className='text-red-500' />
                            </div>
                            <p>

                                Sunday
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shadow-xl rounded-lg p-8 m-3 bg-white'>


                <p className='p-4 text-xl font-semibold'>Quatar Airways</p>

                <div className='shadow-xl rounded-lg p-5 m-3'>
                    <Stepper active={active} onStepClick={setActive} completedIcon={<GiCommercialAirplane />}>
                        <Stepper.Step icon={<GiCommercialAirplane size={18} />} label={params.from} description='2021-12-16 23:15' />
                        <Stepper.Step icon={<GiCommercialAirplane size={18} />} label={params.to} description='2021-12-19 14:15' />
                    </Stepper>
                </div>
                <div className='p-3'>
                    <p className='text-xl font-semibold text-gray-500 mt-4'>Journey Information</p>
                    <Divider />
                </div>
                <div className='grid grid-cols-3 '>
                    <div className='m-3 p-3 shadow-xl rounded-lg'>
                        8 hours and 30 minutes
                    </div>

                    <div className='flex flex-row justify-center items-center shadow-xl m-3 p-4 rounded-lg'>
                        <FaPlane />
                        <p>Airbus A380-200</p>
                    </div>
                    <div className='grid grid-cols-2 shadow-xl m-3 p-4'>
                        <div>
                            <p>Terminal 1</p>
                        </div>
                        <div>
                            <p>Terminal 2</p>
                        </div>
                    </div>
                </div>
                <div className='p-3'>
                    <p className='text-xl font-semibold text-gray-500 mt-4'>Compartments</p>
                    <Divider />
                </div>
                <div className='grid grid-cols-3'>
                    <div className='shadow-xl rounded-lg p-5 m-3'>
                        <p className='text-2xl font-bold mb-4'>Economic</p>
                        <List
                            spacing="md"
                            size="md"
                            className='text-gray-600'
                            center
                            icon={
                                <ThemeIcon className='bg-blue-500' size={24} radius="xl">
                                    <AiFillStar size={18} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Power Seats</List.Item>
                            <List.Item>Fly Net</List.Item>
                            <List.Item>Seat Power</List.Item>
                            <List.Item>USB</List.Item>
                            <List.Item>Live TV</List.Item>
                        </List>
                    </div>
                    <div className='shadow-xl rounded-lg p-5 m-3'>
                        <p className='text-2xl font-bold mb-4'>Premium Economy</p>
                        <List
                            spacing="md"
                            size="md"
                            className='text-gray-600'
                            center
                            icon={
                                <ThemeIcon className='bg-yellow-500' size={24} radius="xl">
                                    <AiFillStar size={18} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Seat Power</List.Item>
                            <List.Item>Fly Net</List.Item>
                            <List.Item>Seat Power</List.Item>
                            <List.Item>USB</List.Item>
                            <List.Item>Live TV</List.Item>
                        </List>
                    </div>
                    <div className='shadow-xl rounded-lg p-5 m-3'>
                        <p className='text-2xl font-bold mb-4'>Business</p>
                        <List
                            spacing="md"
                            size="md"
                            className='text-gray-600'
                            center
                            icon={
                                <ThemeIcon className='bg-green-500' size={24} radius="xl">
                                    <AiFillStar size={18} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Seat Power</List.Item>
                            <List.Item>Fly Net</List.Item>
                            <List.Item>Seat Power</List.Item>
                            <List.Item>USB</List.Item>
                            <List.Item>Live TV</List.Item>
                        </List>
                    </div>
                </div>
                <div className='p-3'>
                    <p className='text-xl font-semibold text-gray-500 mt-4'>Days of Operation</p>
                    <Divider />
                </div>
                <div>
                    <div className='grid grid-cols-7'>
                        <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Monday
                            </p>
                        </div>
                        <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Tuesday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Wednesday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Thursday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Friday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Saturday
                            </p>
                        </div> <div className='flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3'>
                            <div>

                                <BsFillCheckCircleFill />
                            </div>
                            <p>

                                Sunday
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Pagination total={5} siblings={3} />
            </div>
        </div>
    )
}

export default Schedules
