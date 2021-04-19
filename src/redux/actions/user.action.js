import axios from 'axios'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const GET_USERID = 'GET_USERID'

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

export const getUserById = (data) => {
    return {
        type: GET_USERID,
        payload: data
    }
}

export const userRegisterActions = (value,event,history) => (dispatch) => {
    event.preventDefault()
    console.log("register action value",value)
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (reg.test(value.email)===false) {
        alert("email anda salah")
    } else if (value.password.length < 6) {
        alert('password minimal 6 karakter')
    } else if (value.password !== value.confirmPassword) {
        alert('password tidak sama')
    } else {
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
                history.push('/')
            } else {
                alert("data yang anda masukan salah")
            }
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const getUserByIdAction = () => (dispatch) => {
    const userId = localStorage.getItem('id')
    return axios
    .get(`https://final-project-team1.herokuapp.com/user/${userId}`)
    .then((response)=>{
        console.log('response user by id oleh server',response)
        dispatch(getUserById(response.data.data))
    })
    .catch((error)=>{
        console.log(error)
    })
}