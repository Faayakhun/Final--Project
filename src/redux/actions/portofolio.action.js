import axios from 'axios'

export const GET_PORTOFOLIO_MANDOR = 'GET_PORTOFOLIO_MANDOR'
export const UPLOAD_PORTOFOLIO_MANDOR = 'UPLOAD_PORTOFOLIO_MANDOR'
export const DELETE_PORTOFOLIO_MANDOR = 'DELETE_PORTOFOLIO_MANDOR'

export const getPortofolioMandor = (data) => {
    return {
        type: GET_PORTOFOLIO_MANDOR,
        payload: data
    }
}

export const uploadPortofolioMandor = (data) => {
    return {
        type: UPLOAD_PORTOFOLIO_MANDOR,
        payload: data
    }
}

export const deletePortofolioMandor = (data) => {
    return {
        type: DELETE_PORTOFOLIO_MANDOR,
        payload: data
    }
}

export const getPortofolioMandorAction = () => (dispatch) => {
    const mandorId = localStorage.getItem("mandorId")
    return axios
    .get(`https://final-project-team1.herokuapp.com/portofolio/${mandorId}/mandor`)
    .then((response)=>{
        dispatch(getPortofolioMandor(response.data.data))
    })
    .catch((error)=> {
        console.log(error)
    })
}

export const uploadPortofolioMandorAction = (imagePortofolio,title,event,setImagePortofolio) => (dispatch) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("file",imagePortofolio)
    formData.append("upload_preset","portofolioMandor")
    axios
        .post("https://api.cloudinary.com/v1_1/faay/image/upload",formData)
        .then((response)=> {
            const mandorId = localStorage.getItem("mandorId")
            const dataFoto = {
                mandor: mandorId,
                judulPortofolio: title.judulPortofolio,
                fotoPortofolio: response.data.url
            }
            axios
                .post("https://final-project-team1.herokuapp.com/portofolio",dataFoto)
                .then((response)=> {
                    axios
                        .get(`https://final-project-team1.herokuapp.com/portofolio/${mandorId}/mandor`)
                        .then((response)=>{
                            setImagePortofolio("")
                            dispatch(uploadPortofolioMandor(response.data.data))
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

export const deletePortofolioMandorAction = (item,event) => (dispatch) => {
    event.preventDefault()
    axios
    .delete(`https://final-project-team1.herokuapp.com/portofolio/${item._id}`)
    .then((response) => {
        const mandorId = localStorage.getItem("mandorId")
        axios
            .get(`https://final-project-team1.herokuapp.com/portofolio/${mandorId}/mandor`)
            .then((response)=>{
            dispatch(deletePortofolioMandor(response.data.data))
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}