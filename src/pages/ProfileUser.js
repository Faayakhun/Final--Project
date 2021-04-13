import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getUserByIdAction} from '../redux/actions/user.action'

function ProfileUser() {
    const userById = useSelector((state)=>state.user.data)
    console.log("data user id dari store", userById)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getUserByIdAction())
    },[dispatch])
    return (
        <div>
            <h1>PROFIL USER</h1>
            <p>Nama : {userById.userName}</p>
            <p>Alamat : {userById.alamat}</p>
            <p>Email : {userById.email}</p>
        </div>
    )
}

export default ProfileUser
