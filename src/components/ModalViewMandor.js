import {useState,useEffect } from 'react'
import { useSelector,useDispatch} from "react-redux";
import {Container , Modal , Button , Row , Col , Carousel} from 'react-bootstrap'
import {getMandorByIdAction} from '../redux/actions/mandor.action'
import {getPortofolioMandorAction} from '../redux/actions/portofolio.action'
import {getReviewMandorAction , getAllReviewMandorAction} from '../redux/actions/review.action'

function ModalViewMandor(param) {
    const dispatch = useDispatch()
    const mandorById = useSelector((state)=>state.mandor.data)
    const portofolioMandor = useSelector((state)=>state.PortofolioMandor)
    const reviewMandor = useSelector((state)=>state.Review)
    const [viewAll, setViewAll] = useState(false)

    function getAllReview(){
        dispatch(getAllReviewMandorAction())
        setViewAll(true)
    }

    useEffect(()=> {
        dispatch(getMandorByIdAction())
    },[dispatch])

    useEffect(()=> {
        dispatch(getPortofolioMandorAction())
    },[dispatch])

    useEffect(()=> {
        dispatch(getReviewMandorAction())
    },[dispatch])
    

    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        param.setModalViewMandorDetails(false)
    }

    return (
        <div>
            {mandorById ? <Modal 
                show={show} 
                onHide={handleClose} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header className="d-flex flex-row justify-content-center" id="bg-modal-header">
                    <h1>Profil Mandor</h1>
                </Modal.Header>
                <Modal.Header className="p-0 m-0" >
                <Container fluid className="p-0 m-0" id="mandor-view-details-container">
                
                    <Carousel id="customText"> 
                        {!!portofolioMandor.data && 
                        portofolioMandor.data.map((items)=> (

                                <Carousel.Item >
                                <img
                                className="d-block w-100"
                                id="mandor-view-details-carousel"
                                src={items.fotoPortofolio}
                                alt={items.judulPortofolio}
                                />
                                <Carousel.Caption>
                                <h3 className="text-capitalize">{items.judulPortofolio}</h3>
                                </Carousel.Caption>
                                </Carousel.Item>

                        ))
                        }
                    </Carousel>
                </Container>
                </Modal.Header>
                <Modal.Body className="p-0" id="customText">
                <Container className="my-4">
                    <Row className="d-flex flex-row justify-content-center">
                            <Col xs={4} lg={3}>
                                <img        
                                    alt=""
                                    id="listMandorAvatar"
                                    src={mandorById.fotoProfil}
                                />
                            </Col>
                            <Col className="pt-3" xs={8} lg={8}> 
                                <h1 className="text-capitalize">{mandorById.mandorName}</h1>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <span className="text-capitalize "> {mandorById.lokasi}</span> 
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="text-center">
                            
                            <Col>
                                <p>REVIEW {reviewMandor.data ? <span>({reviewMandor.data.length})</span> : <span>(0)</span> } </p>
                            </Col>

                        </Row>
                        {!!reviewMandor.data && 
                        reviewMandor.data.map((items)=> (
                            <>
                                <Row>
                                    <Col>
                                        <p className="text-capitalize text-secondary ps-2" id="mandor-review-list-username">{items.user.userName}</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                    <h5 className="ps-2">{items.judulReview}</h5>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="m-3 py-3" id="mandor-review-list-text">
                                        <p>{items.isiReview}</p>
                                    </Col>
                                </Row>
                                <hr></hr>
                            </>
                        ))
                        }
                        <Row>
                            <Col className="text-center mb-2">
                                <Button variant="" onClick={getAllReview} className={viewAll ? "disabled"  : "text-decoration-underline" } >View all</Button>
                            </Col>
                        </Row>
                    </Container>
     

    
            
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Back</Button>

                </Modal.Footer>
               
            </Modal>
            : <></> }
            
        </div>
    )
}

export default ModalViewMandor
