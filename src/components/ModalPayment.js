import '../App.css';
import {useState} from 'react'
import {useDispatch} from "react-redux";
import {uploadPayment} from '../redux/actions/payment.action';
import {Modal , Button , Form , Row , Col} from 'react-bootstrap'

function ModalPayment(param) {

    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        param.setTriggerPayment(false)
    }

    const [myImage, setMyImage] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    function uploadImage (event){
        setMyImage(event.target.files[0])
       
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
       
         reader.onload = function(e) {
           setPreviewImage(e.target.result)
         }
     
       }

   
    function hitPayment (){
        const formData = new FormData();
        formData.append('file', myImage)
        formData.append('upload_preset',"jbsrcmbu")
        dispatch(uploadPayment(param.projectID,localStorage.getItem("id"),formData,param.setTriggerPayment))    
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
                    <Row className="text-center mt-3">
                        <Col xs={12}>
                            <h3>Nominal Pembayaran</h3>
                        </Col>
                        <Col xs={12} className="my-2"> 
                            <h3 id="priceTag">Rp {param.projectBiayaProyek} ,-</h3>
                        </Col>
                        <Col xs={12} className="mt-5">
                            <h4>Silahkan ditransfer melalui rekening adamandor</h4>
                        </Col>
                        <Col xs={12} className="my-2">
                            <h3>BCA 123456789</h3>
                        </Col>
                        <Col>
                            {previewImage ?
                                <img
                                    alt=""
                                    id="paymentImg"
                                    src={previewImage} 
                                /> 
                             :  <img 
                                    alt="gambar-payment"
                                    id="paymentImg"
                                    src={"https://www.freeiconspng.com/uploads/no-image-icon-6.png"} 
                                />
                            }
                        </Col>
                        <Col xs={12} className="">
                            <Form>
                                <Form.File id="inputFile" onChange={uploadImage} className="mt-3"/>
                            </Form>
                        </Col>
                        <Row className="d-flex flex-row justify-content-center">
                            <Col xs={4} className="p-0">
                                    <Button type="button" className="mt-3 w-100" onClick={hitPayment} >Upload bukti pembayaran</Button>
                            </Col>
                        </Row>
                    </Row>
                  
                    <Row className="text-end mt-5">
                        <Col>
                            <Button variant="danger" onClick={handleClose} >Kembali</Button>
                        </Col>
                    </Row>   
                </Modal.Body>
              
               
            </Modal>
            
        </div>
    )
}

export default ModalPayment
