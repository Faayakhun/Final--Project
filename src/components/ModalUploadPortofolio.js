import React from 'react'
import {useState} from 'react'
import {useDispatch} from "react-redux";
import {uploadPortofolioMandorAction} from '../redux/actions/portofolio.action'
import {Modal , Button , Form , Row , Col} from 'react-bootstrap'

function ModalUploadPortofolio(param) {

    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => {
        param.setAddPortofolio(false)
        setShow(false);
    }

    const [imagePortofolio,setImagePortofolio] = useState({
        mandor: "",
        file: null,
        fotoPortofolio:"",
    })

    const [judul,setJudul]=useState('')

    let title = {
        judulPortofolio: judul
    }

    function trackJudul (params) {
        setJudul(params.target.value)
    } 

    function hit (event) {
        dispatch(uploadPortofolioMandorAction(imagePortofolio,title,event,setImagePortofolio))
        handleClose()
    }

    return (
        <div>
             <Modal 
                show={show} 
                onHide={handleClose} 
                size="lg"
                id="customText"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="d-flex flex-row justify-content-center" id="banner3">
                    <h3>Upload Portofolio</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={hit} className="text-center text-lg-start ">
                        <Row className="d-flex flex-row justify-content-center">
                            <Col className="my-3"  lg={8}>
                                <Form.Control
                                    type = "text"
                                    name = "judulPortofolio"
                                    placeholder = "Masukan judul portofolio anda disini"
                                    value = {title.judulPortofolio}
                                    onChange = {trackJudul}   
                                />
                            </Col>
                            <Col className="my-3" xs={12} lg={8}>
                                <Form.File
                                    type="file"
                                    onChange={(event)=> {
                                    setImagePortofolio(event.target.files[0])
                                    }}
                                />
                            </Col>
                            <Col className="mt-4 text-center" xs={12} >
                                <Button id="bg-highlight3" type="submit" className={imagePortofolio.file===null ? "disabled" : ""} >Upload Foto Portofolio</Button>
                            </Col>
                        </Row> 
                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default ModalUploadPortofolio
