import React from 'react'
import {Container , Form , Row , Col , Button} from 'react-bootstrap'

function Contact() {
    return (
        <div>
            
            <Container className="p-5">

                <Row>
                    <Col>
                        <h1>Contact Us</h1>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={4} className="text-start">
                        <h5>Contact Information</h5>
                            <p>Jakarta</p>
                            <p>+62 812 1234</p>
                            <p>adamandor@example.com</p>
                    </Col>
                    <Col>
                        <h5>Leave Your Message</h5>
                        <Form className="d-flex flex-wrap">
                            <Form.Control placeholder="Your Name" className="w-25 m-2" />
                            <Form.Control placeholder="Your Email" className="w-25 m-2"  />
                            <Form.Control placeholder="Your Contact" className="w-25 m-2"  />
                            <Form.Control as="textarea" placeholder="Your Message" className="m-2" />
                            <Button className="m-2">SEND MESSAGE</Button>
                        </Form>
                    </Col>
                </Row>


            </Container>


        </div>
    )
}

export default Contact
