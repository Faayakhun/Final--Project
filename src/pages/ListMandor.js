import React, { useEffect, useState } from "react";
import { Button, Card} from "react-bootstrap";
import axios from "axios";
import ModalServiceForm from "../components/ModalServiceForm";

function ListMandor() {
  const [mandor, setMandor] = useState("");
  const [modalServiceForm, setModalServiceForm] = useState(false);
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

  const dataMandor = mandor;
  console.log(dataMandor);

  return (
    <div>
        <h1>List Mandor</h1>
        {!!dataMandor &&
          dataMandor.map((items) => (
            <Card border='primary' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h4>Nama Mandor: {items.mandorName}</h4></Card.Title>
              <Card.Text>
                <p>Nama Tukang: {items.tukangName}</p>
                <p>Lokasi: {items.lokasi}</p>
                <p>Nomor Telepon: {items.nomorTelpon}</p>
                <p>Estimasi Harga: {items.estHarga}</p>
              </Card.Text>
              <Button variant="outline-dark" onClick={()=>{triggerModal(items._id)}}>Pilih</Button>
            </Card.Body>
          </Card>
          ))}

        {/* Triggering Modal from component */}
        {modalServiceForm ?
         <ModalServiceForm 
            setModalServiceForm={setModalServiceForm}
            mandorID={selectedMandorID}
          /> 
         : <></>} 
      


    </div>
  );
}

export default ListMandor;
