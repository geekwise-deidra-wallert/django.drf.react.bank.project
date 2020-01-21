import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "./types";
import { object } from "prop-types";


export const loadUser = dispatch => {
    dispatch({type: USER_LOADING});
    axios.get('https://bank-backend-deidra.herokuapp.com/auth/user', tokenConfig())
    .then(response => {
        console.log('USER LOADING:' + object.keys(response.data))
        dispatch({
            type: USER_LOADED,
            payload: response.data,
        })
    })
    .catch(error => {
        dispatch({type: AUTH_ERROR});
    })
}

export const login = (username, password, dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify({username, password});
    axios
        .post('https://bank-backend-deidra.herokuapp.com/auth/login', body, config)
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data,
            })
        })
        .catch(error => {
            dispatch ({type: LOGIN_FAIL})
        })
}

export const register = ({username, email, password}, dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const body = JSON.stringify({username, email, password});
    axios
        .post('https://bank-backend-deidra.herokuapp.com/auth/register', body, config)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data,
            })
        })
        .catch( error =>{
            dispatch({type: REGISTER_FAIL});
        })
}

export const logout = dispatch => {
    axios.post('https://bank-backend-deidra.herokuapp.com/auth/logout', null, tokenConfig())
    .then(res => {
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    })   
    .catch(err => console.log(err));
}

export const tokenConfig = () => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if(token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    return config;
}