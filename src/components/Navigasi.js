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

  const userLoggedIn = useSelector((state)=>state.user.isLoggedIn)
  console.log(userLoggedIn)
  const mandorLoggedIn = useSelector((state)=>state.mandor.isLoggedIn)
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

        <Navbar bg="white" className="fixed-top py-0 position-relative" id="navbar">
        <Navbar.Brand href="#home">
          <div id="navbarEmblemFrame">
            <img src={emblem} id="navbarEmblem"/>
          </div>
        </Navbar.Brand>
          <Nav className="mr-auto d-flex flex-lg-row w-100">
          <Link to = "/" className="nav-link">Home</Link>
          <Link to = "/service" className="nav-link">Service</Link>
          {userLoggedIn ?  <Link to = "/dashboard" className="nav-link">Dashboard</Link> : <></>}
          {userLoggedIn ?  <Link to = "/dashboardmandor" className="nav-link">Dashboard-Mandor</Link> : <></>}
         
          <Link to = "/" className="nav-link">About</Link>
          <Link to = "/" className="nav-link">Articles</Link>
          <Link to = "/selectmandor" className="nav-link">Testimonial</Link>
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
        </Navbar>

        </div>
    )
}

export default Navigation
