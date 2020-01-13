import { combineReducers } from 'redux';
import customers from './customers';
import auth from './auth';

export default combineReducers({
    customers,
    auth,
});