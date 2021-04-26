import '../App.css';
import Cart from './Cart';
import { useEffect, useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {getDashboardUser,deleteProjectUser,deleteJasaUser} from '../redux/actions/dashboardUser.action';
import {getNegoUserAction} from '../redux/actions/nego.action'
import ReviewModal from '../components/ReviewModal'
import ModalNego from '../components/ModalNego'
import {Container , Table ,  Row , Col , Button} from 'react-bootstrap'; 
import emblem from '../components/asset/logo-adamandor-plain.png'

function DashboardUser() {

    const dispatch = useDispatch()
    const dashboardData = useSelector(state => state.DashboardUser)
    console.log(dashboardData)
    const negoUser = useSelector(state => state.Nego)

    useEffect(() => {
        dispatch(getDashboardUser(localStorage.getItem("id")))
    }, [dispatch])

    useEffect(() => {
        dispatch(getNegoUserAction())
    }, [dispatch])

    const handleDelete = (event) => {
        dispatch(deleteProjectUser(event))
        dispatch(deleteJasaUser(event))
    } 

    const [modalShow, setModalShow] = useState(false)

    const closeModal = () => {
      setModalShow(false)
    }


    return (
        <div className="h-75">
            <Container fluid>
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
                                        {dashboardData.data.status!=="Accepted" ? <th>Budget</th> : <></>} 
                                    </tr>
                                </thead>
                                <tbody>
                                    {dashboardData.data.jasa ? 
                                        <tr>
                                            <td>{dashboardData.data.status}</td>
                                            <td>{dashboardData.data.jasa.category}</td>
                                            <td>{dashboardData.data.jasa.lokasiProyek}</td>
                                            <td>{dashboardData.data.mandor.mandorName}</td>
                                            {dashboardData.data.status!=="Accepted" ? <td>{dashboardData.data.jasa.budgetUser}</td> : <></>}    
                                        </tr>
                                    : <></>}
                                </tbody>
                            </Table>
                            <h1>Catatan Negosiasi</h1>
                                    {!!negoUser.data && 
                                        negoUser.data.map((items)=> (
                                        <div>
                                        <h5>Biaya Nego</h5>
                                        <p>Rp. {items.budget},-</p>
                                        <h5>Alasan Nego</h5>
                                        <p>{items.catatanNego}</p>
                                        </div>
                                        ))}
                        </Col>
                        {dashboardData.data.status=="Booking"  ?
                            <Col className="align-self-center" xs={1}>
                                <Button variant="danger" onClick={handleDelete}>Batalkan</Button>    
                            </Col>
                            : dashboardData.data.status=="Negotiation" ? <Col className="align-self-center" xs={1}>
                            <Button variant="warning" onClick={()=>setModalShow(true)}>Negosiasi</Button>
                            <ModalNego
                            show={modalShow}
                            onHide={closeModal}
                            />
                            <Button variant="danger" onClick={handleDelete}>Batalkan</Button>    
                        </Col> 
                        : negoUser.length > 3 ? <Button variant="danger" onClick={handleDelete}>Batalkan</Button> 
                        : <></>} 
                    </Row> 
                </> 
                    : <h1 className="my-5 text-secondary">Dashboard anda kosong</h1> }
                
                { dashboardData.data ? 
                
                
                
                        dashboardData.data.status=="Accepted" || dashboardData.data.status=="Paid"  ?
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
                        : dashboardData.data.status=="Finished" ?
                        <div> 
                        <h1>Review Mandor</h1>
                        <ReviewModal
                        show={modalShow}
                        onHide={closeModal}
                        />
                        <Button variant="primary" onClick={()=>setModalShow(true)}>Review</Button>
                        </div>  
                            : <Row>
                                <Col className="mt-5 pt-5" xs={12}>
                                    <img 
                                        src={emblem}
                                        id="emblemDashboard"
                                    />
                                </Col>
                                <Col>
                                    <h3 className="text-secondary">Silahkan Menunggu, Mandor akan menghubungi anda secepat mungkin</h3>
                                </Col>
                            </Row>
                    : <></> 
                }

            </Container>

        </div>
    )
}

export default DashboardUser
