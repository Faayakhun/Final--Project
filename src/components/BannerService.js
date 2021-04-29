import React from 'react'
import {useHistory} from 'react-router-dom'
import {Container , Row , Col , Button} from 'react-bootstrap'

function BannerService() {
    const history = useHistory()
    return (
        <div>
            <Container fluid className="p-5 mt-5" id="banner">
                <Row className="p-3">
                    <Col xs={12}>
                        <h1>Cari Mandor Sekarang</h1>
                    </Col>
                    <Col className="p-3">
                        <h5 className="text-secondary">Tekan untuk mulai mencari mandor sekarang juga</h5>
                    </Col>
                </Row>
                <Row className="d-flex flex-row justify-content-center"> 
                    <Col>
                        <Button onClick={()=>{history.push("/service")}} className="border border-none px-5" id="bg-highlight3">Go</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BannerService
