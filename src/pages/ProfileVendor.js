import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getVendorByIdAction} from '../redux/actions/vendor.actions'

function ProfileVendor() {
    const dispatch = useDispatch()
    const vendorId = useSelector((state)=>state.vendor.data)
    useEffect(()=> {
        dispatch(getVendorByIdAction())
    },[dispatch])
    return (
        <div>
            <h1>PROFIL VENDOR</h1>
            <p>Nama : {vendorId.namaVendor}</p>
            <p>Alamat Kantor : {vendorId.alamatKantor}</p>
            <p>Nomor Telepon : {vendorId.nomorTelepon}</p>
            <p>Email : {vendorId.email}</p>
        </div>
    )
}

export default ProfileVendor
