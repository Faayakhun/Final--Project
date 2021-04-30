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
    const [triggerModalNego, setTriggerModalNego] = useState(false)

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
        <div>
            <Container fluid className="p-0 position-relative"> 
                <img
                    alt=""
                    id="headerImg"
                    src="https://images.unsplash.com/photo-1541976590-713941681591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                />
                <div id="headerText">
                    <h1>Project</h1>
                </div>
             </Container>
            <Container fluid className="mt-5">
                
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
                                                        <th>Durasi (hari)</th>
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
                                        <Col className="text-start ps-5 ps-lg-0" xs={12} lg={4}>
                                            <h5>Lokasi Proyek: <span className="text-secondary">{mandorProject.data.jasa.lokasiProyek}</span>  </h5>
                                            <h5>Alamat Proyek: <span className="text-secondary">{mandorProject.data.jasa.alamatProyek}</span> </h5>
                                        </Col>
                                        <Col xs={3}>
                                        </Col>
                                        <Col className="text-start ps-5 ps-lg-5 mt-3 mt-lg-0"  xs={12} lg={3}>
                                            <h5>Catatan Client </h5>
                                            <h5 className="text-secondary">{mandorProject.data.jasa.catatan}</h5>
                                        </Col>
                                    </Row>
                                                
                                     {mandorProject.data.status==="Negotiation"  && mandorProject.data.negoBy==="mandor" ? 
                                        <Row className="mt-5 d-flex flex-row justify-content-center p-3">
                                            <Col xs={10}>
                                                <h3 className="text-secondary">Silahkan menunggu konfirmasi dari client</h3>
                                            </Col>
                                        </Row>
                                    : null
                                    }

                                    {mandorProject.data.status==="Accepted" ? 
                                        <Row className="mt-5 d-flex flex-row justify-content-center bg-secondary p-3">
                                            <Col xs={10}>
                                                <h3 className="text-white">Project sudah dikonfirmasi, silahkan menunggu client menyelesaikan pembayarannya</h3>
                                            </Col>
                                        </Row>
                                    : <></>
                                    }

                                     {mandorProject.data.status==="Paid" ? 
                                        <Row className="mt-5 d-flex flex-row justify-content-center p-3">
                                        <Col xs={10}>
                                            <h3 className="">Pembayaran berhasil dikonfirmasi</h3>
                                        </Col>
                                        </Row>
                                    : <></>
                                    }


                                </Col>
                            </Row>
                            
                                { negoMandor.data.length >= 4 ? 
                                    <Row className="d-flex flex-row justify-content-center mt-3">
                                    <Col className="text-end p-0" xs={10}>
                                        <Button variant="primary" onClick={()=>{hitModerate(mandorProject.data._id)}} className={mandorProject.data.negoBy==="mandor" ? "disabled" : ""}  >Terima Project</Button>
                                        <Button variant="danger" className="ms-3" onClick={handleDelete} >Tolak Project</Button>
                                    </Col>
                                    </Row>
                                :    mandorProject.data.status==="Booking" || mandorProject.data.status==="Negotiation"  ? 
                                
                                        <Row className="d-flex flex-row justify-content-center mt-2 mt-lg-3">
                                            <Col className="text-center text-lg-end p-0" xs={12} lg={10}>
                                                <Button variant="warning" onClick={()=>setTriggerModalNego(true)} className={mandorProject.data.negoBy==="mandor" ? "disabled mx-3" : "mx-3"}>Negosiasi</Button>
                                                <Button className="border border-none" id="bg-highlight3" onClick={()=>{hitModerate(mandorProject.data._id)}} className={mandorProject.data.negoBy==="mandor" ? "disabled" : ""} >Terima Project</Button>
                                                <Button variant="dark" className="ms-3" onClick={handleDelete} >Tolak Project</Button>
                                            </Col>
                                        </Row>
                                    :   <></> 
                                } 

                                {mandorProject.data.status==="Paid" ? 
                                
                                    <Row className="d-flex flex-row justify-content-center mt-3">
                                        <Col className="text-end p-0" xs={10}>
                                            <Button variant="dark" onClick={()=>{setTriggerViewUser(true)}} >Lihat Info Client</Button>
                                        <Button variant="" className="border border-none ms-3" id="bg-highlight3" onClick={()=>{hitFinish(mandorProject.data._id)}} >Project Selesai</Button>
                                        </Col>
                                    </Row>
                                 :  <></>
                                } 
                        </>
                            : null

                    : <h1 className="my-5 text-secondary">Belum ada project untuk anda saat ini</h1>
                  
                }

            {/* Triggering View User Modal from component */}
            {triggerViewUser ?
              <ModalViewUser 
                  setTriggerViewUser={setTriggerViewUser}
                  userID={mandorProject.data.user._id}
              /> 
              : <></>
            } 

            {/* Triggering Negotiation Modal from component */}
            {triggerModalNego ? 
                <ModalNego
                    setTriggerModalNego={setTriggerModalNego}
                    negoData={negoMandor.data}
                    biayaProyek={mandorProject.data.jasa.budgetUser}
                />
            : null
            }   


            </Container>
        </div>
    )
}

export default DashboardMandor
