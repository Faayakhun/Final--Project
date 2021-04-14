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
                            src="https://ruangarsitek.id/wp-content/uploads/2020/04/Lantai-Granit-Klasik-Modern.jpg"
                        />
                            <Card.Body  className="text-start w-100 px-0">
                                <Card.Title>
                                    <h5>Keramik, Granit, Marmer? Mana Yang Cocok Untuk Hunian Anda?</h5>
                                </Card.Title>
                                <Card.Text>
                                Salah satu hal terpenting dalam pembangunan sebuah hunian adalah pemilihan material. Material memiliki peran yang sangat vital dalam sebuah hunian, karena material inilah yang nantinya
                                </Card.Text>
                                <a href="#" className="text-dark text-uppercase">see more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={2}>
                    <Card className="p-0 border-0" id="banner">
                        <Card.Img 
                            variant="top" 
                            src="https://www.casaindonesia.com/lkgallery/teaser/ruang-makan-minimalis-casa-indonesia-5_33_20200107153142CokZRr.jpg"
                        />
                            <Card.Body  className="text-start w-100 px-0">
                                <Card.Title>
                                    <h5>Tipe-Tipe Meja Makan yang Dapat Diaplikasikan di Ruang Makan Kamu</h5>
                                </Card.Title>
                                <Card.Text>
                                Saat bulan puasa, berkumpul di meja makan menjadi salah satu momen yang dinanti, terutama ketika menjelang berbuka puasa dan sahur. Ditambah lagi, puasa kali ini juga masih dibayangi pandemi COVID-19 yang belum usai
                                </Card.Text>
                                <a href="#" className="text-dark text-uppercase">see more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={2}>
                    <Card className="p-0 border-0" id="banner">
                        <Card.Img 
                            variant="top" 
                            src="https://indo-remotecache.99.co/20200815/225540/1e45d53da8743346e6e967d9418821c6/desain%20rumah%20Islami.jpg"
                        />
                            <Card.Body  className="text-start w-100 px-0">
                                <Card.Title>
                                    <h5>Hal Penting yang Perlu Kamu Persiapkan di Rumah Saat Ramadhan</h5>
                                </Card.Title>
                                <Card.Text>
                                Saat bulan Ramadhan tentu kualitas ibadah ingin ditingkatkan. Namun, kadang ada beberapa hal yang mengganggu dari kondisi rumahmu yang menguji kesabaran. Agar lebih tenang dalam menghadapi bulan puasa
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
