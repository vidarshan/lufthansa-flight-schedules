import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSchedules } from "../actions/scheduleActions";
import { Alert, Divider, Loader, Pagination, Stepper } from "@mantine/core";

import { MdError } from "react-icons/md";

import map from 'lodash.map';
import ScheduleCard from "../components/ScheduleCard";

const Schedules = () => {
    const dispatch = useDispatch();

    const [allSchedules, setAllSchedules] = useState([]);

    const scheduleDetails = useSelector((state) => state.getSchedules);
    const { loading, error, schedules } = scheduleDetails;


    const params = useParams();

    useEffect(() => {
        let details = {
            from: params.from,
            to: params.to,
            date: params.date,
            direct: params.direct,
        };
        dispatch(getSchedules(details));
    }, [dispatch]);

    useEffect(() => {
        if (schedules) {
            if (Object.keys(schedules).includes('ScheduleResource')) {
                setAllSchedules(schedules.ScheduleResource.Schedule);
            }

        }
    }, [schedules])

    return (
        <>
            {loading ? (
                <Loader color="orange" />
            ) : error ? (
                <Alert icon={<MdError size={16} />} title="Error!" color="red">
                    An error occurred. Please try again later.
                </Alert>
            ) : (
                <div>

                    <div className="m-3 pb-5">
                        <p className="text-xl font-semibold">
                            Schedules on 12-01-2022 from JFK to FRA
                        </p>
                        <Divider />
                    </div>
                    <div className="grid grid-cols-2 m-6 p-10 xs:bg-red-300 xs:m-1 p-1">

                        {/* {console.log(schedules)} */}
                        {/* {console.log(schedules.ScheduleResource)} */}
                        {map(allSchedules, (schedule) => {
                            return <ScheduleCard schedule={schedule} />

                        })}


                    </div>
                </div>
            )}
        </>

        // <div className='flex justify-center'>
        //     <Pagination total={5} siblings={3} />
        // </div>
    );
};

export default Schedules;
