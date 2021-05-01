import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Container , Row , Col , Modal, Button,Form} from 'react-bootstrap'
import {postNegoAction,putBudgetNegoAction,putNegoActionMandor,putNegoActionUser} from '../redux/actions/nego.action'

function ModalNego(props) {

    const [show, setShow] = useState(true)
    const dashboardData = useSelector(state => state.DashboardUser)
    const projectId =  dashboardData.data._id
    const jasaId = dashboardData.data.jasa._id
    const dispatch = useDispatch()
    const userId = localStorage.getItem('id')
    const mandorId = localStorage.getItem('mandorId')
    const projectID = localStorage.getItem('projectId')
    const [budget,setBudget] = useState ('')
    const [notes,setNotes] = useState('')
    const tokenMandor = localStorage.getItem("tokenMandor")
    const tokenUser = localStorage.getItem("tokenUser")

    let nego = {
        user: userId,
        mandor: mandorId,
        project : projectID,
        budget: budget,
        catatanNego: notes
    }

    function trackBudget (param){
        setBudget(param.target.value)
    }

    function trackNotes (param){
        setNotes(param.target.value)
    }

    const submitNego = (event) => {
        dispatch(postNegoAction(nego,jasaId,event))
        dispatch(putBudgetNegoAction(nego,jasaId,event))
        if (tokenMandor){
            dispatch(putNegoActionMandor(projectId,event))
        } else if (tokenUser){
            dispatch(putNegoActionUser(projectId,event))
        }
        props.setTriggerModalNego(false)
        // props.onHide()
        alert("nego berhasil ditambahkan")
    }

    const closeModal = () => {
        setShow(false)
        props.setTriggerModalNego(false)
    }

    return (
        <div>
            <Modal
            show={show}
            onHide={closeModal} 
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            id="customText"
            centered
            >
                <Modal.Header className="d-flex flex-row justify-content-center" id="banner3">
                    <h4>Maksimal Negosiasi Adalah 2x</h4>
                </Modal.Header>
                <Modal.Body className="">
                    <Container className="mt-5">
                        {/* Wrap row begin */}
                        <Row className="d-lg-flex flex-row justify-content-evenly">
                            <Col xs={12} lg={5}>
                                <Row>
                                    <Col xs={12}>
                                        <h4>Biaya Proyek Saat Ini</h4>
                                    </Col>
                                    <Col>
                                        <h2 className="fw-bold">Rp {props.biayaProyek},-</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr></hr>
                                        <h5>Histori Penawaran</h5>
                                            <Row>
                                                {!!props.negoData && props.negoData.map((items)=> ( 
                                                <>
                                                    <Col xs={12}>
                                                        <p className="text-secondary" id="negoHistoryBiaya">Rp. {items.budget},-</p>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <p className="text-secondary">{items.catatanNego}</p>
                                                    </Col>
                                                </> 
                                                    ))
                                            
                                                }
                                            </Row>
                                        <hr className="d-lg-none"></hr>
                                    </Col>
                                </Row>

                            </Col>
                            <Col className="p-lg-0" xs={12} lg={5}>
                                <Row>
                                    <Col>
                                        <Form className="mt-3 mt-lg-0">
                                            <Form.Label>Berapa Penawaran Anda?</Form.Label>
                                            <Form.Control 
                                                type="number" 
                                                name="budget"
                                                placeholder="Masukkan penawaran anda disini"
                                                onChange={trackBudget}
                                            />
                                            <Form.Label className='mt-3'>Note</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                as="textarea" 
                                                name="catatanNego"
                                                value={nego.catatanNego}
                                                placeholder="Apa alasan anda ingin melakukan penawaran?"
                                                onChange={trackNotes} 
                                            />
                                        </Form>
                                    </Col>
                                    
                                </Row>
                            </Col>
                        

                               

                        {/* Wrap row end */}
                        </Row>
                        <Row className="mt-5">
                            <Col className="text-center" xs={12}>
                                <Button className="border border-secondary" id="bg-highlight3" onClick={submitNego}>Submit</Button>
                                <Button variant="secondary" onClick={closeModal} className="ms-3">Kembali</Button>
                            </Col>
                        </Row>



                        {/* <Form>
                        <Form.Label>Biaya Baru</Form.Label>
                            <Form.Control 
                            type="number" 
                            name="budget"
                            // value={nego.budget}
                            onChange={trackBudget}
                            />
                        <Form.Label>Alasan kenapa di negosiasikan</Form.Label>
                            <Form.Control 
                            type="text" 
                            as="textarea" 
                            name="catatanNego"
                            value={nego.catatanNego}
                            onChange={trackNotes} 
                            />
                            
                        </Form>

                        {!!props.negoData && props.negoData.map((items)=> (

                            <div>
                            <h1>Catatan Negosiasi</h1>
                            <h5>Biaya Nego</h5>
                            <p>Rp. {items.budget},-</p>
                            <h5>Alasan Nego</h5>
                            <p>{items.catatanNego}</p>
                            </div>
                            ))
                        
                        }

                        <h1>Biaya Proyek Saat Ini Rp {props.biayaProyek},-</h1> */}


                    </Container>
                </Modal.Body>
                {/* <Modal.Footer>
               
                </Modal.Footer> */}
                </Modal>
        </div>
    )
}

export default ModalNego
