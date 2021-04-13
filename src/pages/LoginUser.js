import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userLoginActions} from '../redux/actions/user.action'
import {Form} from 'react-bootstrap'

function LoginUser() {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user)
    console.log('user from store', user)
    // localStorage.setItem('id', user.registerUserData.data._id)
    const [LoginUser, setLoginUser] = useState({
        userName:"",
        password:"",
    })
    const handleChange = (event) => {
        setLoginUser({
            ...LoginUser,
            [event.target.name]: event.target.value
        })
    }
    const submitLogin = (event) => {
        dispatch(userLoginActions(LoginUser,event,history))
    }
    return (
        <div className="body-content-login">
            <h1>Login form User</h1>
            <Form>
                <div className="form-group text-left">
                <label>Nama User</label>
                <br/>
                <input 
                    type="text"
                    name="userName"
                    value={LoginUser.userName}
                    placeholder="masukan nama user"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Password</label>
                <br/>
                <input 
                    type="password"
                    name="password"
                    value={LoginUser.password}
                    placeholder="masukan password"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-check">
                </div>
                <button onClick={submitLogin} className = "btn btn-primary">Login</button>
            </Form>
        </div>
    )
}

export default LoginUser
