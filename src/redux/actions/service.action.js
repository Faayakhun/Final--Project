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

export const addToCart = (val) => {

    return function (dispatch) {

        console.log("reducer mendapat data " ,val)

         axios.post("https://final-project-team1.herokuapp.com/jasa" , val)
         .then(res => console.log("POST sukses" ,res))

       
    } 

};