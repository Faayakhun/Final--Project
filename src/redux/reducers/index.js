import {combineReducers} from 'redux'
import user from './user.reducers'
import mandor from './mandor.reducers'
import vendor from './vendor.reducers'
import service from './service.reducers'
import cart from './cart.reducers'

const rootReducer = combineReducers({user,mandor,vendor,service,cart})

export default rootReducer