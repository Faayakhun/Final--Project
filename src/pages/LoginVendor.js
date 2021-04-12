import {useState} from 'react'
import {Form} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {vendorLoginActions} from '../redux/actions/vendor.actions'

function LoginVendor() {
    const dispatch = useDispatch()
    const history = useHistory()
    const submitLogin = (event) => {
        dispatch(vendorLoginActions(loginVendor,event,history))
    }
    const [loginVendor, setLoginVendor] = useState({
        namaVendor:"",
        passwordVendor:"",
    })
    const handleChange = (event) => {
        setLoginVendor({
            ...loginVendor,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div className="body-content-login">
            <h1>Login form Vendor</h1>
            <Form>
                <div className="form-group text-left">
                <label>Nama Vendor</label>
                <br/>
                <input 
                    type="text"
                    name="namaVendor"
                    value={loginVendor.namaVendor}
                    placeholder="masukan nama vendor"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Password</label>
                <br/>
                <input 
                    type="password"
                    name="passwordVendor"
                    value={loginVendor.passwordVendor}
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

export default LoginVendor
