import {useState} from 'react'
import {Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {mandorRegisterActions} from '../redux/actions/mandor.action'
import {Container , Button, Dropdown} from 'react-bootstrap'

function RegisterMandor() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [mandorName,setMandorName] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [email,setEmail] = useState("")
    const [nomorTelpon,setNomorTelpon] = useState("")
    const [lokasi, setLokasi] = useState("Pilih Lokasi")

    const register = {
        mandorName: mandorName,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
        nomorTelpon: nomorTelpon,
        lokasi: lokasi
    }
    
    function trackMandorName (param){
        setMandorName(param.target.value)
    }
    function trackPassword (param){
        setPassword(param.target.value)
    }
    function trackConfirmPassword (param){
        setConfirmPassword(param.target.value)
    }
    function trackEmail (param){
        setEmail(param.target.value)
    }
    function trackNomorTelpon (param){
        setNomorTelpon(param.target.value)
    }
    
    
    function hitLokasi (param){
        setLokasi(param.target.innerHTML)
    }
    const submitRegister = (event) => {
        dispatch(mandorRegisterActions(register,event,history))
    }
    return (
        <div className="body-content">
            <Container className="d-flex flex-column align-content-center">
                <h1>Register form Mandor</h1>
                <Form className="text-start w-25 align-self-center border border-secondary p-3 mt-3">
                    <Form.Group>
                        <Form.Label>Nama Mandor</Form.Label>
                        <Form.Control 
                            type="text"
                            name="mandorName"
                            value={register.mandorName}
                            placeholder="masukan nama mandor"
                            onChange={trackMandorName}
                        />
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            name="password"
                            value={register.password}
                            placeholder="masukan password"
                            onChange={trackPassword}
                        />
                        <Form.Label>Konfirmasi Password</Form.Label>
                        <Form.Control 
                            type="password"
                            name="confirmPassword"
                            value={register.confirmPassword}
                            placeholder="masukan konfirmasi password"
                            onChange={trackConfirmPassword}
                        />
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="text"
                            name="email"
                            value={register.email}
                            placeholder="masukan email"
                            onChange={trackEmail}
                        />
                        <Form.Label>Nomor Telepon</Form.Label>
                        <Form.Control 
                            type="text"
                            name="nomorTelpon"
                            value={register.nomorTelpon}
                            placeholder="masukan nomor telepon"
                            onChange={trackNomorTelpon}
                        />
                        <Dropdown className="mt-2 w-100 border border-secondary">
                            <Dropdown.Toggle variant="" id="dropdown-basic" className="w-100 text-start">
                                {lokasi}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Jakarta</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Bogor</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Depok</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Tangerang</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Bekasi</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    
                    <Button onClick={submitRegister} className="w-100 mt-3" variant="primary">Register</Button>

                </Form>
            </Container>
        </div>
    )
}

export default RegisterMandor
