import axios from 'axios'
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
    
    axios
    .get("https://final-project-team1.herokuapp.com/nego/")
    .then((response)=>{
        console.log("response.data.data" ,response.data.data)
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

export const putNegoActionMandor = (projectId,event) => (dispatch) => {
    event.preventDefault()
    console.log("PUT ACTION NEGO MANDOR")
    return axios
                .put(`https://final-project-team1.herokuapp.com/project/${projectId}` , {status: "Negotiation" , negoBy: "mandor"})
                .then(res => {
                    dispatch(postNegoStatus(res.data.data))
                })
                .catch
                ((error)=>{
                console.log(error)
                })
}

export const putNegoActionUser = (projectId,event) => (dispatch) => {
    event.preventDefault()
    console.log("PUT ACTION NEGO USER")
    return axios
                .put(`https://final-project-team1.herokuapp.com/project/${projectId}` , {status: "Negotiation" , negoBy: "user"})
                .then(res => {
                    dispatch(postNegoStatus(res.data.data))
                })
                .catch
                ((error)=>{
                console.log(error)
                })
}