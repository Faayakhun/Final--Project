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

export const getFilteredMandor = (userID) => {

    console.log("known user ID" ,userID)    

    return function (dispatch) {
        
      
        axios.get("https://final-project-team1.herokuapp.com/jasa")
        .then(serviceForm => {
                console.log("semua service form " ,serviceForm.data.data)
                axios.get("https://final-project-team1.herokuapp.com/mandor")
                .then((mandor) => {
                    dispatch(getDataSuccsess(mandor.data.data.filter((z)=> z.lokasi === serviceForm.data.data.find((i)=>i.user._id === userID).lokasiProyek )))
                })
         })

    } 

};

export const selectMandor = (userID , mandorID) => {

    console.log("known mandor ID" ,mandorID)    

    return function (dispatch) {
        
      
        axios.get("https://final-project-team1.herokuapp.com/jasa")
        .then(serviceForm => {
                let userFormID = serviceForm.data.data.find((i)=>i.user._id === userID)._id
                    axios.put(`https://final-project-team1.herokuapp.com/jasa/${userFormID}/user`,{mandor: mandorID})
                    .then((res) => {
                        console.log("Assign mandor sukses")
                        axios.post("https://final-project-team1.herokuapp.com/project" , { 
                            user: userID ,
                            mandor: mandorID ,
                            jasa: userFormID ,
                            status: "Booking"  
                         })
                         .then((resDashboard)=>console.log("Assign dashboard sukses"))
                    })
         })

    } 

};