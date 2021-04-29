import {useState} from 'react'
import {Modal , Button} from 'react-bootstrap'

function ModalViewMandor(param) {

    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        param.setTriggerViewUser(false)
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
                    client details here   
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Back</Button>
                </Modal.Footer>
               
            </Modal>
            
        </div>
    )
}

export default ModalViewMandor
