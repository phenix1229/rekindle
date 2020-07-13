import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
};

export default (state = initialState, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                current: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                current: null
            }
        case LOGOUT:
            return {
                ...state,
                filtered: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                filtered: null
            }
        default:
            return state;
    }
}