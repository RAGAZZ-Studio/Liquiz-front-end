import {Navbar, Container, Nav} from "react-bootstrap"
import logo from '../assets/img/LiquizLogo.png'
import Image from 'react-bootstrap/Image'

const NavigationBar = () => {
  return(
      <Container>
        <Nav className="NavigationBar justify-content-center ">
          <Nav.Link className="text-center text-white navlink" href="/">Home</Nav.Link>
          <Nav.Link className="text-center text-white navlink" href="/leaderboard">Leaderboard</Nav.Link>
          <Nav.Link>
            <Image
            src={logo}
            height="37"
            className="d-inline-block align-top rounded mx-auto d-block Navlogo"
            alt="Liquiz Logo"
            />
          </Nav.Link>
          <Nav.Link className="text-center text-white navlink" href="/shop">Coin Shop</Nav.Link>
          <Nav.Link className="text-center text-white navlink" href="/login">Login/Register</Nav.Link>
        </Nav>
      </Container>
  )
}

export default NavigationBar