import {REGISTER_MANDOR,LOGIN_MANDOR,LOGOUT_MANDOR,GET_MANDORID,UPLOAD_FOTO_MANDOR} from '../actions/mandor.action'

const tokenMandor = localStorage.getItem('tokenMandor')

const initialState = tokenMandor !== undefined && tokenMandor !== null ? {
    isMandorLogin: true,
    data: []
} : {
    isMandorLogin: false,
    data: []
}

const mandor = (state = initialState,action) => {
    switch(action.type) {
        case REGISTER_MANDOR:
            return {
                registerMandorData: action.payload
            }
        case LOGIN_MANDOR:
            return {
                ...state,
                isMandorLogin: true,
            }
        case LOGOUT_MANDOR:
            localStorage.clear()
            return {
                ...state,
                isMandorLogin: false,
            }
        case GET_MANDORID:
            return {
                ...state,
                data: action.payload
            }
        case UPLOAD_FOTO_MANDOR:
            return {
                ...state,
                data:action.payload
            }
        default:
            return state
    } 
}

export default mandor