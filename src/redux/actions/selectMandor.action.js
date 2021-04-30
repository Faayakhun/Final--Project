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

export const getFilteredMandor = (val,userID) => {

    return function (dispatch) {

        axios.get("https://final-project-team1.herokuapp.com/mandor")
        .then((mandor)=>{
            console.log(mandor.data.data.filter((i)=>i.lokasi===val.lokasiProyek))
            dispatch(getDataSuccsess(mandor.data.data.filter((i)=>i.lokasi===val.lokasiProyek)))
        })

    } 

};

export const createNewProject = (userID , mandorID , jasaID) => {    

    return function (dispatch) {

        axios.post("https://final-project-team1.herokuapp.com/project" , { 
            user: userID,
            mandor: mandorID,
            jasa: jasaID,
            status: "Booking"  
        })
        .then((resDashboard) => {})

    } 

};

export const selectMandor = (userID , mandorID , val) => {

    val.mandor = mandorID
    return function (dispatch) {
        
        axios.post("https://final-project-team1.herokuapp.com/jasa",val)
        .then((res)=>{
            dispatch(createNewProject(userID,mandorID,res.data.data._id))
        })
        
    } 

};