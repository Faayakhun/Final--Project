import { GET_DATA_REQUEST, GET_DATA_FAILED, GET_DATA_SUCCESS } from './../actions/cart.action';


const startState = {
    data : [],
    error: null,
    isLoading : false
};

const Cart = (state = startState , action) => {

    switch(action.type){

        case GET_DATA_REQUEST:
                console.log("Data on Request")
                return{
                    ...state,
                    isLoading : true
                };

        case GET_DATA_FAILED:
                console.log("Data Failed")
                return{
                    ...state,
                    isLoading : false,
                    error : action.error
                };

        case GET_DATA_SUCCESS:
            console.log("Get Data Succsessfully")
            console.log("ini action result" ,action )
                return{
                    ...state,
                    isLoading : false,
                    data : action.result
                };
        
        default:
            return state;

    }


};

export default Cart;
