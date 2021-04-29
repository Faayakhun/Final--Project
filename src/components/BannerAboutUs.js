import '../App.css';
import {useHistory} from 'react-router-dom'
import emblem from './asset/logo-adamandor.jpg'
import React from 'react'
import {Container , Row , Col , Button} from 'react-bootstrap'

function BannerAboutUs() {
    const history = useHistory()
    return (
        <div>
            <Container fluid>

                <Row className="d-flex justify-content-center mt-5 pt-5">
                    <Col className="text-start" xs={12} lg={3}>

                        <Row className="d-flex flex-column h-100">
                            <Col>
                                <p className="text-uppercase">about us</p>
                                <h2>Connecting <span id="highligh 4t">Mandors</span></h2>
                                <p>Kami menyediakan tempat untuk para penyedia jasa konstruksi terutama skala kecil seperti mandor sehingga mereka bisa memasarkan jasa mereka</p>
                                <p>Untuk para customer, kami menyediakan "wadah" untuk mencari jasa konstruksi skala kecil yang lebih kredibel dibanding harus mencari sendiri yang belum diketahui kualitasnya</p>
                            <Col className="text-center text-lg-start pt-3">
                                <Button onClick={()=>{history.push("/contact")}} className="border border-none" id="bg-highlight">Contact us</Button>
                            </Col>
                            </Col>
                            <Col className="d-flex flex-row align-items-end justify-content-end ">
                                <div id="bannerAboutEmblemFrame" className="w-50 d-none d-lg-block" >
                                    <img src={emblem} alt="emblem-adamandor" id="bannerAboutEmblem"/>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    <Col className="px-5 mt-5 mt-lg-0" xs={12} lg={3}>
                            <div id="bannerAboutImgFrame">
                                <img 
                                    src="https://images.unsplash.com/photo-1616324628325-22b85b599090?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                                    alt="gambar-about-us" 
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
