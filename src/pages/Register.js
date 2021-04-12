import React from 'react'
import {Link} from 'react-router-dom'
import {Container , Card , Row , Col , Button} from 'react-bootstrap'

function Register() {
    return (
        <div>
            <Container fluid className="py-5 mt-5" id="banner">

<Row>
    <Col>
        <h1>Pilih Jenis Pendaftaran</h1>
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
                    <h5>Daftar sebagai Vendor</h5>
                </Card.Title>
                <Card.Text>
                            Bergabunglah dengan list vendor kami untuk mendapatkan 
                            jangkauan pemasaran lebih luas
                </Card.Text>
                <Link to="/registervendor" className="text-dark text-uppercase">Register</Link>
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
                    <h5>Daftar sebagai Mandor</h5>
                </Card.Title>
                <Card.Text>
                            Perkenalkan jasa anda ke komunitas kami untuk mendapatkan 
                            customer baru yang potensial
                </Card.Text>
                <Link to="/registermandor" className="text-dark text-uppercase">Register</Link>
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
                    <h5>Daftar Sebagai User/Customer</h5>
                </Card.Title>
                <Card.Text>
                            Daftar di situs kami untuk mendapatkan akses penuh dalam memenuhi
                            semua kebutuhan konstruksi anda.
                </Card.Text>
                <Link to="/registeruser" className="text-dark text-uppercase">Register</Link>
            </Card.Body>
        </Card>
    </Col>
    




</Row>



</Container>
        </div>
    )
}

export default Register
