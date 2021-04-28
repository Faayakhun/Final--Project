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
  console.log("dapat apa " ,filteredMandor)

  if(param.temporaryForm==undefined){
    history.push("/service")
  }

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
    <div>
      <Container fluid className="p-0 position-relative"> 
            <img
                id="headerImg"
                src="https://images.unsplash.com/photo-1541976590-713941681591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
             />
            <div id="headerText">
                <h1>Select Mandor</h1>
            </div>
      </Container>
      <Container>
          
          <h1 className="my-5 text-secondary"><span id="highlight">Mandor</span> yang tersedia di lokasi anda</h1>
          <Row>
            <Col className="d-flex flex-row justify-content-center">
            <Row className="w-100">
              {!!filteredMandor.data &&
                filteredMandor.data.map((items) => (
                
                    <Col className=" text-start m-3" id="listMandor" xs={12}>
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
                              <h2 className="text-capitalize">{items.mandorName}</h2>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                  </svg>
                                  <span className="text-secondary">{items.lokasi} </span> 
                            </Col>
                          </Row>
                        </Col>
                        <Col className=" align-self-end text-end p-3">
                          <Button variant="primary" onClick={()=>{triggerMandorDetails(items)}} >Lihat Profil Mandor</Button>
                          <Button id="bg-highlight3" onClick={()=>{mandorSelected(items._id)}}  className="ms-3 border border-none">Pilih</Button>
                        </Col>
                      </Row>
                    </Col>
                ))
              }

               {/* Triggering View Mandor Details Modal from component */}
               {modalViewMandorDetails ?
                <ModalViewMandor 
                    setModalViewMandorDetails={setModalViewMandorDetails}
                /> 
                : <></>
               } 

                </Row>
            </Col>
          </Row>
      

      </Container>
    </div>
  );
}

export default SelectMandor;
