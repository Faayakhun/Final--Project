import {useState,useEffect } from 'react'
import { useSelector,useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'
import {Modal , Button , Form , Dropdown} from 'react-bootstrap'
import {getMandorByIdAction} from '../redux/actions/mandor.action'
import {getPortofolioMandorAction} from '../redux/actions/portofolio.action'
import {getReviewMandorAction} from '../redux/actions/review.action'

function ModalViewMandor(param) {
    const dispatch = useDispatch()

    const mandorById = useSelector((state)=>state.mandor.data)
    console.log("data dari modal view mandor", mandorById)
    const portofolioMandor = useSelector((state)=>state.PortofolioMandor)
    const reviewMandor = useSelector((state)=>state.Review)

    useEffect(()=> {
        dispatch(getMandorByIdAction())
    },[dispatch])

    useEffect(()=> {
        dispatch(getPortofolioMandorAction())
    },[dispatch])

    useEffect(()=> {
        dispatch(getReviewMandorAction())
    },[dispatch])
    

    // param.setModalViewMandorDetails

    const userLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    
    const history = useHistory()

    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        param.setModalViewMandorDetails(false)
    }

    const handleShow = () => {
        setShow(true)
    }

   
    function hit (){

    }


    return (
        <div>
            {mandorById ? <Modal 
                show={show} 
                onHide={handleClose} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
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
                <h2>Review </h2>
            {!!reviewMandor.data && 
            reviewMandor.data.map((items)=> (
                <div>
                    <h4>{items.user.userName}</h4>
                    <h5>{items.judulReview}</h5>
                    <p>{items.isiReview}</p>
                </div>
            ))
            }
                <h2>Foto Portofolio</h2>
            {!!portofolioMandor.data && 
            portofolioMandor.data.map((items)=> (
                <div className="col">
                <div className="card shadow-sm border-dark">
                 
                 <img style={{"width": "100%","height": "300px"}} src={items.fotoPortofolio} className="card-img-top" alt=""/>
             
                 <div className="card-body">
                   <h5 className="card-title fs-3 fw-normal">{items.judulPortofolio}</h5>
                   <div className="d-flex justify-content-between align-items-center">
                   </div>
                 </div>
               </div>
             </div>
            ))
            }
            
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Back</Button>

                </Modal.Footer>
               
            </Modal>
            : <></> }
            
        </div>
    )
}

export default ModalViewMandor
