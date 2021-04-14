import '../App.css';
import emblem from './asset/logo-adamandor-plain.png'
import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'

function BannerAboutUs() {
    return (
        <div>
            <Container fluid>

                <Row className="d-flex justify-content-center mt-5 pt-5">
                    <Col className="text-start" xs={3}>

                        <Row className="d-flex flex-column h-100">
                            <Col>
                                <p className="text-uppercase">about us</p>
                                <h2>Connecting <span id="highlight">Mandors</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                            </Col>
                            <Col className="d-flex flex-row align-items-end justify-content-end">
                                <div id="bannerAboutEmblemFrame" className="w-25">
                                    <img src={emblem} id="bannerAboutEmblem"/>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    <Col className="px-5" xs={3}>
                            <div id="bannerAboutImgFrame">
                                <img 
                                    src="https://images.unsplash.com/photo-1616324628325-22b85b599090?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                                    alt="picture" 
                                    className="w-100"
                                    id="bannerAboutImg"
                                />
                            </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default BannerAboutUs
