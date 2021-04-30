import axios from 'axios'
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const DELETE_DATA_PROJECT = "DELETE_DATA_PROJECT"

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
    return {
        type: DELETE_DATA_PROJECT,
        result
    }
}

export const getDashboardUser = (userID) => {

    return function (dispatch) {

        axios.get("https://final-project-team1.herokuapp.com/project")
        .then(res => {
            const dataUser = res.data.data.find((i)=>i.user._id === userID && i.status!=="Reviewed" )
            dispatch(getDataSuccsess(dataUser))
            const mandorId = dataUser.mandor._id
            localStorage.setItem('mandorId',mandorId)
            const projectId = dataUser._id
            localStorage.setItem('projectId',projectId)
        })
        .catch(e => console.log(e));

    } 

};

export const deleteProjectUser = (event) => (dispatch) => {
    event.preventDefault()
    const userId = localStorage.getItem("id")
    return axios
    .delete(`https://final-project-team1.herokuapp.com/project/${userId}/user`)
    .then((result=> {
            dispatch(deleteDataSuccess(result.data.data))
        ;
    }))
    .catch(e => console.log(e))
}

export const deleteJasaUser = (event,userID) => (dispatch) => {
    event.preventDefault()
    const userId = localStorage.getItem("id")
    return axios
    .delete(`https://final-project-team1.herokuapp.com/jasa/${userId}/user`)
    .then(res => {
        axios.get("https://final-project-team1.herokuapp.com/project")
        .then(res => {
            const dataUser = res.data.data.find((i)=>i.user._id === userID && i.status!=="Reviewed" )
            dispatch(getDataSuccsess(dataUser))
            const mandorId = dataUser.mandor._id
            localStorage.setItem('mandorId',mandorId)
            const projectId = dataUser._id
            localStorage.setItem('projectId',projectId)
        })
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
}

export const userModerateProjectAction = (projectID,userID) => {
    console.log("a" ,projectID)
    console.log("b" ,userID)

    return function (dispatch) {

        axios.put(`https://final-project-team1.herokuapp.com/project/${projectID}` , {status: "Accepted"})
        .then(res => {
        axios.put(`https://final-project-team1.herokuapp.com/nego/${projectID}/project`, {status: "Done"})
          dispatch(getDashboardUser(userID))
        })
        .catch(e => console.log(e));

    } 
};