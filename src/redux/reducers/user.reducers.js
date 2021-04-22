import {REGISTER_USER,LOGIN_USER,LOGOUT_USER,GET_USERID} from '../actions/user.action'

const tokenUser = localStorage.getItem('tokenUser')

const initialState = tokenUser !== undefined && tokenUser !== null ? {
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
                isUserLogin: true,
            }
        case LOGOUT_USER:
            localStorage.clear()
            return {
                ...state,
                isUserLogin: false,
                }
        case GET_USERID:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    } 
}

export default user