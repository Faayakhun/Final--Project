import axios from 'axios'

export const REGISTER_MANDOR = 'REGISTER_MANDOR'
export const LOGIN_MANDOR = 'LOGIN_MANDOR'
export const LOGOUT_MANDOR = 'LOGOUT_MANDOR'

export const setRegisterMandor = (data) => {
    return {
        type: REGISTER_MANDOR,
        payload: data
    }
}

export const setLoginMandor = (data) => {
    return {
        type: LOGIN_MANDOR,
        payload: data
    }
}

export const handleLogoutMandor = () => {
    return {
        type: LOGOUT_MANDOR
    }
}

export const mandorRegisterActions = (value,event,history) => (dispatch) => {
    event.preventDefault()
    console.log("register action value",value)
    return axios
        .post("https://final-project-team1.herokuapp.com/auth/register/mandor",value)
        .then((response)=> {
            console.log('response register dari server',response)
            dispatch(setRegisterMandor(response.data))
            alert("Registrasi berhasil,silahkan login")
            history.push('/loginmandor')
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const mandorLoginActions = (value, event, history) => (dispatch)=> {
    event.preventDefault()
    console.log('login action values',value)

    return axios
        .post("https://final-project-team1.herokuapp.com/auth/login/mandor",value)
        .then((response)=>{
            console.log("response dari server",response)
            dispatch(setLoginMandor(response.data))
            if (response.data.token !== undefined) {
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('id', response.data.mandor._id)
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