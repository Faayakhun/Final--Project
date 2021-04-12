import React from 'react'
// import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import RegisterVendor from '../pages/RegisterVendor'
import RegisterMandor from '../pages/RegisterMandor'
import RegisterUser from '../pages/RegisterUser'
import LoginVendor from '../pages/LoginVendor'
import LoginMandor from '../pages/LoginMandor'
import LoginUser from '../pages/LoginUser'

function PrivateRoute() {
    // const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    return (
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/registervendor">
            <RegisterVendor />
          </Route>
          <Route path = "/registermandor">
            <RegisterMandor />
          </Route>
          <Route path = "/registeruser">
            <RegisterUser />
          </Route>
          <Route path = "/loginvendor">
            <LoginVendor />
          </Route>
          <Route path = "/loginmandor">
            <LoginMandor />
          </Route>
          <Route path = "/loginuser">
            <LoginUser />
          </Route>
        </Switch>
    )
}

export default PrivateRoute