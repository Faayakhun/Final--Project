import '../App.css';
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import {getFilteredMandor , selectMandor} from '../redux/actions/selectMandor.action';
import ModalViewMandor from '../components/ModalViewMandor';
import {Container ,  Row , Col , Button} from 'react-bootstrap';  

function SelectMandor(param) {
  const dispatch = useDispatch()
  const history = useHistory()
  const filteredMandor = useSelector((state)=>state.FilteredMandor)
  const [modalViewMandorDetails, setModalViewMandorDetails] = useState(false);
  const [selectedMandorID, setSelectedMandorID] = useState("");

  useEffect(() => {
    dispatch(getFilteredMandor(param.temporaryForm,localStorage.getItem("id")))
  }, [dispatch]);

 
  function mandorSelected (mandorID){
    dispatch(selectMandor(localStorage.getItem("id"),mandorID,param.temporaryForm))
    alert("data service berhasil ditambahkan")
    history.push("/")
  }

  function triggerMandorDetails (items){
    localStorage.setItem("mandorId",items._id)
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
                        <Button variant="primary" onClick={()=>{triggerMandorDetails(items)}} >View Mandor Profile</Button>
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
