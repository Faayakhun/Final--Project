import {useState} from 'react'
import {Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {mandorLoginActions} from '../redux/actions/mandor.action'

function LoginMandor() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [LoginMandor, setLoginMandor] = useState({
        mandorName:"",
        password:"",
    })
    const handleChange = (event) => {
        setLoginMandor({
            ...LoginMandor,
            [event.target.name]: event.target.value
        })
    }
    const submitLogin = (event) => {
        dispatch(mandorLoginActions(LoginMandor,event,history))
    }
    return (
        <div className="body-content-login">
            <h1>Login form Mandor</h1>
            <Form>
                <div className="form-group text-left">
                <label>Nama Mandor</label>
                <br/>
                <input 
                    type="text"
                    name="mandorName"
                    value={LoginMandor.mandorName}
                    placeholder="masukan nama mandor"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Password</label>
                <br/>
                <input 
                    type="password"
                    name="password"
                    value={LoginMandor.password}
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

export default LoginMandor
