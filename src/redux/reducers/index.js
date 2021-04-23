import {combineReducers} from 'redux'
import user from './user.reducers'
import mandor from './mandor.reducers'
import vendor from './vendor.reducers'
import service from './service.reducers'
import cart from './cart.reducers'
import FilteredMandor from './selectMandor.reducers'
import DashboardUser from './dashboardUser.reducers'
import MandorProject from './mandorProject.reducers'
import PortofolioMandor from './portofolio.reducers'

const rootReducer = combineReducers ({
    user,
    mandor,
    vendor,
    service,
    cart,
    FilteredMandor,
    DashboardUser,
    MandorProject,
    PortofolioMandor
})

export default rootReducer