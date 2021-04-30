import { GET_DATA_REQUEST, GET_DATA_FAILED, GET_DATA_SUCCESS } from './../actions/cart.action';


const startState = {
    data : [],
    error: null,
    isLoading : false
};

const Cart = (state = startState , action) => {

    switch(action.type){

        case GET_DATA_REQUEST:
                return{
                    ...state,
                    isLoading : true
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
                    data : action.result
                };
        
        default:
            return state;

    }


};

export default Cart;
