import {combineReducers} from 'redux'
import user from './user.reducers'
import mandor from './mandor.reducers'
import vendor from './vendor.reducers'

const rootReducer = combineReducers({user,mandor,vendor})

export default rootReducer