import '../App.css';
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import {selectMandor} from '../redux/actions/selectMandor.action'
import {getFilteredMandor} from '../redux/actions/selectMandor.action';
import ModalServiceForm from "../components/ModalServiceForm";
import ModalViewMandor from '../components/ModalViewMandor';
import {Container ,  Row , Col , Button} from 'react-bootstrap';  

function SelectMandor() {
  const dispatch = useDispatch()
  const history = useHistory()
  const filteredMandor = useSelector((state)=>state.FilteredMandor)
  const [modalServiceForm, setModalServiceForm] = useState(false);
  const [modalViewMandorDetails, setModalViewMandorDetails] = useState(false);
  const [selectedMandorID, setSelectedMandorID] = useState("");
  console.log("mendapat data dari store" ,filteredMandor)

  useEffect(() => {
    dispatch(getFilteredMandor(localStorage.getItem("id")))
  }, [dispatch]);

 
  function mandorSelected (_id){
    console.log("Known mandor ID : " ,_id)
    dispatch(selectMandor(localStorage.getItem("id") ,  _id))
    alert("data service berhasil ditambahkan")
    history.push("/")
  }

  function triggerMandorDetails (){
    setModalViewMandorDetails(true)
  }


  return (
    <div className="body-content">
      <Container>
          <h1 className="my-5 text-secondary"><span id="highlight">Mandor</span> yang tersedia di lokasi anda</h1>
          <Row>
            <Col className="d-flex flex-row justify-content-center">
            <Row className="w-100">
              {!!filteredMandor.data &&
                filteredMandor.data.map((items) => (
                
                    <Col className=" text-start border border-secondary m-3" xs={12}>
                    <Row>
                      <Col>
                        <Row>
                          <Col className="text-center py-3" xs={3}>
                            <img 
                            id="listMandorAvatar"
                            src={items.fotoProfil} 
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
                        <Button variant="primary" onClick={()=>{mandorSelected(items._id)}}  className="ms-3">Select</Button>
                      </Col>
                    </Row>
                    
                    </Col>
                ))}

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

export default SelectMandor;
