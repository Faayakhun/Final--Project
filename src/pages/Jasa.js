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
                <h1>Form Jasa</h1>
                <Form className="text-start w-25 align-self-center border border-secondary p-3 mt-3">
                    <div className="form-group text-left">
                    <Form.Label>Tentukan Kategori</Form.Label>
                    <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" >
                                        {category}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={hitCategory}>Renovasi</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitCategory}>Perbaikan</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitCategory}>Pemasangan</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitCategory}>Pembangunan</Dropdown.Item>
                                    </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Tentukan Jenis Properti</Form.Label>
                    <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" >
                                        {properti}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={hitProperti}>Rumah</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitProperti}>Ruko</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitProperti}>Apartemen</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitProperti}>Gedung</Dropdown.Item>
                                    </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Lingkup Pekerjaan</Form.Label>
                    <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" >
                                        {area}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={hitArea}>1 Ruangan</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitArea}>2-3 Ruangan</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitArea}>5-7 Ruangan</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" onClick={hitArea}>Lebih banyak dari 7 ruangan</Dropdown.Item>
                                    </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Perkiraan Luas Pekerjaan(m2)</Form.Label>
                    <Form.Control 
                        type="text"
                        name="luas"
                        value={jasa.luasAreaPekerjaan}
                        placeholder="masukan perkiraan luas pekerjaan"
                        onChange={trackLuas}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Deskripsi Pekerjaan</Form.Label>
                    <Form.Control 
                        type="text"
                        name="deskripsi"
                        value={jasa.catatan}
                        placeholder="masukan detail pekerjaan"
                        onChange={trackNotes}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Berapa lama anda ingin pekerjaan ini selesai?</Form.Label>
                    <Form.Control 
                        type="text"
                        name="durasi"
                        value={jasa.durasiPekerjaan}
                        placeholder="masukan durasi pekerjaan"
                        onChange={trackDurasi}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Dimana Lokasi Anda</Form.Label>
                    <Dropdown className="mt-2">
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" >
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
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Alamat Lokasi Proyek</Form.Label>
                    <Form.Control 
                        type="text"
                        name="alamat"
                        value={jasa.alamatProyek}
                        placeholder="masukan alamat lokasi pekerjaan"
                        onChange={trackAlamat}
                    />
                    </div>
                    <div className="form-group text-left">
                    <Form.Label>Perkiraan Budget Anda</Form.Label>
                    <Form.Control 
                        type="number"
                        name="budget"
                        value={jasa.budgetUser}
                        placeholder="masukan perkiraan budget pekerjaan"
                        onChange={trackBiaya}
                    />
                    </div>
                    <div className="form-check">
                    </div>
                    <button className = "btn btn-primary w-100">Cari Sekarang</button>
                </Form>
            </Container>
        </div>
    )
}

export default Jasa
