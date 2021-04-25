import axios from 'axios'
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const DATA_UPLOAD = "DATA_UPLOAD";

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

export const dataUpload = (result) => {

    return{
        type: DATA_UPLOAD,
        result
    }   
};

export const uploadPayment = (projectID, userID,formData,setTriggerPayment) => {
    console.log("project ID action adalah " ,projectID)
    return function (dispatch) {

        axios.post("https://api.cloudinary.com/v1_1/suryanto23/image/upload",formData)
        .then(payment => {

          axios.post("https://final-project-team1.herokuapp.com/payment",{
              namaUser: userID,
              buktiTransaksi: payment.data.url
          })
          .then(res => {
                axios.put(`https://final-project-team1.herokuapp.com/project/${projectID}`,{status:"Paid"})
                .then(res => {})
                .catch(e => console.log(e));

             dispatch(dataUpload(payment.data.url))
             
            })
           .catch(e => console.log(e));
           setTriggerPayment(false)
        })
        .catch(e => console.log(e));

    } 

};

