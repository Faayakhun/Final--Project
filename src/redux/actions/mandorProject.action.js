import axios from 'axios'
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const DELETE_DATA_SUCCESS ="DELETE_DATA_SUCCESS";

export const getDataRequest = () => {
    return{
        type: GET_DATA_REQUEST
    }
};

export const getDataFailed = (error) => {
    return{
        type: GET_DATA_FAILED,
        error
    }
};

export const getDataSuccsess = (result) => {

    return{
        type: GET_DATA_SUCCESS,
        result
    }   
};

export const deleteDataSuccess = (result) => {

    return{
        type: DELETE_DATA_SUCCESS,
        result
    }   
};

export const getMandorProject = (mandorID) => {

    return function (dispatch) {

        axios.get("https://final-project-team1.herokuapp.com/project")
        .then(res => {
            const dataMandor = res.data.data.find((i)=>i.mandor._id === mandorID)
            dispatch(getDataSuccsess(dataMandor))
            const userId = dataMandor.user._id
            localStorage.setItem('userId',userId)
            console.log("data user id dari mandor action", userId)
        })
        .catch(e => console.log(e));

    } 

};

export const deleteProjectMandor = (event,mandorID) => (dispatch) => {
    event.preventDefault()
    const userId = localStorage.getItem("userId")
    return axios
    .delete(`https://final-project-team1.herokuapp.com/project/${userId}/user`)
    .then((result=> {
        axios.get("https://final-project-team1.herokuapp.com/project")
        .then(res => {
            const dataMandor = res.data.data.find((i)=>i.mandor._id === mandorID)
            dispatch(deleteDataSuccess(dataMandor))
            const userId = dataMandor.user._id
            localStorage.setItem('userId',userId)
            console.log("data user id dari mandor action", userId)
        })
        .catch(e => console.log(e));
    }))
}

export const deleteJasaMandor = (event,mandorID) => (dispatch) => {
    event.preventDefault()
    const userId = localStorage.getItem("userId")
    return axios
    .delete(`https://final-project-team1.herokuapp.com/jasa/${userId}/user`)
    .then((result=> {
        axios.get("https://final-project-team1.herokuapp.com/project")
        .then(res => {
            const dataMandor = res.data.data.find((i)=>i.mandor._id === mandorID)
            dispatch(deleteDataSuccess(dataMandor))
            const userId = dataMandor.user._id
            localStorage.setItem('userId',userId)
            console.log("data user id dari mandor action", userId)
        })
        .catch(e => console.log(e));
    }))
}