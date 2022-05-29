import {Navbar, Container, Nav} from "react-bootstrap"
import logo from '../assets/img/LiquizLogo.png'
<<<<<<< HEAD
import Image from 'react-bootstrap/Image'
=======
>>>>>>> 805420f630bf27e0a2b7d4bfe1b4344a39e1efa2

const NavigationBar = () => {
  return(
      <Container>
        <Nav className="NavigationBar justify-content-center ">
          <Nav.Link className="text-center text-white navlink" href="/">Home</Nav.Link>
          <Nav.Link className="text-center text-white navlink">Leaderboard</Nav.Link>
          <Nav.Link>
<<<<<<< HEAD
            <Image
=======
            <img
>>>>>>> 805420f630bf27e0a2b7d4bfe1b4344a39e1efa2
            src={logo}
            height="37"
            className="d-inline-block align-top rounded mx-auto d-block Navlogo"
            alt="Liquiz Logo"
            />
          </Nav.Link>
          <Navbar.Text className="navlink" >CoinShop</Navbar.Text>
          <Nav.Link className="text-center text-white navlink" href="/login">Login/Register</Nav.Link>
        </Nav>
      </Container>
  )
}

export default NavigationBar