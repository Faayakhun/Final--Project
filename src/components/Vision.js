import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'

function Vision() {
    return (
        <div>
            <Container fluid className="text-center mt-5">
                
                <h1 className="">Our Vision</h1>

                <Row className="w-100 d-flex justify-content-center my-5 text-secondary">
                    <Col xs={2}>
                        <h2>Fast</h2>
                        <p className="text-dark">lorem ipsum</p>
                    </Col>
                    <Col xs={2}>
                        <h2>Cheap</h2>
                        <p className="text-dark">lorem ipsum</p>
                    </Col>
                    <Col xs={2}> 
                        <h2>Trust</h2>
                        <p className="text-dark">lorem ipsum</p>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Vision
