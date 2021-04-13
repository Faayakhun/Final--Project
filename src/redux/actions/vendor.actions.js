import axios from 'axios'

export const REGISTER_VENDOR = 'REGISTER_VENDOR'
export const LOGIN_VENDOR = 'LOGIN_VENDOR'
export const LOGOUT_VENDOR = 'LOGOUT_VENDOR'
export const GET_VENDOR = 'GET_VENDOR'
export const GET_VENDORID = 'GET_VENDORID'

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

export const getVendor = (data) => {
    return {
        type: GET_VENDOR,
        payload: data
    }
}

export const getVendorById = (data) => {
    return {
        type: GET_VENDORID,
        payload: data
    }
}

export const vendorRegisterActions = (value,event,history) => (dispatch) => {
    event.preventDefault()
    console.log("register action value",value)
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (reg.test(value.email)===false) {
        alert("email anda salah")
    } else if (value.passwordVendor.length < 6) {
        alert('password minimal 6 karakter')
    } else if (value.passwordVendor !== value.confirmPassword) {
        alert('password tidak sama')
    } else {
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

export const listVendorAction = () => (dispatch) => {
    return axios
    .get('https://final-project-team1.herokuapp.com/vendor')
    .then((response)=> {
        console.log('response list vendor dari server', response)
        dispatch(getVendor(response.data.data))
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const getVendorByIdAction = () => (dispatch) => {
    const vendorId = localStorage.getItem('id')
    return axios
    .get(`https://final-project-team1.herokuapp.com/vendor/${vendorId}`)
    .then((response)=>{
        console.log('response get vendor by id dari server', response)
        dispatch(getVendorById(response.data.data))
    })
    .catch((error)=>{
        console.log(error)
    })
}