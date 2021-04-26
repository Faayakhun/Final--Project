import {GET_NEGO_USER,GET_NEGO_MANDOR,POST_NEGO} from '../actions/nego.action'

const initialState = {
    data: [],
}

const Nego = (state = initialState,action) => {
    switch(action.type){
        case GET_NEGO_USER: 
            return {
                ...state,
                data: action.payload
            }
        case GET_NEGO_MANDOR:
            return {
                ...state,
                data: action.payload
            }
        case POST_NEGO:
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state
    }
}

export default Nego