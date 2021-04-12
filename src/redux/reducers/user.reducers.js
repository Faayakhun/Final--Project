import {REGISTER_USER,LOGIN_USER} from '../actions/user.action'

const token = localStorage.getItem('token')

const initialState = token !== undefined && token !== null ? {
    isUserLogin: true,
    data: []
} : {
    isUserLogin: false,
    data: []
}

const user = (state = initialState,action) => {
    switch(action.type) {
        case REGISTER_USER:
            console.log("action user di dalam reducer",action)
            return {
                registerUserData: action.payload
            }
        case LOGIN_USER:
            console.log("action user login di dalam reducer", action)
            return {
                ...state,
                isUserLogin: true
            }
        default:
            return state
    } 
}

export default user