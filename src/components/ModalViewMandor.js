import {useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import {Modal , Button , Form , Dropdown} from 'react-bootstrap'

function ModalViewMandor(param) {

    // param.setModalViewMandorDetails

    const userLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    const dispatch = useDispatch()
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
            <Modal 
                show={show} 
                onHide={handleClose} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    mandor details here   
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Back</Button>
                    <Button variant="primary" onClick={()=>{}}>Select</Button>

                </Modal.Footer>
               
            </Modal>
            
        </div>
    )
}

export default ModalViewMandor
