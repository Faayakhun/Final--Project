import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userRegisterActions} from '../redux/actions/user.action'
import {Container , Form} from 'react-bootstrap'

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
            <Container  className="d-flex flex-column align-content-center">
                <h1>Register form User</h1>
                <Form className="text-start w-25 align-self-center border border-secondary p-3 mt-3">
                    <div className="form-group text-left">
                    <Form.Label>Nama User</Form.Label>
                    <Form.Control 
                        type="text"
                        name="userName"
                        value={register.userName}
                        placeholder="masukan nama anda"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password"
                        value={register.password}
                        placeholder="masukan password"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control 
                        type="password"
                        name="confirmPassword"
                        value={register.confirmPassword}
                        placeholder="masukan konfirmasi password"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="text"
                        name="email"
                        value={register.email}
                        placeholder="masukan email anda"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control 
                        type="text"
                        name="alamat"
                        value={register.alamat}
                        placeholder="masukan alamat anda"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-check">
                    </div>
                    <button onClick={submitRegister} className = "btn btn-primary w-100">Register</button>
                </Form>
            </Container>
        </div>
    )
}

export default RegisterUser
