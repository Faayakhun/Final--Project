import '../App.css';
import {useState} from 'react';
import { useSelector,useDispatch } from "react-redux";
import {Link,useHistory} from 'react-router-dom';
import {Navbar , Nav , Button} from 'react-bootstrap';  
import emblem from './asset/logo-adamandor-plain.png'
import LoginModal from './LoginModal'
import {handleLogoutUser} from '../redux/actions/user.action'
import {handleLogoutMandor} from '../redux/actions/mandor.action'
import {handleLogoutVendor} from '../redux/actions/vendor.actions'

function Navigation() {

  const dispatch = useDispatch()
  const history = useHistory()

  const userLoggedIn = useSelector((state)=>state.user.isUserLogin)
  console.log(userLoggedIn)
  const mandorLoggedIn = useSelector((state)=>state.mandor.isMandorLogin)
  console.log(mandorLoggedIn)
  const vendorLoggedIn = useSelector((state)=>state.vendor.isLoggedIn)
  console.log(vendorLoggedIn)
  
  const [modalShow, setModalShow] = useState(false)

  const closeModal = () => {
    setModalShow(false)
  }

  const submitLogout = () => {
    history.push('/')
    dispatch(handleLogoutUser())
    dispatch(handleLogoutMandor())
    dispatch(handleLogoutVendor())
  }

    return (
        <div>

        <Navbar className=" py-3" expand="lg" id="navbar">
          <Navbar.Brand href="/">
            {/* <div id="navbarEmblemFrame">
              <img src={emblem} id="navbarEmblem"/>
            </div> */}
            ada<span id="highlight">mandor</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto d-flex flex-lg-row w-100" id="hoverlight">
              <Link to = "/" className="nav-link">Home</Link>
              <Link to = "/service" className="nav-link">Service</Link>
              {userLoggedIn ?  <Link to = "/dashboard" className="nav-link">Dashboard</Link> : <></>}
              {mandorLoggedIn ?  <Link to = "/dashboardmandor" className="nav-link">Project</Link> : <></>}
            
              <Link to = "/" className="nav-link">About</Link>
              <Link to = "/contact" className="nav-link">Contact</Link>
            
              </Nav>
              <Nav className="mr-auto d-flex flex-lg-row w-110">
              {userLoggedIn ? <Link to = "/profileuser" >Profile</Link> : mandorLoggedIn ? <Link to = "/profilemandor">Profile</Link> : vendorLoggedIn ? <Link to = "/profilevendor">Profile</Link>  : <Link to = "/register" className="nav-link">Register</Link>}
              
              {userLoggedIn || mandorLoggedIn || vendorLoggedIn ?<Link onClick={submitLogout}>Logout</Link> : <Link onClick={()=>setModalShow(true)} className="nav-link">Login</Link> }
              <LoginModal
                show={modalShow}
                onHide={closeModal}
              />
              </Nav>
          </Navbar.Collapse>
        </Navbar>


        </div>
    )
}

export default Navigation
