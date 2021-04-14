import '../App.css';
import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'


function Footer() {
    return (
        <div>
            <Container fluid className="bg-dark text-white w-100 p-2" id="targetFooter">
                 <p>Copyright @ 2021</p>
            </Container>
        </div>
    )
}

export default Footer
