import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSchedules } from '../actions/scheduleActions';
import { Divider, Stepper } from '@mantine/core';
import { GiCommercialAirplane } from 'react-icons/gi';
import { FiClock } from 'react-icons/fi'
import { List, ThemeIcon } from '@mantine/core';

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
        <div className='grid grid-cols-1'>
            {/* {loading ? <div>loading</div> : error ? <div>errr</div> : <div>
                <div className='shadow-xl'>d</div>
            </div>} */}
            <div className='shadow-xl m-6 p-10 rounded-lg'>
                <div className='shadow-xl rounded-lg p-5 m-3'>
                    <Stepper active={active} onStepClick={setActive} completedIcon={<GiCommercialAirplane />}>
                        <Stepper.Step icon={<GiCommercialAirplane size={18} />} label={params.from} description='2021-12-16 23:15' />
                        <Stepper.Step icon={<GiCommercialAirplane size={18} />} label={params.to} description='2021-12-19 14:15' />
                    </Stepper>
                </div>

                <div className='grid grid-cols-2'>

                    <FiClock />
                    <p>9H 30M</p>

                </div>
                <p>Compartments</p>
                <div className='grid grid-cols-3'>
                    <div className='shadow-xl rounded-lg p-5 m-3'>
                        <p className='text-2xl font-bold mb-4'>Economic</p>
                        <List
                            spacing="xs"
                            size="md"
                            className='text-gray-600'
                            center
                            icon={
                                <ThemeIcon color="teal" size={24} radius="xl">
                                    <GiCommercialAirplane size={18} />
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
                        <p>Premium Economy</p>
                        <List
                            spacing="xs"
                            size="sm"
                            center
                            icon={
                                <ThemeIcon color="teal" size={24} radius="xl">
                                    <GiCommercialAirplane size={18} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Clone or download repository from GitHub</List.Item>
                            <List.Item>Install dependencies with yarn</List.Item>
                            <List.Item>To start development server run npm start command</List.Item>
                            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                            <List.Item
                                icon={
                                    <ThemeIcon color="blue" size={24} radius="xl">
                                        <GiCommercialAirplane size={18} />
                                    </ThemeIcon>
                                }
                            >
                                Submit a pull request once you are done
                            </List.Item>
                        </List>
                    </div>
                    <div className='shadow-xl rounded-lg p-5 m-3'>
                        <p>Business</p>
                        <List
                            spacing="xs"
                            size="sm"
                            center
                            icon={
                                <ThemeIcon color="teal" size={24} radius="xl">
                                    <GiCommercialAirplane size={18} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Clone or download repository from GitHub</List.Item>
                            <List.Item>Install dependencies with yarn</List.Item>
                            <List.Item>To start development server run npm start command</List.Item>
                            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                            <List.Item
                                icon={
                                    <ThemeIcon color="blue" size={24} radius="xl">
                                        <GiCommercialAirplane size={18} />
                                    </ThemeIcon>
                                }
                            >
                                Submit a pull request once you are done
                            </List.Item>
                        </List>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedules
