import axios from 'axios'

export const REGISTER_VENDOR = 'REGISTER_VENDOR'
export const LOGIN_VENDOR = 'LOGIN_VENDOR'
export const LOGOUT_VENDOR = 'LOGOUT_VENDOR'

export const setRegisterVendor = (data) => {
    return {
        type: REGISTER_VENDOR,
        payload: data
    }
}

export const setLoginVendor = (data) => {
    return {
        type: LOGIN_VENDOR,
        payload: data
    }
}

export const handleLogoutVendor = () => {
    return {
        type: LOGOUT_VENDOR
    }
}

export const vendorRegisterActions = (value,event,history) => (dispatch) => {
    event.preventDefault()
    console.log("register action value",value)
    return axios
        .post("https://final-project-team1.herokuapp.com/auth/register/vendor",value)
        .then((response)=> {
            console.log('response register dari server',response)
            dispatch(setRegisterVendor(response.data))
            alert("Registrasi berhasil,silahkan login")
            history.push('/loginvendor')
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const vendorLoginActions = (value, event, history) => (dispatch)=> {
    event.preventDefault()
    console.log('login action values',value)

    return axios
        .post("https://final-project-team1.herokuapp.com/auth/login/vendor",value)
        .then((response)=>{
            console.log("response dari server",response)
            dispatch(setLoginVendor(response.data))
            if (response.data.token !== undefined) {
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('id', response.data.vendor._id)
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