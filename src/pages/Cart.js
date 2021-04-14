import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {Container , Form , Row , Col , Button , Dropdown , Modal} from 'react-bootstrap'
import {displayUserCart} from '../redux/actions/cart.action'

function Cart() {

    const [triggerPayment, setTriggerPayment] = useState(false)
    const handlePayment = () => {
        alert("Pembayaran Berhasil !")
        setTriggerPayment(true)
    }
    const dispatch = useDispatch()
    const cartData = useSelector((state)=>state.cart)

    console.log("testing get to page " ,cartData)

    useEffect(() => {  
        dispatch(displayUserCart());
     }, [dispatch])



    return (
        <div>

            <Container className="w-50">
        



            {cartData.data ? 
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
            }


            </Container>
        </div>
    )
}

export default Cart
