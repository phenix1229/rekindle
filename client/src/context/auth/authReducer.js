import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

export default (state, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case REGISTER_FAIL:
            return {
                ...state,
                filtered: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case USER_LOADED:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex) || contact.email.match(regex);
                })
            }
        case AUTH_ERROR:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
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