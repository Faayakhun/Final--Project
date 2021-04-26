import {combineReducers} from 'redux'
import user from './user.reducers'
import mandor from './mandor.reducers'
import vendor from './vendor.reducers'
import cart from './cart.reducers'
import FilteredMandor from './selectMandor.reducers'
import DashboardUser from './dashboardUser.reducers'
import MandorProject from './mandorProject.reducers'
import Payment from './payment.reducers'
import PortofolioMandor from './portofolio.reducers'
import Review from './review.reducers'

const rootReducer = combineReducers ({
    user,
    mandor,
    vendor,
    cart,
    FilteredMandor,
    DashboardUser,
    MandorProject,
    Payment,
    PortofolioMandor,
    Review
})

export default rootReducer