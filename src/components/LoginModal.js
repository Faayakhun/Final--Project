import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function LoginModal(props) {
    const history = useHistory()
    const toLoginMandor = () => {
        history.push('/loginmandor')
        props.onHide()
    }
    const toLoginUser = () => {
        history.push('/loginuser')
        props.onHide()
    }
    return (
        <div className= 'button-center'>
             <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
             >
              <Modal.Header className= 'button-center'>
                <Modal.Title id="contained-modal-title-vcenter">
                  Pilih jenis login anda
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className= 'button-center'>
                <Button onClick={toLoginMandor} className="">Login sebagai Mandor</Button>

                <Button onClick={toLoginUser} className="">Login sebagai User</Button>

              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LoginModal
