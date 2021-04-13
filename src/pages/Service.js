import {useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {Container , Form , Row , Col , Button , Dropdown , Modal} from 'react-bootstrap'
import {addToCart} from '../redux/actions/service.action'
import ListMandor from '../pages/ListMandor'
import ListVendor from '../pages/ListVendor'

function Service() {

const dispatch = useDispatch()
const got = useSelector((state)=>state)

const [listMandor, setListMandor] = useState(false)
const [listVendor, setListVendor] = useState(false)
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






function hitServiceMandor (param){
    setServiceStatus(param.target.innerHTML)
    setListVendor(false)
    setListMandor(true)
}

function hitServiceVendor (param){
    setServiceStatus(param.target.innerHTML)
    setListMandor(false)
    setListVendor(true) 
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
    setListMandor(true)
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
                                <Dropdown.Item href="#/action-1" onClick={hitServiceMandor}>Mandor</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={hitServiceVendor}>Vendor</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>

                    {listMandor ? <ListMandor/> : <></>}
                    {listVendor ? <ListVendor/> : <></>}

                </Form>

           


            </Container>
        </div>
    )
}

export default Service
