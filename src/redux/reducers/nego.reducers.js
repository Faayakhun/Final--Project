import {GET_NEGO_PROJECT,POST_NEGO,PUT_BUDGET_NEGO,POST_NEGO_STATUS,DELETE_NEGO} from '../actions/nego.action'

const initialState = {
    data: [],
}

const Nego = (state = initialState,action) => {
    switch(action.type){
        case GET_NEGO_PROJECT: 
            return {
                ...state,
                data: action.payload
            }
        case POST_NEGO:
            return {
                ...state,
                data: action.payload
            }
        case PUT_BUDGET_NEGO:
                return {
                    ...state,
                    data: action.payload
                }
        case POST_NEGO_STATUS:
            return {
                ...state,
                data: action.payload
            }
        case DELETE_NEGO:
                return {
                    ...state,
                    data: action.payload
                }
        default: 
            return state
    }
}

export default Nego