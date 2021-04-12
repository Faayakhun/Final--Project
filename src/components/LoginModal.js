import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function LoginModal(props) {
    const history = useHistory()
    const toLoginVendor = () => {
        history.push('/loginvendor')
        props.onHide()
    }
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
        <Button onClick={toLoginVendor} className='mr-1'>Login sebagai Vendor</Button>
        <span></span>
        <Button onClick={toLoginMandor} className='mr-1'>Login sebagai Mandor</Button>
        <span></span>
        <Button onClick={toLoginUser} className='mr-1'>Login sebagai User</Button>
        <span></span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default LoginModal
