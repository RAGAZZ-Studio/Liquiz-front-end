import { Container  } from "react-bootstrap"
import logo from '../assets/img/LiquizLogo.png'
import { Card } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../style/profile.css'
import profile from '../assets/img/avatarDefault.png'

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
                        <Card className="cardAvatar">
                            <Card.Title className="avatarTittle justify -content-center">Avatar</Card.Title>
                            <Card.Img variant="top" src={profile} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="profileCard">
                            <Card.Body>
                                <Card.Title className="profileTittle">Profile Info</Card.Title>
                                <Card.Text>
                                    <Col>Username: {localStorage.getItem('username')}</Col>
                                    <Col>Skor Tertinggi: 8</Col>
                                    <Col>Jumlah koin yang dimiliki: 5 koin</Col>
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