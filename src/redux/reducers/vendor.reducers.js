import {REGISTER_VENDOR,LOGIN_VENDOR,LOGOUT_VENDOR,GET_VENDOR,GET_VENDORID} from '../actions/vendor.actions'

const token = localStorage.getItem('token')

const initialState = token !== undefined && token !== null ? {
    isVendorLogin: true,
    isLoggedIn:true,
    data: []
} : {
    isVendorLogin: false,
    isLoggedIn:false,
    data: []
}

const vendor = (state = initialState,action) => {
    switch(action.type) {
        case REGISTER_VENDOR:
            return {
                registerMandorData: action.payload
            }
        case LOGIN_VENDOR:
            return {
                ...state,
                isVendorLogin: true,
                isLoggedIn: true
            }
        case LOGOUT_VENDOR:
            localStorage.clear()
            return {
                ...state,
                isVendorLogin: false,
                isLoggedIn: false
            }
        case GET_VENDOR:
            return {
                ...state,
                data: action.payload
            }
        case GET_VENDORID:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    } 
}

export default vendor