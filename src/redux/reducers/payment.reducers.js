import { GET_DATA_REQUEST, GET_DATA_FAILED, GET_DATA_SUCCESS, DATA_UPLOAD } from '../actions/payment.action';


const startState = {
    data : [],
    error: null,
    isLoading : false,
    paid : false
};

const Payment = (state = startState , action) => {

    switch(action.type){

        case GET_DATA_REQUEST:
                return{
                    ...state,
                    isLoading : true,
                  
                };

        case GET_DATA_FAILED:
                return{
                    ...state,
                    isLoading : false,
                    error : action.error
                };

        case GET_DATA_SUCCESS:
                return{
                    ...state,
                    isLoading : false,
                    data : action.result,
                   
                };

        case DATA_UPLOAD:

                return{
                    ...state,
                    isLoading : false,
                    data : action.result,
                    paid : true
                       
                };
        
        default:
            return state;

    }


};

export default Payment;
