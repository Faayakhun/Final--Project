import '../App.css';
import Cart from './Cart';
import { useEffect, useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {getDashboardUser} from '../redux/actions/dashboardUser.action';
import {Container , Table ,  Row , Col , Button} from 'react-bootstrap'; 
import emblem from '../components/asset/logo-adamandor-plain.png'

function DashboardUser() {

    const dispatch = useDispatch()
    const dashboardData = useSelector(state => state.DashboardUser)

    useEffect(() => {
        dispatch(getDashboardUser(localStorage.getItem("id")))
    }, [dispatch])


    return (
        <div className="h-75">
            <Container fluid>
                <h1 className="my-5">Dashboard</h1>
                <Row className="mb-5 d-flex flex-row justify-content-center">
                    <Col xs={8}>
                        <Table bordered>
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th>Status</th>
                                    <th>Kategori Pekerjaan</th>
                                    <th>Lokasi Pekerjaan</th>
                                    <th>Mandor</th>
                                    <th>Budget</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dashboardData.data.jasa && 
                                    <tr>
                                        <td>{dashboardData.data.status}</td>
                                        <td>{dashboardData.data.jasa.category}</td>
                                        <td>{dashboardData.data.jasa.lokasiProyek}</td>
                                        <td>{dashboardData.data.mandor.mandorName}</td>
                                        <td>{dashboardData.data.jasa.budgetUser}</td>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="align-self-center" xs={1}>
                        <Button variant="danger">Batalkan</Button>
                    </Col>
                </Row>


                {/* Akan diberikan ternery untuk switch antara waiting state dan displaying cart */}

                <Row>
                    <Col className="mt-5 pt-5" xs={12}>
                        <img 
                            src={emblem}
                            className=""
                            id="emblemDashboard"
                        />
                    </Col>
                    <Col>
                        <h3 className="text-secondary">Silahkan Menunggu, Mandor akan menghubungi anda secepat mungkin</h3>
                    </Col>
                </Row>
                    
                {/* <Row className="d-flex flex-row justify-content-center">
                    <Col xs={9}>
                        <Cart/>
                    </Col>
                </Row> */}
            </Container>

        </div>
    )
}

export default DashboardUser