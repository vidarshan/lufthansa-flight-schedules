import React, { useState } from 'react';
import { GiCommercialAirplane } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { List, ThemeIcon } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";
import { FaPlane, FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import {
    BsFillCheckCircleFill,
    BsFillXCircleFill,
    BsClockFill,
} from "react-icons/bs";
import { Pagination, Stepper, Divider } from "@mantine/core";


const ScheduleCard = (schedule) => {

    const [active, setActive] = useState(1);

    return (
        <div className="shadow-xl rounded-xl m-3 p-8 bg-white xs:m-1 xs:p-2">
            {/* {console.log(schedule)} */}
            <p className="p-4 text-2xl font-semibold">Quatar Airways</p>
            <div className="shadow-xl rounded-xl p-5 m-3 xs:p-3 xs:flex xs:flex-col xs:items-center">
                <Stepper
                    breakpoint="xs"
                    size="sm"
                    active={active}
                    completedIcon={<GiCommercialAirplane />}
                >
                    <Stepper.Step
                        icon={<GiCommercialAirplane size={18} />}
                        label='FRA'
                        description="Germany"
                    />
                    <Stepper.Step
                        icon={<GiCommercialAirplane size={18} />}
                        label='JFK'
                        description="United States"
                    />
                </Stepper>
            </div>
            <div className="p-3 xs:p-3 xs:mt-3 mt-1">
                <p className="text-xl font-semibold text-gray-500">Time</p>
                <Divider />
            </div>
            <div className="grid grid-cols-2">
                <div className="shadow-xl rounded-xl m-3 p-3 flex flex-col justify-center items-center xs:p-3">
                    <FaPlaneDeparture className="text-blue-900" />
                    <p className="mt-3 text-gray-500 text-lg xs:text-base xs:text-center">
                        2021-12-21 14:30
                    </p>
                </div>
                <div className="shadow-xl rounded-xl m-3 p-3 flex flex-col justify-center items-center xs:p-3">
                    <FaPlaneArrival className="text-blue-900" />
                    <p className="mt-3 text-gray-500 text-lg xs:text-base xs:text-center">
                        2021-12-21 14:30
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center m-3 p-3 shadow-xl rounded-xl">
                    <BsClockFill />
                    <p className="text-lg text-gray-500">8 hours and 30 minutes</p>
                </div>

                <div className="flex flex-col justify-center items-center m-3 p-3 shadow-xl rounded-xl">
                    <FaPlane />
                    <p className="text-lg text-gray-500">Airbus A380-200</p>
                </div>
                <div className="grid grid-cols-2 shadow-xl m-3 p-3 shadow-xl rounded-xl">
                    <div className="flex flex-col justify-center items-center">
                        <FaPlaneDeparture />
                        <p className="text- text-gray-500">Terminal 2</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaPlaneArrival />
                        <p className="text-lg text-gray-500">Terminal 2</p>
                    </div>
                </div>
            </div>
            <div className="p-3 xs:p-3 xs:mt-3 mt-4">
                <p className="text-xl font-semibold text-gray-500">Journey</p>
                <Divider />
            </div>
            <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3">

            </div>
            <div className="p-3 xs:p-3 xs:mt-3 mt-4">
                <p className="text-xl font-semibold text-gray-500">
                    Compartments
                </p>
                <Divider />
            </div>
            <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="shadow-xl rounded-xl p-3 m-3">
                    <p className="mb-4 text-gray-500">Economic</p>
                    <List
                        spacing="sm"
                        className="text-gray-600"
                        center
                        icon={
                            <ThemeIcon className="bg-blue-500" size={24} radius="xl">
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
                <div className="shadow-xl rounded-xl p-3 m-3">
                    <p className="mb-4">Economic</p>
                    <List
                        spacing="sm"
                        className="text-gray-600"
                        center
                        icon={
                            <ThemeIcon className="bg-blue-500" size={24} radius="xl">
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
                <div className="shadow-xl rounded-xl p-3 m-3">
                    <p className="mb-4">Economic</p>
                    <List
                        spacing="sm"
                        className="text-gray-600"
                        center
                        icon={
                            <ThemeIcon className="bg-blue-500" size={24} radius="xl">
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
            </div>
            <div className="p-3">
                <p className="text-xl font-semibold text-gray-500 mt-4">
                    Days of Operation
                </p>
                <Divider />
            </div>
            <div>
                <div className="grid grid-cols-7 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4">
                    <div className="flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3">
                        <div>
                            <BsFillCheckCircleFill />
                        </div>
                        <p>Monday</p>
                    </div>
                    <div className="flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3">
                        <div>
                            <BsFillCheckCircleFill />
                        </div>
                        <p>Tuesday</p>
                    </div>{" "}
                    <div className="flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3">
                        <div>
                            <BsFillCheckCircleFill className="text-green-500" />
                        </div>
                        <p>Wednesday</p>
                    </div>{" "}
                    <div className="flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3">
                        <div>
                            <BsFillCheckCircleFill />
                        </div>
                        <p>Thursday</p>
                    </div>{" "}
                    <div className="flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3">
                        <div>
                            <BsFillCheckCircleFill />
                        </div>
                        <p>Friday</p>
                    </div>{" "}
                    <div className="flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3">
                        <div>
                            <BsFillCheckCircleFill />
                        </div>
                        <p>Saturday</p>
                    </div>{" "}
                    <div className="flex flex-col  justify-center shadow-lg items-center rounded-lg p-2 m-3">
                        <div>
                            <BsFillXCircleFill className="text-red-500" />
                        </div>
                        <p>Sunday</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleCard
