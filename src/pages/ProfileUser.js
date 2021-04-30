import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getUserByIdAction,uploadFotoAction} from '../redux/actions/user.action'
import {Container ,  Row , Col , Button , Form} from 'react-bootstrap';  


function ProfileUser() {
    const [fotoUser,setFotoUser] = useState("")
    const userById = useSelector((state)=>state.user.data)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getUserByIdAction())
    },[dispatch])
    return (
        <div>
            <Container fluid className="p-0 position-relative"> 
                <img
                    alt=""
                    id="headerImg"
                    src="https://images.unsplash.com/photo-1541976590-713941681591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                />
                <div id="headerText">
                    <h1>PROFILE</h1>
                </div>
            </Container>
            <Container className="my-5 pt-1 pt-lg-3" id="customText">
               
                <Row className="mt-3 mt-lg-5">
                    <Col className="text-lg-end" xs={12} lg={6}>
                        <img 
                            id="profileAvatar"
                            src={userById.fotoProfilUser} 
                        />
                    </Col>
                    <Col className="text-lg-start pt-3 mt-2 mt-lg-0">
                        <h1 className="text-capitalize display-5"> {userById.userName}</h1>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <span className="text-capitalize "> {userById.alamat}</span> 
                        </p>
                        <p className="text-secondary">{userById.email}</p>
                    </Col>
                </Row>
                <Row className="text-center text-lg-end mt-2 d-flex flex-row justify-content-center d-lg-block">
                    <Col xs={8} lg={7} className="ms-lg-5">
                        <Form>
                            <Form.File
                                id="fileInput"
                                onChange = { (event) => {setFotoUser(event.target.files[0])} }
                                custom
                            />
                        </Form>
                        
                    </Col>
                </Row>
                <Row className="text-lg-end mt-3 ms-lg-4">
                    <Col xs={12} lg={5} className="ms-lg-5  ">
                        <Button id="bg-highlight3" className={fotoUser ? "border border-none" : "disabled border border-none"} onClick={(event)=>dispatch(uploadFotoAction(fotoUser,event,setFotoUser))}>Upload Foto Profil</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfileUser
