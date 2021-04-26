import axios from 'axios'
import Nego from '../reducers/nego.reducers'

export const GET_NEGO_USER = 'GET_NEGO_USER'
export const GET_NEGO_MANDOR = 'GET_NEGO_MANDOR'
export const POST_NEGO = 'POST NEGO'

export const getNegoUser = (data) => {
    return {
        type: GET_NEGO_USER,
        payload: data
    }
}

export const getNegoMandor = (data) => {
    return {
        type: GET_NEGO_MANDOR,
        payload: data
    }
}

export const postNego = (data) => {
    return {
        type: POST_NEGO,
        payload: data
    }
}

export const getNegoUserAction = () => (dispatch) => {
    const userId = localStorage.getItem('id')
    axios
    .get("https://final-project-team1.herokuapp.com/nego/")
    .then((response)=>{
        const dataUser = response.data.data.filter((i)=>i.user._id === userId)
        console.log("data user dari nego",dataUser)
        console.log('response mandor by id oleh server',response)
        dispatch(getNegoUser(dataUser))
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const getNegoMandorAction = () => (dispatch) => {
    const mandorId = localStorage.getItem('mandorId')
    axios
    .get("https://final-project-team1.herokuapp.com/nego/")
    .then((response)=>{
        const dataMandor = response.data.data.filter((i)=>i.mandor._id === mandorId)
        console.log('response mandor by id oleh server',response)
        dispatch(getNegoMandor(dataMandor))
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const postNegoAction = (nego,jasaId,projectId,event) => (dispatch) => {
    event.preventDefault()
    return axios
            .post("https://final-project-team1.herokuapp.com/nego/",nego)
            .then((response)=> {
                axios.put(`https://final-project-team1.herokuapp.com/jasa/${jasaId}` , {budgetUser: nego.budget})
                .then(res => {
                axios.put(`https://final-project-team1.herokuapp.com/project/${projectId}` , {status: "Negotiation"})
                .then(res => {
                    dispatch(postNego(res.data.data))
                })
                
            })
            .catch(e => console.log(e));
            })
            .catch
            ((error)=>{
                console.log(error)
            })
}