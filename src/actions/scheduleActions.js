import axios from 'axios';
import { BASE_URL } from '../config/config';
import { GET_SCHEDULES_REQUEST, GET_SCHEDULES_SUCCESS, GET_SCHEDULES_FAIL } from '../constants/scheduleConstants';

export const getSchedules = (details) => async (dispatch, getState) => {
    console.log(details)
    try {
        dispatch({
            type: GET_SCHEDULES_REQUEST,
        });


        const { getAccess: { accessInfo } } = getState();

        const config = {
            headers: {
                'Authorization': `Bearer ${accessInfo.access_token}`,
                'Content-Type': 'application/json'
            },
        };


        console.log(details)

        console.log(`${BASE_URL}/operations/schedules/${details.from}/${details.to}/${details.date}`)

        const { data } = await axios.get(`${BASE_URL}/operations/schedules/${details.from}/${details.to}/${details.date}`, config);

        if (data.ScheduleResource) {
            dispatch({
                type: GET_SCHEDULES_SUCCESS,
                payload: data,
            });

        } else {
            dispatch({
                type: GET_SCHEDULES_FAIL,
                payload: data.error,
            });
        }
    } catch (error) {
        dispatch({
            type: GET_SCHEDULES_FAIL,
            payload: 'An error Occurred'
        });
    }
}