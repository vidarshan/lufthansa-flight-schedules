import { GET_SCHEDULES_REQUEST, GET_SCHEDULES_SUCCESS, GET_SCHEDULES_FAIL } from '../constants/scheduleConstants';

export const getSchedulesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SCHEDULES_REQUEST:
            return { ...state, loading: true };
        case GET_SCHEDULES_SUCCESS:
            return { ...state, loading: false, schedules: action.payload };
        case GET_SCHEDULES_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
