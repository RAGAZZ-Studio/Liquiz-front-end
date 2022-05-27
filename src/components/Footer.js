import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import logo from '../assets/img/LiquizLogo.png'

const Footer = () => {
  return(
    <div className="footer">
      <Container className="footerCont">
        <Row>
          <Col className="colFooterR">
            <Image rounded
              src={logo}
              height="45"
              className="footerImg"
              alt="Liquiz Logo"
              />
              <br></br>
              The World most fun language learning platform 
              <br></br> 
              © 2020
              <br></br>
              Find Us on : 
          </Col>
          <Col className="colFooter">
            <br></br>
            Home<br></br>
            Leaderboard<br></br>
            Coinshop<br></br>
          </Col>
        </Row>
      </Container>
      <div className="closingFooter"></div>
    </div>
  );
}

export default Footer