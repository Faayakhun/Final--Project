import axios from 'axios'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const setRegisterUser = (data) => {
    return {
        type: REGISTER_USER,
        payload: data
    }
}

export const setLoginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
}

export const handleLogoutUser = () => {
    return {
        type: LOGOUT_USER,
    }
}

export const userRegisterActions = (value,event,history) => (dispatch) => {
    event.preventDefault()
    console.log("register action value",value)
    return axios
        .post("https://final-project-team1.herokuapp.com/auth/register/user",value)
        .then((response)=> {
            console.log('response register dari server',response)
            dispatch(setRegisterUser(response.data))
            alert("registrasi berhasil,silahkan login")
            history.push('/loginuser')
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const userLoginActions = (value, event, history) => (dispatch)=> {
    event.preventDefault()
    console.log('login action values',value)

    return axios
        .post("https://final-project-team1.herokuapp.com/auth/login/user",value)
        .then((response)=>{
            console.log("response dari server",response)
            dispatch(setLoginUser(response.data))
            if (response.data.token !== undefined) {
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('id', response.data.user._id)
                alert("login berhasil")
                history.push('/')
            } else {
                alert("data yang anda masukan salah")
            }
        })
        .catch((error)=>{
            console.log(error)
        })
}