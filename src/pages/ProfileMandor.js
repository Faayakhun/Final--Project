import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getMandorByIdAction} from '../redux/actions/mandor.action'

function ProfileMandor() {
    const dispatch = useDispatch()
    const mandorById = useSelector((state)=>state.mandor.data)
    useEffect(()=> {
        dispatch(getMandorByIdAction())
    },[dispatch])
    return (
        <div>
            <h1>PROFIL Mandor</h1>
            <p>Nama : {mandorById.mandorName}</p>
            <p>Nama Tukang : {mandorById.tukangName}</p>
            <p>Lokasi saat ini : {mandorById.lokasi}</p>
            <p>Nomor Telepon : {mandorById.nomorTelpon}</p>
            <p>Email : {mandorById.email}</p>
        </div>
    )
}

export default ProfileMandor
