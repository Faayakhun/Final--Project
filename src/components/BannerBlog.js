import '../App.css';
import React from 'react'
import {Container , Card , Row , Col , Button} from 'react-bootstrap'


function BannerBlog() {
    return (
        <div>
            <Container fluid className="py-5 mt-5" id="banner">

                <Row>
                    <Col>
                        <h1>New Blog</h1>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-5">
                    <Col xs={2}>
                    <Card className="p-0 border-0" id="banner">
                        <Card.Img 
                            variant="top" 
                            src="https://castro.reactdemo.hasthemes.com/assets/img/blog/blog-details-1.jpg"
                        />
                            <Card.Body  className="text-start w-100 px-0">
                                <Card.Title>
                                    <h5>Industry Ministry to Hike</h5>
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="#" className="text-dark text-uppercase">see more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={2}>
                    <Card className="p-0 border-0" id="banner">
                        <Card.Img 
                            variant="top" 
                            src="https://castro.reactdemo.hasthemes.com/assets/img/blog/blog-details-1.jpg"
                        />
                            <Card.Body  className="text-start w-100 px-0">
                                <Card.Title>
                                    <h5>Industry Ministry to Hike</h5>
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="#" className="text-dark text-uppercase">see more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={2}>
                    <Card className="p-0 border-0" id="banner">
                        <Card.Img 
                            variant="top" 
                            src="https://castro.reactdemo.hasthemes.com/assets/img/blog/blog-details-1.jpg"
                        />
                            <Card.Body  className="text-start w-100 px-0">
                                <Card.Title>
                                    <h5>Industry Ministry to Hike</h5>
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="#" className="text-dark text-uppercase">see more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    




                </Row>

             

            </Container>
        


        </div>
    )
}

export default BannerBlog
