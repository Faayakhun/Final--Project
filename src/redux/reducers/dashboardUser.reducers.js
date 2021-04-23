import { GET_DATA_REQUEST, GET_DATA_FAILED, GET_DATA_SUCCESS,DELETE_DATA_PROJECT } from './../actions/dashboardUser.action';


const startState = {
    data : [],
    error: null,
    isLoading : false
};

const DashboardUser = (state = startState , action) => {

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
           
             console.log("reducer dashboard mengirimkan " ,action.result)
                return{
                    ...state,
                    isLoading : false,
                    data : action.result
                };
        case DELETE_DATA_PROJECT:

                return {
                    ...state,
                    isLoading : false,
                    data : action.result
                }
        default:
            return state;

    }


};

export default DashboardUser;
