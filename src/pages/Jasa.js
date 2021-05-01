import '../App.css';
import {useState} from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom"
import {Container ,Form, Row , Col , Button, Dropdown} from 'react-bootstrap'

function Jasa(param) {
    const userLoggedIn = useSelector((state)=>state.user.isUserLogin)
    const history = useHistory();
    const [category,setCategory] = useState("Pilih Kategori")
    const [notes, setNotes] = useState("")
    const [area,setArea] = useState("Pilih Lingkup Pekerjaan")
    const [properti,setProperti] = useState("Pilih Jenis Properti")
    const [luas, setLuas] = useState(0)
    const [durasi,setDurasi] = useState("")
    const [lokasi,setLokasi] = useState("Provinsi")
    const [alamat, setAlamat] = useState("")
    const [biaya, setBiaya] = useState(0)

    let jasa = {
        category: category,
        catatan: notes,
        areaPekerjaan: area,
        jenisProperti: properti,
        lokasiProyek: lokasi,
        alamatProyek: alamat,
        luasAreaPekerjaan: luas,
        durasiPekerjaan: durasi,
        budgetUser: biaya,
        user: localStorage.getItem("id")
    }
    function hitCategory (param){
        setCategory(param.target.innerHTML)
    }
    function hitProperti (param){
        setProperti(param.target.innerHTML)
    }
    function hitArea (param){
        setArea(param.target.innerHTML)
    }
    function trackLuas (param){
        setLuas(param.target.value)
    }
    function trackNotes (param){
        setNotes(param.target.value)
    }
    function trackDurasi (param){
        setDurasi(param.target.value)
    }
    function hitLokasi (param){
        setLokasi(param.target.innerHTML)
    }
    function trackAlamat (param){
        setAlamat(param.target.value)
    }
    function trackBiaya (param){
        setBiaya(param.target.value)
    }


    function hit(){
        if (userLoggedIn) {
            param.setTemporaryForm(jasa)
            history.push("/selectmandor")
        } else {
            alert("anda harus login sebagai user dulu")
            history.push("/loginuser")
        }
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
                        <h1>Service</h1>
                    </div>
            </Container>
            <Container  className="mt-5 d-flex flex-column justify-content-center mb-5">
                <h1 className="mb-5" id="customText">Silahkan Mengisi Form Berikut</h1>
                    <Row className="mt-3" id="customText">
                        <Col>
                        </Col>
                        <Col className="d-flex flex-column align-items-end" lg={4}>
                            <Form className="text-start w-100" >
                                <Form.Label>Tentukan Kategori</Form.Label>
                                <Dropdown>
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 text-start border border-secondary mb-4" >
                                                    {category}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1" onClick={hitCategory}>Renovasi</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitCategory}>Perbaikan</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitCategory}>Pemasangan</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitCategory}>Pembangunan</Dropdown.Item>
                                                </Dropdown.Menu>
                                </Dropdown>
                                <Form.Label>Tentukan Jenis Properti</Form.Label>
                                <Dropdown className="mt-2">
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 text-start border border-secondary mb-5" >
                                                    {properti}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1" onClick={hitProperti}>Rumah</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitProperti}>Ruko</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitProperti}>Apartemen</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitProperti}>Gedung</Dropdown.Item>
                                                </Dropdown.Menu>
                                </Dropdown>
                                <Form.Label>Lingkup Pekerjaan</Form.Label>
                                <Dropdown className="mt-2">
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 text-start border border-secondary mb-4" >
                                                    {area}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1" onClick={hitArea}>1 Ruangan</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitArea}>2-3 Ruangan</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitArea}>5-7 Ruangan</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitArea}>Lebih banyak dari 7 ruangan</Dropdown.Item>
                                                </Dropdown.Menu>
                                </Dropdown>
                                <Form.Label>Perkiraan Luas Pekerjaan(m2)</Form.Label>
                                <Form.Control 
                                    type="number"
                                    name="luas"
                                    value={jasa.luasAreaPekerjaan}
                                    className="w-100 mb-4"
                                    placeholder="masukkan perkiraan luas pekerjaan"
                                    onChange={trackLuas}
                                />
                                <Form.Label>Deskripsi Pekerjaan dan Tanggal Mulai</Form.Label>
                                <Form.Control 
                                    type="text"
                                    as="textarea"
                                    name="deskripsi"
                                    value={jasa.catatan}
                                    className="w-100 mb-4"
                                    placeholder="masukkan detail pekerjaan"
                                    onChange={trackNotes}
                                />
                            </Form>
                        </Col>
                        <Col className="d-flex flex-column justify-content-between" lg={4} >
                            <Form className="text-start w-100">
                                <Form.Label className="">Berapa lama anda ingin pekerjaan ini selesai?</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="durasi"
                                    value={jasa.durasiPekerjaan}
                                    className="w-100 mb-4"
                                    placeholder="masukkan durasi pekerjaan"
                                    onChange={trackDurasi}
                                />
                                
                                <Form.Label>Dimana Lokasi Anda?</Form.Label>
                                <Dropdown className="mt-2">
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 text-start border border-secondary mb-4" >
                                                    {lokasi}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Jakarta</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Bogor</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Depok</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Tangerang</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-1" onClick={hitLokasi}>Bekasi</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                
                                <Form.Label className="pt-2">Alamat Lokasi Proyek</Form.Label>
                                <Form.Control 
                                    type="text"
                                    as="textarea"
                                    name="alamat"
                                    value={jasa.alamatProyek}
                                    className="w-100 mb-4"
                                    placeholder="masukkan alamat lokasi pekerjaan"
                                    onChange={trackAlamat}
                                />
                            
                                <Form.Label >Berapa Budget Anda?</Form.Label>
                                <Form.Control 
                                    type="number"
                                    name="budget"
                                    value={jasa.budgetUser}
                                    className="w-100"
                                    placeholder="maksukan perkiraan budget pekerjaan"
                                    onChange={trackBiaya}
                                />
                            </Form>
                            <Row className="ms-1 mt-5 text-center text-lg-start">
                                <Col className="p-0">
                                    <Button className = "w-50 border border-none mt-lg-0 mb-4" id="bg-highlight3" onClick={()=>{hit()}}>Cari Sekarang</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Jasa
