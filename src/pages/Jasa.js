import '../App.css';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Container ,Form, Row , Col , Button, Dropdown} from 'react-bootstrap'

function Jasa() {
    const dispatch = useDispatch()
    const [category,setCategory] = useState("Pilih Kategori")
    const [notes, setNotes] = useState("")
    const [area,setArea] = useState("Pilih Area Pekerjaan")
    const [properti,setProperti] = useState("Pilih Jenis Properti")
    const [luas, setLuas] = useState(0)
    const [durasi,setDurasi] = useState("")
    const [lokasi,setLokasi] = useState("Masukan Provinsi")
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
        budgetUser: biaya
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
    return (
        <div className="body-content">
            <Container className="d-flex flex-column align-content-center">
                <h1 className="mb-5">Service Form</h1>
                    <Row className="mt-5">
                        <Col className="d-flex flex-column align-items-end"  >
                            <Form className="text-start w-50">
                                <Form.Label>Tentukan Kategori</Form.Label>
                                <Dropdown>
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 text-start border border-secondary" >
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
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 text-start border border-secondary" >
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
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 text-start border border-secondary" >
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
                                    type="text"
                                    name="luas"
                                    value={jasa.luasAreaPekerjaan}
                                    className="w-100"
                                    placeholder="masukan perkiraan luas pekerjaan"
                                    onChange={trackLuas}
                                />
                                <Form.Label>Deskripsi Pekerjaan</Form.Label>
                                <Form.Control 
                                    type="text"
                                    as="textarea"
                                    name="deskripsi"
                                    value={jasa.catatan}
                                    className="w-100"
                                    placeholder="masukan detail pekerjaan"
                                    onChange={trackNotes}
                                />
                            </Form>
                        </Col>
                        <Col className="d-flex flex-column justify-content-between" >
                            <Form className="text-start w-75 ">
                                <Form.Label className="">Berapa lama anda ingin pekerjaan ini selesai?</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="durasi"
                                    value={jasa.durasiPekerjaan}
                                    className="w-75"
                                    placeholder="masukan durasi pekerjaan"
                                    onChange={trackDurasi}
                                />
                                
                                <Form.Label>Dimana Lokasi Anda</Form.Label>
                                <Dropdown className="mt-2">
                                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-75 text-start border border-secondary" >
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
                                
                                <Form.Label>Alamat Lokasi Proyek</Form.Label>
                                <Form.Control 
                                    type="text"
                                    as="textarea"
                                    name="alamat"
                                    value={jasa.alamatProyek}
                                    className="w-75"
                                    placeholder="masukan alamat lokasi pekerjaan"
                                    onChange={trackAlamat}
                                />
                            
                                <Form.Label>Perkiraan Budget Anda</Form.Label>
                                <Form.Control 
                                    type="number"
                                    name="budget"
                                    value={jasa.budgetUser}
                                    className="w-75"
                                    placeholder="masukan perkiraan budget pekerjaan"
                                    onChange={trackBiaya}
                                />
                            </Form>
                            <Button variant="primary" className = "w-25">Cari Sekarang</Button>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Jasa
