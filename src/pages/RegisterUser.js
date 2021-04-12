import {useState} from 'react'
import {Form} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userRegisterActions} from '../redux/actions/user.action'

function RegisterUser() {
    const dispatch = useDispatch()
    const history = useHistory()
    const submitRegister = (event) => {
        dispatch(userRegisterActions(register,event,history))
    }
    const [register, setRegister] = useState({
        userName:"",
        password:"",
        confirmPassword: "",
        email: "",
        alamat: ""
    })
    const handleChange = (event) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div className="body-content">
            <h1>Register form User</h1>
            <Form>
                <div className="form-group text-left">
                <label>Nama User</label>
                <br/>
                <input 
                    type="text"
                    name="userName"
                    value={register.userName}
                    placeholder="masukan nama anda"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Password</label>
                <br/>
                <input 
                    type="password"
                    name="password"
                    value={register.password}
                    placeholder="masukan password"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Konfirmasi Password</label>
                <br/>
                <input 
                    type="password"
                    name="confirmPassword"
                    value={register.confirmPassword}
                    placeholder="masukan konfirmasi password"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Email</label>
                <br/>
                 <input 
                    type="text"
                    name="email"
                    value={register.email}
                    placeholder="masukan email anda"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Alamat</label>
                <br/>
                 <input 
                    type="text"
                    name="alamat"
                    value={register.alamat}
                    placeholder="masukan alamat anda"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-check">
                </div>
                <button onClick={submitRegister} className = "btn btn-primary">Register</button>
            </Form>
        </div>
    )
}

export default RegisterUser
