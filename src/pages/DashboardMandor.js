import { useEffect, useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import ModalViewUser from '../components/ModalViewUser';
import ModalNego from '../components/ModalNego'
import {getMandorProject,deleteProjectMandor,deleteJasaMandor,MandorModerateProject,MandorFinishProject} from '../redux/actions/mandorProject.action';
import {getNegoProjectAction} from '../redux/actions/nego.action'
import {Container , Table ,  Row , Col , Button} from 'react-bootstrap'; 

function DashboardMandor() {

    const dispatch = useDispatch()
    const mandorProject = useSelector(state => state.MandorProject)
    const negoMandor = useSelector(state => state.Nego)
    const [triggerViewUser, setTriggerViewUser] = useState(false)
    const [modalShow, setModalShow] = useState(false)

    const closeModal = () => {
      setModalShow(false)
    }

    function hitModerate (projectID){
        dispatch(MandorModerateProject(projectID,localStorage.getItem("mandorId")))
    }

    function hitFinish (projectID){
        dispatch(MandorFinishProject(projectID,localStorage.getItem("mandorId")))
    }


    useEffect(() => {
       dispatch(getMandorProject(localStorage.getItem("mandorId")))
    }, [dispatch])

    useEffect(() => {
        dispatch(getNegoProjectAction(localStorage.getItem("projectId")))
     }, [dispatch])

    const handleDelete = (event) => {
        dispatch(deleteProjectMandor(event,localStorage.getItem("mandorId")))
        dispatch(deleteJasaMandor(event,localStorage.getItem("mandorId")))
    } 

    return (
        <div className="body-content">
            <Container fluid>
                
                {mandorProject.data ? 

                    mandorProject.data.user ?
                        <>
                            <Row className="d-flex flex-row justify-content-center">
                                {mandorProject.data.status==="Booking" ? 
                                    <Col className="p-0 text-start" xs={10}>
                                        <h4 className="text-secondary">Anda mendapat project baru</h4>
                                    </Col>
                                :   <Col className="p-0 text-start" xs={10}>
                                        <h4 className="text-secondary">Project Anda</h4>
                                    </Col>
                                }
                            </Row>
                            <Row className="d-flex flex-row justify-content-center">
                                <Col className="border border-secondary pt-5" xs={10}>
                                    <Row className="text-start d-flex flex-row justify-content-center">
                                        <Col xs={10}>
                                            <Table >
                                                <thead >
                                                    <tr>
                                                
                                                        <th>Nama Client</th>
                                                        <th>Kategori</th>
                                                        <th>Tipe Properti</th>
                                                        <th>Lingkup Area</th>
                                                        <th>Luas Area</th>
                                                        <th>Target Durasi (hari)</th>
                                                        <th>Budget Client</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        <tr>
                                                            <td>{mandorProject.data.user.userName}</td>
                                                            <td>{mandorProject.data.jasa.category}</td>
                                                            <td>{mandorProject.data.jasa.jenisProperti}</td>
                                                            <td>{mandorProject.data.jasa.areaPekerjaan}</td>
                                                            <td>{mandorProject.data.jasa.luasAreaPekerjaan} m2</td>
                                                            <td>{mandorProject.data.jasa.durasiPekerjaan}</td>
                                                            <td>Rp {mandorProject.data.jasa.budgetUser},-</td>
                                                        </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex flex-row justify-content-center mt-5">
                                        <Col className="text-start" xs={4}>
                                            <h5>Lokasi Proyek: <span className="text-secondary">{mandorProject.data.jasa.lokasiProyek}</span>  </h5>
                                            <h5>Alamat Proyek: <span className="text-secondary">{mandorProject.data.jasa.alamatProyek}</span> </h5>
                                        </Col>
                                        <Col xs={3}>
                                        </Col>
                                        <Col className="text-start ps-5" xs={3}>
                                            <h5>Catatan Clients </h5>
                                            <h5 className="text-secondary">{mandorProject.data.jasa.catatan}</h5>
                                        </Col>
                                    </Row>
                                                
                                                {!!negoMandor.data && 
                                                    negoMandor.data.map((items)=> (
                                                <div>
                                                <h1>Catatan Negosiasi</h1>
                                                <h5>Biaya Nego</h5>
                                                <p>Rp. {items.budget},-</p>
                                                <h5>Alasan Nego</h5>
                                                <p>{items.catatanNego}</p>
                                                </div>
                                                ))}
                                                

                                    {mandorProject.data.status==="Accepted" ? 
                                        <Row className="mt-5 d-flex flex-row justify-content-center bg-secondary p-3">
                                            <Col xs={10}>
                                                <h3 className="text-white">Anda menerima project ini, silahkan menunggu client menyelesaikan pembayarannya</h3>
                                            </Col>
                                        </Row>
                                    : <></>
                                    }

                                     {mandorProject.data.status==="Paid" ? 
                                        <Row className="mt-5 d-flex flex-row justify-content-center bg-success p-3">
                                        <Col xs={10}>
                                            <h3 className="text-white">Pembayaran berhasil dikonfirmasi</h3>
                                        </Col>
                                        </Row>
                                    : <></>
                                    }


                                </Col>
                            </Row>
                                { negoMandor.data.length >= 3 ? 
                                <Row className="d-flex flex-row justify-content-center mt-3">
                                <Col className="text-end p-0" xs={10}>
                                    <Button variant="primary" onClick={()=>{hitModerate(mandorProject.data._id)}} >Terima Project</Button>
                                    <Button variant="danger" className="ms-3" onClick={handleDelete} >Tolak Project</Button>
                                </Col>
                            </Row>
                            :(mandorProject.data.status==="Booking" || mandorProject.data.status==="Negotiation") && mandorProject.data.negoBy==="user"  ? 
                                
                                    <Row className="d-flex flex-row justify-content-center mt-3">
                                        <Col className="text-end p-0" xs={10}>
                                            <Button variant="warning" onClick={()=>setModalShow(true)}>Negosiasi</Button>
                                                <ModalNego
                                                show={modalShow}
                                                onHide={closeModal}
                                                />
                                            <Button variant="primary" onClick={()=>{hitModerate(mandorProject.data._id)}} >Terima Project</Button>
                                            <Button variant="danger" className="ms-3" onClick={handleDelete} >Tolak Project</Button>
                                        </Col>
                                    </Row>
                                :   <></> } 

                                {mandorProject.data.status==="Paid" ? 
                                
                                <Row className="d-flex flex-row justify-content-center mt-3">
                                    <Col className="text-end p-0" xs={10}>
                                    <Button variant="primary" onClick={()=>{hitFinish(mandorProject.data._id)}} >Project Selesai</Button>
                                        <Button variant="dark" onClick={()=>{setTriggerViewUser(true)}} >Lihat Info Client</Button>
                                    </Col>
                                </Row>
                            :  <></>
                            } 
                        </>
                            : null

                    : <h1 className="my-5 text-secondary">Belum ada proyek untuk anda saat ini</h1>
                  
                }

            {/* Triggering View User Modal from component */}
            {triggerViewUser ?
              <ModalViewUser 
                  setTriggerViewUser={setTriggerViewUser}
              /> 
              : <></>
            } 


            </Container>
        </div>
    )
}

export default DashboardMandor
