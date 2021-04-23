import { useEffect, useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {getMandorProject,deleteProjectMandor,deleteJasaMandor} from '../redux/actions/mandorProject.action';
import {Container , Table ,  Row , Col , Button} from 'react-bootstrap'; 

function DashboardMandor() {

    const dispatch = useDispatch()
    const dashboardData = useSelector(state => state.DashboardUser)
    const mandorProject = useSelector(state => state.MandorProject)

    console.log("mandor project adalah " ,mandorProject.data)
    useEffect(() => {
       dispatch(getMandorProject(localStorage.getItem("id")))
    }, [dispatch])

    const handleDelete = (event) => {
        dispatch(deleteProjectMandor(event,localStorage.getItem("id")))
        dispatch(deleteJasaMandor(event,localStorage.getItem("id")))
    } 

    return (
        <div className="body-content">
            <Container fluid>
                
                {mandorProject.data ? 

                    mandorProject.data.user ?
                        <>
                            <Row className="d-flex flex-row justify-content-center">
                                <Col className="p-0 text-start" xs={10}>
                                    <h4 className="text-secondary">Anda mendapat project baru</h4>
                                </Col>
                            </Row>
                            <Row className="d-flex flex-row justify-content-center">
                                <Col className="border border-secondary py-5" xs={10}>
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
                                                        <th>Target Durasi</th>
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
                                </Col>
                            </Row>
                            <Row className="d-flex flex-row justify-content-center mt-3">
                                <Col className="text-end p-0" xs={10}>
                                    <Button variant="primary">Terima dan Hubungi Client</Button>
                                    <Button onClick={handleDelete} variant="danger" className="ms-3">Tolak Project</Button>
                                </Col>
                            </Row>
                        </>
                            : null

                    : <h1 className="my-5 text-secondary">Belum ada proyek untuk anda saat ini</h1>
                  
                }

                {/* <h1 className="my-5 text-secondary">Belum ada proyek untuk anda saat ini</h1> */}

            </Container>
        </div>
    )
}

export default DashboardMandor
