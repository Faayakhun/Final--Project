import {useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {Container , Form , Row , Col , Button , Dropdown , Modal} from 'react-bootstrap'
import {addToCart} from '../redux/actions/service.action'

function Service() {

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




function hitService (param){
    setServiceStatus(param.target.innerHTML)
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
    dispatch(addToCart(service))
}


    return (
        <div>
            <Container className="text-start w-50 my-5">

                <Row>
                    <Col>
                        <h1 className="text-center my-3">Service Form</h1>
                    </Col>
                </Row>

                <Form className="border border-2 p-3">

                    <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="w-25 m-3">
                                {serviceStatus}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={hitService}>Mandor</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={hitService}>Vendor</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>

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

                    <Form.Control as="textarea" onChange={trackNotes} placeholder="Notes" className="w-100 m-3" />
                    <Form.Group className=" d-flex justify-content-start">
                        <Form.Control onChange={trackJumlahHari} placeholder="Days" className="w-25 m-3" />
                        <Form.Control onChange={trackJumlahTukang} placeholder="Man" className="w-25 m-3" />
                    </Form.Group>

                    <Button className="m-3" onClick={hit}>Search Now</Button>


                </Form>

            </Container>
        </div>
    )
}

export default Service
