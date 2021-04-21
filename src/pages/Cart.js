import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {Container , Form , Row , Col , Button , Dropdown , Modal} from 'react-bootstrap'
import {displayUserCart} from '../redux/actions/cart.action'
import ModalNegotiation from '../components/ModalNegotiation'

function Cart() {

    const [triggerPayment, setTriggerPayment] = useState(false)
    const [modalNegotiation, setModalNegotiation] = useState(false)
    const handlePayment = () => {
        alert("Pembayaran Berhasil !")
        setTriggerPayment(true)
    }
    const dispatch = useDispatch()
    const cartData = useSelector((state)=>state.cart)

    console.log("testing get to page " ,cartData)

    function triggerNegotiation (){
        setModalNegotiation(true)
      }

    useEffect(() => {  
        dispatch(displayUserCart());
     }, [dispatch])



    return (
        <div>

            <Container fluid className="border border-secondary p-3">
        
            <h3 className="">Cart</h3>

            <Row>
                <Col>
                    <h5 >Detail Proyek</h5>
                    <p className="text-secondary">Lorem Ipsum</p>
                </Col>
                <Col>
                    <h5>Biaya Proyek</h5>
                    <h5 className="text-secondary">Rp xxxxxx ,-</h5>
                </Col>
            </Row>

            <Row className="pt-5">
                <Col className="text-end">
                    <Button className="ms-3" variant="dark" onClick={()=>{triggerNegotiation()}}>Negosiasi</Button>
                    <Button className="ms-3" variant="primary" >Setuju dan Bayar</Button>
                    <Button className="ms-3" variant="danger">Batalkan Proyek</Button>
                </Col>
              
            </Row>



             {/* Triggering Negotiation Modal from component */}
             {modalNegotiation ?
              <ModalNegotiation 
                  setModalNegotiation={setModalNegotiation}
              /> 
              : <></>} 












            {/* To be kicked */}

            {/* {cartData.data ? 
                <div className="text-start">
                    
                    {cartData.data.namaUser ?  <h1 className="text-uppercase">{cartData.data.namaUser.userName}'S CART</h1> : <></>}
                    {cartData.data.mandor ? 
                        <div>
                            <p>Mandor : {cartData.data.mandor.mandorName}</p> 
                            <p>Estimasi Harga : Rp.{cartData.data.mandor.estHarga} per hari</p> 
                        </div>
                    : <></>}
                    {cartData.data.vendor ? 
                        <div>
                            <p>Vendor : {cartData.data.vendor.namaVendor}</p> 
                        </div>
                    : <></>}
                    {cartData.data.jasa ? 
                        <div>
                          <p>Kategori : {cartData.data.jasa.category}</p> 
                          <p>Catatan : {cartData.data.jasa.catatan}</p> 
                          <Button onClick={handlePayment} disabled={triggerPayment}>Payment</Button>
                        </div>
                    :<></>}
                    
                </div>
            
                :<p>Empty Data</p>
            } */}


            </Container>
        </div>
    )
}

export default Cart
