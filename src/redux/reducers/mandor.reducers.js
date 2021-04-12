import {REGISTER_MANDOR,LOGIN_MANDOR} from '../actions/mandor.action'

const token = localStorage.getItem('token')

const initialState = token !== undefined && token !== null ? {
    isMandorLogin: true,
    data: []
} : {
    isMandorLogin: false,
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
                isMandorLogin: true
            }
        default:
            return state
    } 
}

export default mandor