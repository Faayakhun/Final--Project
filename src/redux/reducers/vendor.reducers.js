import {REGISTER_VENDOR,LOGIN_VENDOR} from '../actions/vendor.actions'

const token = localStorage.getItem('token')

const initialState = token !== undefined && token !== null ? {
    isVendorLogin: true,
    data: []
} : {
    isVendorLogin: false,
    data: []
}

const vendor = (state = initialState,action) => {
    switch(action.type) {
        case REGISTER_VENDOR:
            console.log("action vendor di dalam reducer",action)
            return {
                registerMandorData: action.payload
            }
        case LOGIN_VENDOR:
            console.log("action vendor login di dalam reducer", action)
            return {
                ...state,
                isVendorLogin: true
            }
        default:
            return state
    } 
}

export default vendor