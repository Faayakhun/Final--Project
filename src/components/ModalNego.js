import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Modal, Button,Form} from 'react-bootstrap'
import {postNegoAction,putBudgetNegoAction,putNegoActionMandor,putNegoActionUser} from '../redux/actions/nego.action'

function ModalNego(props) {
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
        props.onHide()
        alert("nego berhasil ditambahkan")
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
                Masukan Negosiasi Anda
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={submitNego}>Submit</Button>
                <Button onClick={props.onHide}>Close</Button>
                <h2>MAXIMAL NEGOSIASI HANYA 3 KALI</h2>
                </Modal.Footer>
                </Modal>
        </div>
    )
}

export default ModalNego
