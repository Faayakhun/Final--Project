import axios from 'axios'
import Nego from '../reducers/nego.reducers'

export const GET_NEGO_PROJECT = 'GET_NEGO_PROJECT'
export const POST_NEGO = 'POST_NEGO'
export const POST_NEGO_STATUS = 'POST_NEGO_STATUS'

export const getNegoProject = (data) => {
    return {
        type: GET_NEGO_PROJECT,
        payload: data
    }
}

export const postNego = (data) => {
    return {
        type: POST_NEGO,
        payload: data
    }
}

export const postNegoStatus = (data) => {
    return {
        type: POST_NEGO_STATUS,
        payload: data
    }
}

export const getNegoProjectAction = (projectId) => (dispatch) => {
    console.log("data project id dari nego",projectId)
    axios
    .get("https://final-project-team1.herokuapp.com/nego/")
    .then((response)=>{
        const dataProject = response.data.data.filter((i)=>i.project._id === projectId && i.status!=="Done")
        console.log("data user dari nego",dataProject)
        console.log('response mandor by id oleh server',response)
        dispatch(getNegoProject(dataProject))
    })
    .catch((error)=>{
        console.log(error)
    })
}


export const postNegoAction = (nego,jasaId,event) => (dispatch) => {
    event.preventDefault()
    return axios
            .post("https://final-project-team1.herokuapp.com/nego/",nego)
            .then((response)=> {
                axios.put(`https://final-project-team1.herokuapp.com/jasa/${jasaId}` , {budgetUser: nego.budget})
                .then(res => {
                    dispatch(postNego(res.data.data))
            })
            .catch(e => console.log(e));
            })
            .catch
            ((error)=>{
                console.log(error)
            })
}

export const putNegoAction = (projectId,event) => (dispatch) => {
    event.preventDefault()
    return axios
                .put(`https://final-project-team1.herokuapp.com/project/${projectId}` , {status: "Negotiation"})
                .then(res => {
                    dispatch(postNegoStatus(res.data.data))
                })
                .catch
                ((error)=>{
                console.log(error)
                })
}