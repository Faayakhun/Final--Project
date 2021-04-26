import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getUserByIdAction,uploadFotoAction} from '../redux/actions/user.action'

function ProfileUser() {
    const [fotoUser,setFotoUser] = useState({
        fotoProfilUser:""
    })
    const userById = useSelector((state)=>state.user.data)
    console.log("data user id dari store", userById)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getUserByIdAction())
    },[dispatch])
    return (
        <div>
            <h1>PROFIL USER</h1>
            <img 
                            id="listMandorAvatar"
                            src={userById.fotoProfilUser} 
                            />
            <p>Nama : {userById.userName}</p>
            <p>Alamat : {userById.alamat}</p>
            <p>Email : {userById.email}</p>
            <p></p>
            <input 
                type = "file"
                onChange = {(event) => {
                    setFotoUser(event.target.files[0])
                }}
            />
             <button onClick={(event)=>dispatch(uploadFotoAction(fotoUser,event,setFotoUser))}>Upload Foto Profil</button>
        </div>
    )
}

export default ProfileUser
