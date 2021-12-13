import axios from 'axios';
import { BASE_URL } from '../config/config';
import { GET_ACCESS_TOKEN_REQUEST, GET_ACCESS_TOKEN_SUCCESS, GET_ACCESS_TOKEN_FAIL } from '../constants/accessConstants';

export const getToken = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ACCESS_TOKEN_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        const params = new URLSearchParams();
        params.append('client_id', process.env.REACT_APP_LUFTHANSA_CLIENT_ID);
        params.append('client_secret', process.env.REACT_APP_LUFTHANSA_CLIENT_SECRET);
        params.append('grant_type', process.env.REACT_APP_LUFTHANSA_GRANT_TYPE)


        const { data } = await axios.post(`${BASE_URL}/oauth/token`, params, config);

        if (data.access_token) {
            dispatch({
                type: GET_ACCESS_TOKEN_SUCCESS,
                payload: data,
            });

            let newData = {
                ...data,
                date: new Date()
            }
            localStorage.setItem('access', JSON.stringify(newData));
        } else {
            dispatch({
                type: GET_ACCESS_TOKEN_FAIL,
                payload: data.error,
            });
        }
    } catch (error) {
        dispatch({
            type: GET_ACCESS_TOKEN_FAIL,
            payload: 'An error Occurred'
        });
    }
};