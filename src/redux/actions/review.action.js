import axios from 'axios'

export const GET_REVIEW_USER = 'GET_REVIEW_USER'
export const GET_REVIEW_MANDOR = 'GET_REVIEW_MANDOR'
export const POST_REVIEW = 'POST_REVIEW'

export const getReviewUser = (data) => {
    return {
        type: GET_REVIEW_USER,
        payload: data
    }
}

export const getReviewMandor = (data) => {
    return {
        type: GET_REVIEW_MANDOR,
        payload: data
    }
}

export const postReview = (data) => {
    return {
        type: POST_REVIEW,
        payload: data
    }
}

export const getReviewUser = () => (dispatch) => {
    const userId = localStorage.getItem('id')
    axios
    .get(`https://final-project-team1.herokuapp.com/review/${userId}/user`)
}