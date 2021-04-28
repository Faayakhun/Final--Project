import {useState} from 'react'
import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import RegisterMandor from '../pages/RegisterMandor'
import RegisterUser from '../pages/RegisterUser'
import LoginMandor from '../pages/LoginMandor'
import LoginUser from '../pages/LoginUser'
import ProfileUser from '../pages/ProfileUser'
import ProfileMandor from '../pages/ProfileMandor'
import Jasa from '../pages/Jasa'
import ListMandor from '../pages/ListMandor'
import DashboardUser from '../pages/DashboardUser'
import DashboardMandor from '../pages/DashboardMandor'

function PrivateRoute() {
    const [temporaryForm, setTemporaryForm] = useState({})
    const userLoggedIn = useSelector((state)=>state.user.isUserLogin)
    const mandorLoggedIn = useSelector((state)=>state.mandor.isMandorLogin)
    return (
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/registermandor">
            <RegisterMandor />
          </Route>
          <Route path = "/registeruser">
            <RegisterUser />
          </Route>
          <Route path = "/loginmandor">
            <LoginMandor />
          </Route>
          <Route path = "/loginuser">
            <LoginUser />
          </Route>
          <Route path = "/service">
            <Jasa setTemporaryForm={setTemporaryForm}/>
          </Route>
          <Route path = "/selectmandor">
            <ListMandor temporaryForm={temporaryForm} />
          </Route>
          <Route path = "/dashboard">
            {userLoggedIn ? <DashboardUser /> : <Redirect to = "/loginuser"/> }
          </Route>
          <Route path = "/dashboardmandor">
            {mandorLoggedIn ? <DashboardMandor /> : <Redirect to = "/loginmandor"/> }
          </Route>
          <Route path = "/profileuser">
            <ProfileUser />
          </Route>
          <Route path = "/profilemandor">
            <ProfileMandor />
          </Route>
        </Switch>
    )
}

export default PrivateRoute