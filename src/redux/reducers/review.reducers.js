import {GET_REVIEW_USER,GET_REVIEW_MANDOR,POST_REVIEW} from '../actions/review.action'

const initialState = {
    data: [],
}

const Review = (state = initialState,action) => {
    switch(action.type){
        case GET_REVIEW_USER: 
            return {
                ...state,
                data: action.payload
            }
        case GET_REVIEW_MANDOR:
            return {
                ...state,
                data: action.payload
            }
        case POST_REVIEW:
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state
    }
}

export default Review