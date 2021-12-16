import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAccessTokenReducer } from './reducers/accessReducers';
import { getSchedulesReducer } from './reducers/scheduleReducers';

const reducer = combineReducers({
    getAccess: getAccessTokenReducer,
    getSchedules: getSchedulesReducer
});

const accessInfoFromStorage = localStorage.getItem('access')
    ? JSON.parse(localStorage.getItem('access'))
    : null;

const initialState = {
    getAccess: { accessInfo: accessInfoFromStorage },
};

const middlware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlware))
);

export default store;