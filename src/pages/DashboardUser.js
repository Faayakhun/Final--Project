import '../App.css';
import Cart from './Cart';
import { useEffect, useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {getDashboardUser,deleteProjectUser,deleteJasaUser,userModerateProjectAction} from '../redux/actions/dashboardUser.action';
import {getNegoProjectAction,deleteNegoAction} from '../redux/actions/nego.action'
import ReviewModal from '../components/ReviewModal'
import ModalNego from '../components/ModalNego'
import {Container , Table ,  Row , Col , Button} from 'react-bootstrap'; 
import emblem from '../components/asset/logo-adamandor-plain.png'



function DashboardUser() {

    const dispatch = useDispatch()
    const [triggerModalNego, setTriggerModalNego] = useState(false)
    const [triggerModalReview, setTriggerModalReview] = useState(false)
    const dashboardData = useSelector(state => state.DashboardUser)
    const negoUser = useSelector(state => state.Nego)

    console.log("CCC" ,dashboardData.data)

    function hitModerate (projectID){
        dispatch(userModerateProjectAction(projectID,localStorage.getItem("id")))
    }


    useEffect(() => {
        dispatch(getDashboardUser(localStorage.getItem("id")))
    }, [dispatch])

    useEffect(() => {
        dispatch(getNegoProjectAction(localStorage.getItem("projectId")))
    }, [dispatch])

    const handleDelete = (event) => {
        dispatch(deleteNegoAction(event,localStorage.getItem("projectId")))
        dispatch(deleteProjectUser(event))
        dispatch(deleteJasaUser(event,localStorage.getItem("id")))
    } 


    return (
        <div className="h-75">
            <Container fluid className="p-0 position-relative"> 
                <img
                    alt=""
                    id="headerImg"
                    src="https://images.unsplash.com/photo-1541976590-713941681591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                />
                <div id="headerText">
                    <h1>Dashboard</h1>
                </div>
             </Container>
            <Container fluid className="mt-5">
                {dashboardData.data ? 
                <> <h1 className="my-5">Dashboard</h1>
                    <Row className="mb-5 d-flex flex-row justify-content-center">
                        <Col xs={8}>
                            <Table bordered>
                                <thead className="bg-secondary text-white">
                                    <tr>
                                        <th>Status</th>
                                        <th>Kategori Pekerjaan</th>
                                        <th>Lokasi Pekerjaan</th>
                                        <th>Mandor</th>
                                        {dashboardData.data.status==="Booking" ? 
                                            <th>Anggaran</th> 
                                        :   dashboardData.data.status==="Negotiation" || dashboardData.data.status==="Accepted"  ?
                                                <th>Biaya Proyek</th>
                                            :   null
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {dashboardData.data.jasa ? 
                                        <tr>
                                            <td>{dashboardData.data.status}</td>
                                            <td>{dashboardData.data.jasa.category}</td>
                                            <td>{dashboardData.data.jasa.lokasiProyek}</td>
                                            <td>{dashboardData.data.mandor.mandorName}</td> 
                                            {dashboardData.data.status==="Booking" || dashboardData.data.status==="Negotiation" || dashboardData.data.status==="Accepted" ?
                                                <td>{dashboardData.data.jasa.budgetUser}</td>
                                            :   null
                                            }
                                        </tr>
                                    : <></>}
                                </tbody>
                            </Table>
                            
                                   
                        </Col>
                        
                        { dashboardData.data.status==="Booking"  ?
                            <Col className="align-self-center" xs={1}>
                                <Button variant="danger" onClick={handleDelete}>Batalkan</Button>    
                            </Col>
                            : !! negoUser.data && negoUser.data.length >= 4 ? <Button variant="danger" onClick={handleDelete}>Batalkan</Button> 
                            : dashboardData.data.status==="Negotiation" && dashboardData.data.negoBy==="mandor"  ?  
                                <Col className="align-self-center text-lg-end" xs={8}>
                                     <Button onClick={()=>{hitModerate(dashboardData.data._id)}}>Deal</Button>
                                    <Button variant="warning" onClick={()=>setTriggerModalNego(true)} className="mx-2" >Negosiasi</Button>
                                    <Button variant="danger" onClick={handleDelete}>Batalkan</Button>    
                                </Col> 
                                
                            :   <Col className={dashboardData.data.status==="Accepted" ? "d-none" : "align-self-center text-lg-end"} xs={8}>
                                {dashboardData.data.status==="Negotiation" ? 
                                    <>
                                        <Button disabled>Deal</Button>
                                        <Button variant="warning" className="mx-2" disabled>Negosiasi</Button>
                                        <Button variant="danger" disabled>Batalkan</Button>    
                                    </>
                                : null
                                }
                                </Col> 
                        } 

                    </Row> 
                </> 
                    : <h1 className="my-5 text-secondary">Dashboard anda kosong</h1> }
                
                { dashboardData.data ? 
               
                        dashboardData.data.status==="Accepted" || dashboardData.data.status==="Paid"  ?
                        <> 
                            <Row className="d-flex flex-row justify-content-center">
                                <Col xs={8}>
                                    <Cart
                                        projectID={dashboardData.data._id}
                                        projectAreaPekerjaan={ dashboardData.data.jasa.areaPekerjaan}
                                        projectLuasArea={ dashboardData.data.jasa.luasAreaPekerjaan}
                                        projectJenisProperti={ dashboardData.data.jasa.jenisProperti}
                                        projectLokasiProyek={ dashboardData.data.jasa.lokasiProyek}
                                        projectAlamatProyek={ dashboardData.data.jasa.alamatProyek}
                                        projectDurasiPekerjaan={ dashboardData.data.jasa.durasiPekerjaan}
                                        projectCatatan={ dashboardData.data.jasa.catatan}
                                        projectBiayaProyek={ dashboardData.data.jasa.budgetUser}
                                        projectStatus={dashboardData.data.status}
                                        
                                    />
                                </Col>
                            </Row>
                        </>
                        : dashboardData.data.status==="Finished" ?
                            <Row>
                                <Col xs={12}> 
                                    <h1>Project anda telah selesai, silahkan berikan review untuk <span id="highlight">mandor</span> </h1>
                                </Col>
                                <Col className="mt-3" xs={12}>
                                    <Button className="border border-none" id="bg-highlight3" onClick={()=>setTriggerModalReview(true)}>Review</Button>
                                </Col>
                            </Row>
                                   
                            
                            : <></>
                                  
                : <></> 
                }

                { dashboardData.data ? 
                    dashboardData.data && dashboardData.data.status==="Booking" ?
                        <Row>
                            <Col className="mt-5 pt-5" xs={12}>
                                <img 
                                    alt=""
                                    src={emblem}
                                    id="emblemDashboard"
                                />
                            </Col>
                            <Col>
                                <h3 className="text-secondary">Silahkan Menunggu, Mandor akan menghubungi anda secepat mungkin</h3>
                            </Col>
                        </Row>
                    : null
                : null
                }

                { dashboardData.data ? 
                    dashboardData.data.status==="Negotiation"  && dashboardData.data.negoBy==="user" ? 
                            <Row className="mt-5 d-flex flex-row justify-content-center p-3">
                                <Col xs={10}>
                                    <h3 className="text-secondary">Silahkan menunggu konfirmasi dari mandor</h3>
                                </Col>
                            </Row>
                    : null

                : null
                }

                {/* Triggering Negotiation Modal from component */}
                {triggerModalNego ? 
                    <ModalNego
                        setTriggerModalNego={setTriggerModalNego}
                        negoData={negoUser.data}
                        biayaProyek={dashboardData.data.jasa.budgetUser}
                    />
                : null
                }

                {/* Triggering Reviews Modal from component */}
                {triggerModalReview ? 
                    <ReviewModal
                        setTriggerModalReview={setTriggerModalReview}
                    />
                : null
                }

               

            </Container>

        </div>
    )
}

export default DashboardUser
