import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Modal, Button,Form} from 'react-bootstrap'
import {postReviewAction} from '../redux/actions/review.action'

function ReviewModal(props) {
    const dashboardData = useSelector(state => state.DashboardUser)
    const projectId = dashboardData.data._id
    console.log("data project id", projectId)
    const dispatch = useDispatch()
    const userId = localStorage.getItem('id')
    const mandorId = localStorage.getItem('mandorId')
    const [judulReview,setJudulReview] = useState("")
    const [isiReview,setIsiReview] = useState("")

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
        props.onHide()
        alert("review berhasil ditambahkan")
    }

    return (
        <div>
            <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                Masukan Review Anda
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Label>Judul Review</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="judulReview"
                        value={review.judulReview}
                        onChange={trackJudul}
                        />
                    <Form.Label>Isi Review</Form.Label>
                        <Form.Control 
                        type="text" 
                        as="textarea" 
                        name="isiReview"
                        value={review.isiReview}
                        onChange={trackIsi} 
                        />
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={submitReview}>Submit</Button>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
                </Modal>
   </div>
    )
}

export default ReviewModal
