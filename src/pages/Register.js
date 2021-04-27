import '../App.css';
import React from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {Container , Card , Row , Col} from 'react-bootstrap'

function Register() {
    let history = useHistory();
    return (
        <div>
            <Container fluid className="p-0 position-relative"> 
                <img
                    id="headerImg"
                    src="https://images.unsplash.com/photo-1541976590-713941681591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                />
                <div id="headerText">
                    <h1>Registrasi</h1>
                </div>
             </Container>

            <Container fluid className="py-5 mt-5" >

                <Row>
                    <Col>
                        <h1>Pilih Jenis Pendaftaran</h1>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-5">
                    <Col xs={2}>
                    <Card className="p-0 border-0">
                            <Card.Img 
                                variant="top" 
                                src="https://images.unsplash.com/photo-1618090584176-7132b9911657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                                id="registerImg"
                                onClick={()=>{ history.push("/registermandor")}}
                            />
                            <Card.Body  className="text-start w-100 px-0">
                                <Card.Title>
                                    <h5>Daftar sebagai Mandor</h5>
                                </Card.Title>
                                <Card.Text>
                                    Perkenalkan jasa anda ke komunitas kami untuk mendapatkan 
                                    customer baru yang potensial
                                </Card.Text>
                                <Link to="/registermandor"  id="registerArchon">Register Here</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={2}>
                        <Card className="p-0 border-0">
                            <Card.Img 
                                variant="top" 
                                src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80"
                                id="registerImg"
                                onClick={()=>{ history.push("/registeruser")}}
                            />
                            <Card.Body  className="text-start w-100 px-0">
                                <Card.Title>
                                    <h5>Daftar Sebagai User/Customer</h5>
                                </Card.Title>
                                <Card.Text>
                                    Daftar di situs kami untuk mendapatkan akses penuh dalam memenuhi
                                    semua kebutuhan konstruksi anda.
                                </Card.Text>
                                <Link to="/registeruser"  id="registerArchon">Register Here</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Register
