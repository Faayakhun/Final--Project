import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getMandorByIdAction,uploadFotoMandorAction} from '../redux/actions/mandor.action'

function ProfileMandor() {
    const [imageSelected,setImageSelected] = useState({
        fotoProfil:""
    })
    const dispatch = useDispatch()
    const mandorById = useSelector((state)=>state.mandor.data)
    useEffect(()=> {
        dispatch(getMandorByIdAction())
    },[dispatch])
    return (
        <div>
            <h1>PROFIL Mandor</h1>
            <img 
                            id="listMandorAvatar"
                            src={mandorById.fotoProfil} 
                            />
            <p>Nama : {mandorById.mandorName}</p>
            <p>Lokasi saat ini : {mandorById.lokasi}</p>
            <p>Nomor Telepon : {mandorById.nomorTelpon}</p>
            <p>Email : {mandorById.email}</p>
            <p></p>
            <input
                type="file"
                onChange={(event)=> {
                    setImageSelected(event.target.files[0])
                }}
            />
            <button onClick={(event)=>dispatch(uploadFotoMandorAction(imageSelected,event,setImageSelected))}>Upload Foto Profil</button>
        </div>
    )
}

export default ProfileMandor
