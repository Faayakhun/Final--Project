import {combineReducers} from 'redux'
import user from './user.reducers'
import mandor from './mandor.reducers'
import vendor from './vendor.reducers'
import service from './service.reducers'

const rootReducer = combineReducers({user,mandor,vendor,service})

export default rootReducer