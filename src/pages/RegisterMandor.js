import {useState} from 'react'
import {Form} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {mandorRegisterActions} from '../redux/actions/mandor.action'
import {Container , Row , Col , Button} from 'react-bootstrap'

function RegisterMandor() {
    const dispatch = useDispatch()
    const history = useHistory()
    const submitRegister = (event) => {
        dispatch(mandorRegisterActions(register,event,history))
    }
    const [register, setRegister] = useState({
        mandorName:"",
        tukangName:"",
        password:"",
        confirmPassword:"",
        email:"",
        nomorTelpon: "",
        lokasi: "",
        estHarga: null
    })
    const handleChange = (event) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div className="body-content">
            <Container className="d-flex flex-column align-content-center">
                <h1>Register form Mandor</h1>
                <Form className="text-start w-25 align-self-center border border-secondary p-3 mt-3">
                    <div className="form-group text-left">
                    <Form.Label>Nama Mandor</Form.Label>
                    <Form.Control 
                        type="text"
                        name="mandorName"
                        value={register.mandorName}
                        placeholder="masukan nama mandor"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Nama Tukang</Form.Label>
                    <Form.Control 
                        type="text"
                        name="tukangName"
                        value={register.tukangName}
                        placeholder="masukan nama tukang"
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
                    <Form.Label>email</Form.Label>
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
                        name="nomorTelpon"
                        value={register.nomorTelpon}
                        placeholder="masukan nomor telepon"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Lokasi saat ini</Form.Label>
                    <Form.Control 
                        type="text"
                        name="lokasi"
                        value={register.lokasi}
                        placeholder="masukan lokasi anda"
                        onChange={(event)=> handleChange(event)}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Perkiraan Harga Jasa(perhari)</Form.Label>
                    <Form.Control 
                        type="number"
                        name="estHarga"
                        value={register.estHarga}
                        placeholder="masukan harga jasa"
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

export default RegisterMandor
