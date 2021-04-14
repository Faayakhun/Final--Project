import {useState} from 'react'
import {Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {vendorRegisterActions} from '../redux/actions/vendor.actions'
import {Container , Row , Col , Button} from 'react-bootstrap'


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
        email:"",
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
        <div className="">
            <Container className="d-flex flex-column align-content-center">
                <h1>Register form Vendor</h1>
                <Form className="text-start w-25 align-self-center border border-secondary p-3 mt-3">
                    <div className="form-group text-left">
                    <Form.Label>Nama Vendor</Form.Label>
                    
                    <Form.Control 
                        type="text"
                        name="namaVendor"
                        value={register.namaVendor}
                        placeholder="masukan nama vendor"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Password</Form.Label>
                    
                    <Form.Control 
                        type="password"
                        name="passwordVendor"
                        value={register.passwordVendor}
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
                        placeholder="masukan email"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Nomor Telepon</Form.Label>
                    
                    <Form.Control 
                        type="text"
                        name="nomorTelepon"
                        value={register.nomorTelepon}
                        placeholder="masukan nomor telepon"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Alamat Kantor</Form.Label>
                    
                    <Form.Control 
                        type="text"
                        as="textarea"
                        name="alamatKantor"
                        value={register.alamatKantor}
                        placeholder="masukan alamat"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-check">
                    </div>
                    <button onClick={submitLogin} className = "btn btn-primary w-100">Register</button>
                </Form>
            </Container>
        </div>
    )
}

export default RegisterVendor
