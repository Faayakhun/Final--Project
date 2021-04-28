import axios from 'axios'

export const REGISTER_MANDOR = 'REGISTER_MANDOR'
export const LOGIN_MANDOR = 'LOGIN_MANDOR'
export const LOGOUT_MANDOR = 'LOGOUT_MANDOR'
export const GET_MANDORID = 'GET_MANDORID'
export const UPLOAD_FOTO_MANDOR = 'UPLOAD_FOTO_MANDOR'

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

export const getMandorById = (data) => {
    return {
        type: GET_MANDORID,
        payload: data
    }
}

export const uploadFotoMandor = (data) => {
    return {
        type:UPLOAD_FOTO_MANDOR,
        payload: data
    }
}

export const mandorRegisterActions = (value,event,history) => (dispatch) => {
    event.preventDefault()
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (reg.test(value.email)===false) {
        alert("email anda salah")
    } else if (value.password.length < 6) {
        alert('password minimal 6 karakter')
    } else if (value.password !== value.confirmPassword) {
        alert('password tidak sama')
    } else {
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
    
}

export const mandorLoginActions = (value, event, history) => (dispatch)=> {
    event.preventDefault()
    return axios
        .post("https://final-project-team1.herokuapp.com/auth/login/mandor",value)
        .then((response)=>{
            console.log("response dari server",response)
            dispatch(setLoginMandor(response.data))
            if (response.data.tokenMandor !== undefined) {
                localStorage.setItem('tokenMandor',response.data.tokenMandor)
                localStorage.setItem('mandorId', response.data.mandor._id)
                history.push('/')
            } else {
                alert("data yang anda masukan salah")
            }
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const getMandorByIdAction = () => (dispatch) => {
    const mandorId = localStorage.getItem("mandorId")
    return axios
    .get(`https://final-project-team1.herokuapp.com/mandor/${mandorId}`)
    .then((response)=>{
        console.log("response mandor by id dari server",response)
        dispatch(getMandorById(response.data.data))
    })
    .catch((error)=> {
        console.log(error)
    })
}

export const uploadFotoMandorAction = (imageSelected,event,setImageSelected) => (dispatch) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("file",imageSelected)
    formData.append("upload_preset","fotoMandor")
    axios
        .post("https://api.cloudinary.com/v1_1/faay/image/upload",formData)
        .then((response)=> {
            const mandorId = localStorage.getItem("mandorId")
            const dataFoto = {
                fotoProfil: response.data.url
            }
            axios
                .put(`https://final-project-team1.herokuapp.com/mandor/${mandorId}`,dataFoto)
                .then((response)=> {
                    console.log("response post url foto",response)
                    axios
                        .get(`https://final-project-team1.herokuapp.com/mandor/${mandorId}`)
                        .then((response)=>{
                            setImageSelected("")
                            console.log("response mandor by id dari server",response)
                            dispatch(uploadFotoMandor(response.data.data))
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                })
                .catch((error)=>{
                    console.log(error)
                })
        })
        .catch((error)=>{
            console.log(error)
        })
}