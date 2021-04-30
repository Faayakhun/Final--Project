import axios from 'axios'
export const GET_NEGO_PROJECT = 'GET_NEGO_PROJECT'
export const POST_NEGO = 'POST_NEGO'
export const POST_NEGO_STATUS = 'POST_NEGO_STATUS'
export const DELETE_NEGO = 'DELETE_NEGO'

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

export const deleteNego = (data) => {
    return {
        type: DELETE_NEGO,
        payload: data
    }
}

export const getNegoProjectAction = (projectId) => (dispatch) => {
    
    axios
    .get("https://final-project-team1.herokuapp.com/nego/")
    .then((response)=>{
        const dataProject = response.data.data.filter((i)=>i.project._id === projectId && i.status!=="Done")
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

export const deleteNegoAction = (event,projectID) => (dispatch) => {
    event.preventDefault()
    return axios
    .delete(`https://final-project-team1.herokuapp.com/nego/${projectID}/project`)
    .then((result=> {
        dispatch(deleteNego(result.data.data))
    }))
    .catch(e => console.log(e));
}