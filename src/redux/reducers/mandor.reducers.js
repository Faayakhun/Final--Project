import {REGISTER_MANDOR,LOGIN_MANDOR,LOGOUT_MANDOR} from '../actions/mandor.action'

const token = localStorage.getItem('token')

const initialState = token !== undefined && token !== null ? {
    isMandorLogin: true,
    isLoggedIn:true,
    data: []
} : {
    isMandorLogin: false,
    isLoggedIn:false,
    data: []
}

const mandor = (state = initialState,action) => {
    switch(action.type) {
        case REGISTER_MANDOR:
            console.log("action mandor di dalam reducer",action)
            return {
                registerMandorData: action.payload
            }
        case LOGIN_MANDOR:
            console.log("action mandor login di dalam reducer", action)
            return {
                ...state,
                isMandorLogin: true,
                isLoggedIn:true
            }
        case LOGOUT_MANDOR:
            localStorage.clear()
            return {
                ...state,
                isMandorLogin: false,
                isLoggedIn:false
            }
        default:
            return state
    } 
}

export default mandor