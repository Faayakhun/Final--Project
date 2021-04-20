import '../App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalServiceForm from "../components/ModalServiceForm";
import ModalViewMandor from '../components/ModalViewMandor';
import {Container , Card ,  Row , Col , Button} from 'react-bootstrap';  

function ListMandor() {
  const [mandor, setMandor] = useState("");
  const [modalServiceForm, setModalServiceForm] = useState(false);
  const [modalViewMandorDetails, setModalViewMandorDetails] = useState(false);
  const [selectedMandorID, setSelectedMandorID] = useState("");
  console.log("status state modal adalah " ,modalServiceForm)
  const url = "https://final-project-team1.herokuapp.com/";

  useEffect(() => {
    getListMandor();
  }, []);

  const getListMandor = () => {
    axios
      .get(`${url}mandor`)
      .then((response) => {
        let listMandor = response.data.data;
        setMandor(listMandor);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  function triggerModal (_id){
    setModalServiceForm(true)
    console.log("Known mandor ID : " ,_id)
    setSelectedMandorID(_id)
  }

  function triggerMandorDetails (){
    setModalViewMandorDetails(true)
  }

  const dataMandor = mandor;
  console.log(dataMandor);

  return (
    <div className="body-content">
      <Container>
          <h1 className="my-5 text-secondary"><span id="highlight">Mandor</span> yang tersedia di lokasi anda</h1>
          <Row>
            <Col className="d-flex flex-row justify-content-center">
            <Row className="w-100">
              {!!dataMandor &&
                dataMandor.map((items) => (
                
                    <Col className=" text-start border border-secondary m-3" xs={12}>
                    <Row>
                      <Col>
                        <Row>
                          <Col className="text-center py-3" xs={3}>
                            <img 
                            id="listMandorAvatar"
                            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" 
                            />
                          </Col>
                          <Col className="py-5">
                            <h2>{items.mandorName}</h2>
                            <p>📍 {items.lokasi}</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col className=" align-self-end text-end p-3">
                        <Button variant="primary" onClick={()=>{triggerMandorDetails()}} >View Mandor Profile</Button>
                        <Button variant="primary" onClick={()=>{triggerModal(items._id)}}  className="ms-3">Select</Button>
                      </Col>
                    </Row>
                    
                    </Col>
                

                ))}

              {/* Triggering Modal from component */}
              {modalServiceForm ?
              <ModalServiceForm 
                  setModalServiceForm={setModalServiceForm}
                  mandorID={selectedMandorID}
              /> 
              : <></>} 

               {/* Triggering View Mandor Details Modal from component */}
               {modalViewMandorDetails ?
              <ModalViewMandor 
                  setModalViewMandorDetails={setModalViewMandorDetails}
              /> 
              : <></>} 

                </Row>
            </Col>
          </Row>
      

      </Container>
    </div>
  );
}

export default ListMandor;
