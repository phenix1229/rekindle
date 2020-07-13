import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('api/auth');
        console.log(res.data);
        dispatch({
            type: USER_LOADED,
            payload: res.data.user
        })
    } catch (err) {
        dispatch({type: AUTH_ERROR});
    }
}

export const register = (formData) => async dispatch => {
    const config = {
        headers: {
            'content-type':'application/json'
        }
    };

    try {
        const res = await axios.post('api/users', formData, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        loadUser();

    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
        })
    }
}