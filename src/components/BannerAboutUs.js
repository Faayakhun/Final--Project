import '../App.css';
import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'

function BannerAboutUs() {
    return (
        <div>
            <Container fluid>

                <Row className="d-flex justify-content-center mt-5 pt-5">
                    <Col className="text-start" xs={3}>
                        <p className="text-uppercase">about us</p>
                        <h2>We are Best construction in the world</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    </Col>
                    <Col className="px-5" xs={3}>
                         <div id="bannerAboutImg" >
                             <img 
                                src="https://castro.reactdemo.hasthemes.com/assets/img/backgrounds/video-cta.jpg" 
                                alt="picture" 
                                className="w-100"
                             />
                            </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default BannerAboutUs
