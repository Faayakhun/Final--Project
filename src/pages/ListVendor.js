import {useState , useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {listVendorAction} from '../redux/actions/vendor.actions'
import { Button, Card} from "react-bootstrap";

function ListVendor() {
    const listVendor = useSelector((state)=>state.vendor.data)
    const [selectedVendorID, setSelectedVendorID] = useState("");

    function triggerModal (_id){
      setModalServiceForm(true)
      console.log("Known vendor ID : " ,_id)
      setSelectedVendorID(_id)
    }

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(listVendorAction())
    },[dispatch])

    return (
        <div>
            <h1>List Vendor</h1>
        {!!listVendor &&
          listVendor.map((items) => (
            <Card border='primary' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h4>Nama Vendor: {items.namaVendor}</h4></Card.Title>
              <Card.Text>
                <p>Alamat Kantor: {items.alamatKantor}</p>
                <p>email: {items.email}</p>
                <p>Nomor Telepon: {items.nomorTelepon}</p>
              </Card.Text>
              <Button variant="outline-dark" onClick={()=>{triggerModal(items._id)}}>Pilih</Button>
            </Card.Body>
          </Card>
          ))}

          {/* Triggering Modal from component */}
          {modalServiceForm ?
          <ModalServiceForm 
            setModalServiceForm={setModalServiceForm}
            vendorID={selectedVendorID}
          /> 
         : <></>} 

        </div>
    )
}

export default ListVendor
