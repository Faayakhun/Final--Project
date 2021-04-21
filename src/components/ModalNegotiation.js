import {useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import {Modal , Button , Form , Row , Col} from 'react-bootstrap'

function ModalNegotiation(param) {

    const userLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    const dispatch = useDispatch()
    const history = useHistory()

    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        param.setModalNegotiation(false)
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
                    <Row className="d-flex flex-row justify-content-center py-3">
                        <Col  xs={4}>
                            <h4>Biaya Proyek Saat Ini</h4>
                            <h5>Rp xxxxxx ,-</h5>
                            <hr></hr>
                            <h6 className="text-secondary">Histori Penawaran</h6>
                            {/* Histori Penawaran here */}
                        </Col>
                        <Col className="ms-5" xs={5}>
                            <Form>
                                <Form.Label>Berapa penawaran anda?</Form.Label>
                                <Form.Control
                                     type="text"
                                     placeholder="Masukkan penawaran anda disini"
                                />
                                <Form.Label>Notes</Form.Label>
                                <Form.Control
                                    type="text"
                                    as="textarea"
                                    rows={7}
                                    placeholder="Apa alasan anda ingin melakukan penawaran?"
                                />
                            </Form>
                        </Col>
                    </Row>
                    <Row className="text-center mt-5">
                        <Col>
                            <Button variant="primary" onClick={()=>{}} >Ok</Button>
                            <Button variant="danger" onClick={handleClose} className="ms-2">Kembali</Button>
                        </Col>
                    </Row>   
                </Modal.Body>
              
               
            </Modal>
            
        </div>
    )
}

export default ModalNegotiation
