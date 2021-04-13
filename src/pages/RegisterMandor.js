import {useState} from 'react'
import {Form} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {mandorRegisterActions} from '../redux/actions/mandor.action'

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
            <h1>Register form Mandor</h1>
            <Form>
                <div className="form-group text-left">
                <label>Nama Mandor</label>
                <br/>
                <input 
                    type="text"
                    name="mandorName"
                    value={register.mandorName}
                    placeholder="masukan nama mandor"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Nama Tukang</label>
                <br/>
                <input 
                    type="text"
                    name="tukangName"
                    value={register.tukangName}
                    placeholder="masukan nama tukang"
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
                <label>email</label>
                <br/>
                 <input 
                    type="text"
                    name="email"
                    value={register.email}
                    placeholder="masukan email"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Nomor Telepon</label>
                <br/>
                 <input 
                    type="text"
                    name="nomorTelpon"
                    value={register.nomorTelpon}
                    placeholder="masukan nomor telepon"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Lokasi saat ini</label>
                <br/>
                 <input 
                    type="text"
                    name="lokasi"
                    value={register.lokasi}
                    placeholder="masukan lokasi anda"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <label>Perkiraan Harga Jasa(perhari)</label>
                <br/>
                 <input 
                    type="number"
                    name="estHarga"
                    value={register.estHarga}
                    placeholder="masukan harga jasa"
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

export default RegisterMandor
