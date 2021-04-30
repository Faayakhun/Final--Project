import '../App.css';
import {useState} from 'react';
import { useSelector,useDispatch } from "react-redux";
import {Link,useHistory} from 'react-router-dom';
import {Navbar , Nav} from 'react-bootstrap';  
import LoginModal from './LoginModal'
import {handleLogoutUser} from '../redux/actions/user.action'
import {handleLogoutMandor} from '../redux/actions/mandor.action'
import {handleLogoutVendor} from '../redux/actions/vendor.actions'

function Navigation() {

  const dispatch = useDispatch()
  const history = useHistory()

  const userLoggedIn = useSelector((state)=>state.user.isUserLogin)
  const mandorLoggedIn = useSelector((state)=>state.mandor.isMandorLogin)
  const vendorLoggedIn = useSelector((state)=>state.vendor.isLoggedIn)
  
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
            ada<span id="highlight">mandor</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto d-flex flex-lg-row w-100" id="hoverlight">
              <Link to = "/" className="nav-link">Home</Link>
              {mandorLoggedIn ? <></> : <Link to = "/service" className="nav-link">Service</Link>}
              {userLoggedIn ?  <Link to = "/dashboard" className="nav-link">Dashboard</Link> : <></>}
              {mandorLoggedIn ?  <Link to = "/dashboardmandor" className="nav-link">Project</Link> : <></>}
            
              <Link to = "/" className="nav-link">About</Link>
              <Link to = "/contact" className="nav-link">Contact</Link>
            
              </Nav>
              <Nav className="mr-auto d-flex flex-lg-row">
              {userLoggedIn ? <Link to = "/profileuser" className="nav-link">Profile</Link> : mandorLoggedIn ? <Link to = "/profilemandor" className="nav-link">Profile</Link> : vendorLoggedIn ? <Link to = "/profilevendor" className="nav-link"  >Profile</Link>  : <Link to = "/register" className="nav-link">Register</Link>}
              
              {userLoggedIn || mandorLoggedIn || vendorLoggedIn ?<a href="/#" onClick={submitLogout} className="nav-link">Logout</a> : <a href="/#" onClick={()=>setModalShow(true)} className="nav-link">Login</a> }
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
