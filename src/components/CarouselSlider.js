import '../App.css';
import React from 'react'
import {Container , Carousel} from 'react-bootstrap'


function CarouselSlider() {
    return (
        <div>

          <Container fluid className="w-100 p-0 m-0">
        
            <Carousel fade nextLabel={null} prevLabel={null}>
            <Carousel.Item interval={5000}>
                <img
                id="carouselImg"
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                  alt="First slide"
                />
              <Carousel.Caption>
                  <h3 >Repairment</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                id="carouselImg"
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Installment</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                id="carouselImg"
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Renovation</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          </Container>
        </div>
    )
}

export default CarouselSlider
