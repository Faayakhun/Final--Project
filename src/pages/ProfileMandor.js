import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getMandorByIdAction,uploadFotoMandorAction} from '../redux/actions/mandor.action'
import {getPortofolioMandorAction,uploadPortofolioMandorAction,deletePortofolioMandorAction} from '../redux/actions/portofolio.action'

function ProfileMandor() {
    const [imageSelected,setImageSelected] = useState({
        fotoProfil:""
    })
    const [imagePortofolio,setImagePortofolio] = useState({
        mandor: "",
        file: null,
        fotoPortofolio:"",
    })
    const [judul,setJudul]=useState('')

    let title = {
        judulPortofolio: judul
    }

    function trackJudul (params) {
        setJudul(params.target.value)
    }

    const dispatch = useDispatch()
    const mandorById = useSelector((state)=>state.mandor.data)
    const portofolioMandor = useSelector((state)=>state.PortofolioMandor)
    console.log('data portofolio', portofolioMandor)
    useEffect(()=> {
        dispatch(getMandorByIdAction())
    },[dispatch])

    useEffect(()=> {
        dispatch(getPortofolioMandorAction())
    },[dispatch])

    const handleChange = (e) => {
        setImagePortofolio({
            ...imagePortofolio,
            [e.target.name]: e.target.value
        })
    }
    console.log("data judul portofolio",imagePortofolio.judulPortofolio)

    return (
        <div>
            <h1>PROFIL Mandor</h1>
            <img 
                            id="listMandorAvatar"
                            src={mandorById.fotoProfil} 
                            />
            <p>Nama : {mandorById.mandorName}</p>
            <p>Lokasi saat ini : {mandorById.lokasi}</p>
            <p>Nomor Telepon : {mandorById.nomorTelpon}</p>
            <p>Email : {mandorById.email}</p>
            <p></p>
            <input
                type="file"
                onChange={(event)=> {
                    setImageSelected(event.target.files[0])
                }}
            />
            <button onClick={(event)=>dispatch(uploadFotoMandorAction(imageSelected,event,setImageSelected))}>Upload Foto Profil</button>
            <p></p>
            <form onSubmit={(event)=>dispatch(uploadPortofolioMandorAction(imagePortofolio,title,event,setImagePortofolio))}>
            <input
                type = "text"
                name = "judulPortofolio"
                placeholder = "masukan judul portofolio anda disini"
                value = {title.judulPortofolio}
                onChange = {trackJudul}
            />
            <input
                type="file"
                onChange={(event)=> {
                    setImagePortofolio(event.target.files[0])
                }}
            />
            <button type="submit">Upload Foto Portofolio</button>
            </form>
            
            <p></p>
            <h2>Foto Portofolio</h2>
            {!!portofolioMandor.data && 
            portofolioMandor.data.map((items)=> (
                <div className="col">
                <div className="card shadow-sm border-dark">
                 
                 <img style={{"width": "100%","height": "300px"}} src={items.fotoPortofolio} className="card-img-top" alt=""/>
             
                 <div className="card-body">
                   <h5 className="card-title fs-3 fw-normal">{items.judulPortofolio}</h5>
                   <button type="button" onClick={(event)=>dispatch(deletePortofolioMandorAction(items,event))}  className="btn btn-dark"  >HAPUS</button>
                   <div className="d-flex justify-content-between align-items-center">
                   </div>
                 </div>
               </div>
             </div>
            ))
            }
        </div>
    )
}

export default ProfileMandor
