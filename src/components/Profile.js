import { Container } from "react-bootstrap"
import logo from '../assets/img/LiquizLogo.png'
import { Card } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Profile() {
    const Token = localStorage.getItem('token')
    if (Token == null) {
        alert("Silahkan masuk terlebih dahulu!")
        window.location.href = "/login"
    }
    else {
        return (
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Profile</Card.Title>
                                <Card.Text>
                                    <Col>Username: {localStorage.getItem('username')}</Col>
                                    <Col>Skor Tertinggi: 5/5</Col>
                                    <Col>Jumlah koin yang dimiliki: 100 koin</Col>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
        )
    }

}

export default Profile