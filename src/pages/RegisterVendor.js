import {useState} from 'react'
import {Form} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {vendorRegisterActions} from '../redux/actions/vendor.actions'

function RegisterVendor() {
    const dispatch = useDispatch()
    const history = useHistory()
    const submitLogin = (event) => {
        dispatch(vendorRegisterActions(register,event,history))
    }
    const [register, setRegister] = useState({
        namaVendor:"",
        passwordVendor:"",
        confirmPassword: "",
        nomorTelepon: "",
        alamatKantor: ""
    })
    const handleChange = (event) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div className="body-content">
            <h1>Register form Vendor</h1>
            <Form>
                <div className="form-group text-left">
                <label>Nama Vendor</label>
                <br/>
                <input 
                    type="text"
                    name="namaVendor"
                    value={register.namaVendor}
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
                    value={register.passwordVendor}
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
                <label>Nomor Telepon</label>
                <br/>
                 <input 
                    type="text"
                    name="nomorTelepon"
                    value={register.nomorTelepon}
                    placeholder="masukan nomor telepon"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Alamat Kantor</label>
                <br/>
                 <input 
                    type="text"
                    name="alamatKantor"
                    value={register.alamatKantor}
                    placeholder="masukan alamat"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-check">
                </div>
                <button onClick={submitLogin} className = "btn btn-primary">Register</button>
            </Form>
        </div>
    )
}

export default RegisterVendor
