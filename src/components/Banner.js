import '../App.css';
import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'

function Banner() {
    return (
        <div>

            <Container fluid id="banner" className="p-5" >

            
             
             <Row >
                 <Col className="mt-3">
                    <h1>Latest Projects</h1>
                 </Col>
            
             </Row>
             <Row className="mt-5 d-flex justify-content-center">
                 <Col xs={3}>
                    <div><img src="https://images.unsplash.com/photo-1563212107-c0cd3b51dc0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1363&q=80" alt="picture" className="w-100"/></div>
                 </Col>
                 <Col xs={3} className="text-start px-4" >
                    <h1 className="display-3 text-secondary">01</h1>
                    <h1>Renovation</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos, reprehenderit dolor corrupti,
                         dolorem nemo ipsam facilis corporis suscipit beatae praesentium repellendus ratione.
                    </p>
                 </Col>
             </Row>
             

         

            </Container>
            
        </div>
    )
}

export default Banner
