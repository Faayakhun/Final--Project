import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Modal, Button,Form} from 'react-bootstrap'
import {postReviewAction} from '../redux/actions/review.action'

function ReviewModal(props) {
    const [show, setShow] = useState(true)
    const dashboardData = useSelector(state => state.DashboardUser)
    const projectId = dashboardData.data._id
    const dispatch = useDispatch()
    const userId = localStorage.getItem('id')
    const mandorId = localStorage.getItem('mandorId')
    const [judulReview,setJudulReview] = useState("")
    const [isiReview,setIsiReview] = useState("")

    const closeModal = () => {
        setShow(false)
        props.setTriggerModalReview(false)
    }

    let review = {
        mandor: mandorId,
        user: userId,
        judulReview: judulReview,
        isiReview: isiReview
    }

    function trackJudul (param){
        setJudulReview(param.target.value)
    }

    function trackIsi (param){
        setIsiReview(param.target.value)
    }

    const submitReview = (event) => {
        dispatch(postReviewAction(review,projectId,event))
        // props.onHide()
        props.setTriggerModalReview(false)
    }

    return (
        <div>
            <Modal
            id="customText"
            show={show}
            onHide={closeModal}
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header className="d-flex flex-row justify-content-center" id="banner3">
                    <h2>Masukan Review Anda</h2>
                </Modal.Header>
                <Modal.Body >
                    <Form>
                    <Form.Label>Judul Review</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="judulReview"
                        value={review.judulReview}
                        onChange={trackJudul}
                        placeholder="Masukkan judul review"
                        />
                    <Form.Label>Isi Review</Form.Label>
                        <Form.Control 
                        type="text" 
                        as="textarea" 
                        name="isiReview"
                        value={review.isiReview}
                        onChange={trackIsi} 
                        placeholder="Tulis ulasan anda disini"
                        />
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button className="border border-none" id="bg-highlight3" onClick={submitReview}>Submit</Button>
                <Button variant="secondary" onClick={closeModal}>Back</Button>
                </Modal.Footer>
                </Modal>
   </div>
    )
}

export default ReviewModal
