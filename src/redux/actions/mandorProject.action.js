import axios from 'axios'
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

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

export const getMandorProject = (mandorID) => {

    return function (dispatch) {

        axios.get("https://final-project-team1.herokuapp.com/project")
        .then(res => {
           dispatch(getDataSuccsess(res.data.data.find((i)=>i.mandor._id === mandorID)))
        })
        .catch(e => console.log(e));

    } 

};

export const MandorModerateProject = (projectID,mandorID) => {

    return function (dispatch) {

        axios.put(`https://final-project-team1.herokuapp.com/project/${projectID}` , {status: "Accepted"})
        .then(res => {
          console.log("Mandor moderating project")
          dispatch(getMandorProject(mandorID))
        })
        .catch(e => console.log(e));

    } 

}