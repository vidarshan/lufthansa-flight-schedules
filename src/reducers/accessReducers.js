import { GET_ACCESS_TOKEN_REQUEST, GET_ACCESS_TOKEN_SUCCESS, GET_ACCESS_TOKEN_FAIL } from '../constants/accessConstants';

export const getAccessTokenReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ACCESS_TOKEN_REQUEST:
            return { ...state, loading: true };
        case GET_ACCESS_TOKEN_SUCCESS:
            return { ...state, loading: false, accessInfo: action.payload };
        case GET_ACCESS_TOKEN_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
