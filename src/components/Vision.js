import '../App.css';
import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'

function Vision() {
    return (
        <div>
            <Container fluid className="text-center p-5" id="vision">
                
                <h1 className="">Our Vision</h1>

                <Row className="w-100 d-flex justify-content-center my-5 text-secondary">
                    <Col xs={2}>
                        <h2>Cepat</h2>
                        <p className="text-dark">Semua kebutuhan konstruksi anda hanya tinggal klik saja</p>
                    </Col>
                    <Col xs={2}>
                        <h2>Murah</h2>
                        <p className="text-dark">Semua biaya anda dapat di negosiasikan langsung tanpa perantara</p>
                    </Col>
                    <Col xs={2}> 
                        <h2>Kepercayaan</h2>
                        <p className="text-dark">Sistem review yang kredibel dan sistem verifikasi yang ketat menjamin kepuasan anda</p>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Vision
