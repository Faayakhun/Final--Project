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
            <h1>CART</h1>

            {cartData.data ? 
                <div>
                    
                    {cartData.data.namaUser ? <p>{cartData.data.namaUser.userName}</p> : <></>}
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
                        </div>
                    :<></>}
                    
                </div>
            
                :<p>Empty Data</p>
            }

            <Button onClick={handlePayment} disabled={triggerPayment}>Payment</Button>

            
        </div>
    )
}

export default Cart
