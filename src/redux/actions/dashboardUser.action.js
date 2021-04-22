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

    // console.log("masih di action " ,result)

    return{
        type: GET_DATA_SUCCESS,
        result
    }   
};

export const getDashboardUser = (userID) => {

    return function (dispatch) {

        axios.get("https://final-project-team1.herokuapp.com/project")
        .then(res => {
            dispatch(getDataSuccsess(res.data.data.find((i)=>i.user._id === userID)))
        })
        .catch(e => console.log(e));

    } 

};