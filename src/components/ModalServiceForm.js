import {useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {addToCart} from '../redux/actions/service.action'
import {Modal , Button , Form , Dropdown} from 'react-bootstrap'

function ModalServiceForm(param) {

    // we have:
    // param.setModalServiceForm
    // param.mandorID
    // param.vendorID
    
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        param.setModalServiceForm(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    const dispatch = useDispatch()
    const got = useSelector((state)=>state)

    const [serviceStatus, setServiceStatus] = useState("Select Service")
    const [category, setCategory] = useState("Choose Category")
    const [notes, setNotes] = useState("")
    const [jumlahHari, setJumlahHari] = useState(0)
    const [jumlahTukang, setJumlahTukang] = useState(0)

    let service = {
        category: category,
        catatan: notes,
        jumlahHari:parseInt(jumlahHari) ,
        jumlahTukang: parseInt(jumlahTukang),
        user: localStorage.getItem("id")
    }

    function hitCategory (param){
        setCategory(param.target.innerHTML)
    }
    
    function trackNotes (param){
        setNotes(param.target.value)
    }
    
    function trackJumlahHari (param){
        setJumlahHari(param.target.value)
    }
    
    function trackJumlahTukang (param){
        setJumlahTukang(param.target.value)
    }
    
    function hit (){
        console.log(service)
        dispatch(addToCart(service,param.mandorID,param.vendorID))

    }

    return (
        <div>

            <Modal 
                show={show} onHide={handleClose} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >   
                            <Modal.Body>
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" className="w-25 m-3">
                                        {category}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={hitCategory}>Renovation</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitCategory}>Repairment</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitCategory}>Installment</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Form>
                                    <Form.Control as="textarea" onChange={trackNotes} placeholder="Notes" className="w-100 m-3" />
                                    <Form.Group className=" d-flex justify-content-start">
                                        <Form.Control onChange={trackJumlahHari} placeholder="Days" className="w-25 m-3" />
                                        <Form.Control onChange={trackJumlahTukang} placeholder="Man" className="w-25 m-3" />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Back
                            </Button>
                            <Button className="m-3" onClick={hit}>
                                Confirm
                            </Button>
                            </Modal.Footer>
                </Modal>
            
        </div>
    )
}

export default ModalServiceForm
