import {Navbar, Container, Nav} from "react-bootstrap"
import logo from '../assets/img/LiquizLogo.png'

const NavigationBar = () => {
  return(
      <Container>
        <Nav className="NavigationBar justify-content-center ">
          <Nav.Link className="text-center text-white navlink">Home</Nav.Link>
          <Nav.Link className="text-center text-white navlink">Leaderboard</Nav.Link>
          <Nav.Link>
            <img
            src={logo}
            height="37"
            className="d-inline-block align-top rounded mx-auto d-block Navlogo"
            alt="Liquiz Logo"
            />
          </Nav.Link>
          <Navbar.Text className="navlink" >CoinShop</Navbar.Text>
          <Nav.Link className="text-center text-white navlink">Login/Register</Nav.Link>
        </Nav>
      </Container>
  )
}

export default NavigationBar