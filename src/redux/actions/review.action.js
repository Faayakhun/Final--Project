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

export const getReviewUserAction = () => (dispatch) => {
    const userId = localStorage.getItem('id')
    axios
    .get(`https://final-project-team1.herokuapp.com/review/${userId}/user`)
    .then((response)=>{
        dispatch(getReviewUser(response.data.data))
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const getReviewMandorAction = () => (dispatch) => {
    const mandorId = localStorage.getItem('mandorId')
    axios
    .get("https://final-project-team1.herokuapp.com/review/")
    .then((response)=>{
        const dataMandorAll = response.data.data.filter((i)=>i.mandor._id===mandorId)
        const dataMandor = dataMandorAll.filter((i,index)=> index >= dataMandorAll.length-3 )
        dispatch(getReviewMandor(dataMandor))
    })
    .catch((error)=>{
        console.log(error)
    })
}


export const getAllReviewMandorAction = () => (dispatch) => {
    const mandorId = localStorage.getItem('mandorId')
    axios
    .get("https://final-project-team1.herokuapp.com/review/")
    .then((response)=>{
        const dataMandor = response.data.data.filter((i)=>i.mandor._id===mandorId)
        dispatch(getReviewMandor(dataMandor))
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const postReviewAction = (value,projectId,event) => (dispatch) => {
    event.preventDefault()
    return axios
            .post("https://final-project-team1.herokuapp.com/review/",value)
            .then((response)=> {
                axios.put(`https://final-project-team1.herokuapp.com/project/${projectId}` , {status: "Reviewed"})
                .then(res => {
                    axios.get("https://final-project-team1.herokuapp.com/project")
                    .then(res => {
                        const userID = localStorage.getItem("id")
                        const dataUser = res.data.data.find((i)=>i.user._id === userID && i.status!=="Reviewed" )
                        dispatch(postReview(dataUser))
                    })
                    .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
            })
            .catch
            ((error)=>{
                console.log(error)
            })
}