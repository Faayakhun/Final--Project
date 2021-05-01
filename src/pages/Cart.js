import {useState} from 'react'
import {Container , Row , Col , Button , Table} from 'react-bootstrap'
import ModalPayment from '../components/ModalPayment'

function Cart(param) {
    
    const [triggerPayment, setTriggerPayment] = useState(false)
    function payment (){
        setTriggerPayment(true)
    }

    return (
        <div>

            <Container fluid >
            {param.projectStatus==="Paid" ? 
              <h3>Pembayaran diterima</h3>
            : <h3 className="">Proyek anda telah di setujui, silahkan lanjutkan untuk pembayaran</h3>
            }

            <Row className="border mt-3 p-3">
                <Col>
                    <Table>
                        <thead >
                                <tr>               
                                    <th>Jenis Properti</th>
                                    <th>Area Pekerjaan</th>
                                    <th>Luas Pekerjaan</th>
                                    <th>Durasi Pekerjaan (hari)</th>
                                </tr>
                        </thead>
                        <tbody>
                            <td>{param.projectJenisProperti}</td>
                            <td>{param.projectAreaPekerjaan}</td>
                            <td>{param.projectLuasArea} m2</td>
                            <td>{param.projectDurasiPekerjaan}</td>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row className="mt-3 d-flex flex-row justify-content-center">
                <Col className="">
                    {param.projectStatus==="Paid" ?
                      <Button className="border border-none" variant="primary" id="bg-highlight3" disabled>Pembayaran</Button>
                    : <Button className="border border-none" variant="primary" onClick={payment} id="bg-highlight3">Pembayaran</Button>
                    }
                </Col>
              
            </Row>



             {/* Triggering Negotiation Modal from component */}
             {triggerPayment ?
              <ModalPayment 
                  setTriggerPayment={setTriggerPayment}
                  projectBiayaProyek={ param.projectBiayaProyek}
                  projectID={param.projectID}
              /> 
              : <></>} 


            </Container>
        </div>
    )
}

export default Cart
