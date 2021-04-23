import {GET_PORTOFOLIO_MANDOR,UPLOAD_PORTOFOLIO_MANDOR} from '../actions/portofolio.action'

const initialState = {
    data: [],
}

const PortofolioMandor = (state = initialState,action) => {
    switch(action.type){
        case GET_PORTOFOLIO_MANDOR: 
            return {
                ...state,
                data: action.payload
            }
        case UPLOAD_PORTOFOLIO_MANDOR:
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state
    }
}

export default PortofolioMandor