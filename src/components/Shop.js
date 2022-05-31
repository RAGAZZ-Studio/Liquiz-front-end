import { Button, Container, Card, CardGroup, Col, Row, Image } from "react-bootstrap"
import coins from '../assets/img/coins.png'
import '../style/Shop.css'
import Avatar1 from '../assets/img/avatar1.jpg'
import Avatar2 from '../assets/img/avatar2.jpg'
import Avatar3 from '../assets/img/avatar3.jpg'
import Avatar4 from '../assets/img/avatar4.jpg'
import Avatar5 from '../assets/img/avatar5.jpg'
import specialAvatar from '../assets/img/specialAvatar.jpg'

function Shop() {
    const Token = localStorage.getItem('token')

    const shopList = [
        {
            itemName: '10 Koin',
            price: 'Rp 15000'
        },
        {
            itemName: '30 Koin',
            price: 'Rp 25000'
        },
        {
            itemName: '50 Koin',
            price: 'Rp 40000'
        },
        {
            itemName: '100 Koin',
            price: 'Rp 50000'
        },
        {
            itemName: '250 Koin',
            price: 'Rp 75000'
        },
        {
            itemName: '750 Koin',
            price: 'Rp 100000'
        },
    ];
    if (Token == null) {
        alert("Silahkan masuk terlebih dahulu!")
        window.location.href = "/login"
    }
    else {
        return (
            <Container>
                <br></br>
                <Row>
                    <Col>
                        <div className="coinCard">
                            {shopList[0].itemName}
                            <br></br>
                            <Image
                                src={coins}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">{shopList[0].price}</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="coinCard">
                            {shopList[1].itemName}
                            <br></br>
                            <Image
                                src={coins}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">{shopList[1].price}</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="coinCard">
                            {shopList[2].itemName}
                            <br></br>
                            <Image
                                src={coins}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">{shopList[2].price}</Button>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <Row className="mt-30">
                    <Col>
                        <div className="coinCard">
                            {shopList[3].itemName}
                            <br></br>
                            <Image
                                src={coins}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">{shopList[3].price}</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="coinCard">
                            {shopList[4].itemName}
                            <br></br>
                            <Image
                                src={coins}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">{shopList[4].price}</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="coinCard">
                            {shopList[5].itemName}
                            <br></br>
                            <Image
                                src={coins}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">{shopList[5].price}</Button>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <div className="coinCard">
                            Special Avatar
                            <br></br>
                            <Image
                                src={specialAvatar}
                                height="110"
                                className="rounded coinimg"
                            />
                            <Button className="coinButton">150 coins</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="coinCard">
                            Avatar1
                            <br></br>
                            <Image
                                src={Avatar1}
                                height="110"
                                className="rounded coinimg"
                            />
                            <Button className="coinButton">50 coins</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="coinCard">
                            Avatar2
                            <br></br>
                            <Image
                                src={Avatar2}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">50 coins</Button>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <Row className="mt-30">
                    <Col>
                        <div className="coinCard">
                            Avatar3
                            <br></br>
                            <Image
                                src={Avatar3}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">50 coins</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="coinCard">
                            Avatar4
                            <br></br>
                            <Image
                                src={Avatar4}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">50 coins</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="coinCard">
                            Avatar5
                            <br></br>
                            <Image
                                src={Avatar5}
                                height="110"
                                className="rounded coinimg"
                                alt="Liquiz Logo"
                            />
                            <Button className="coinButton">50 coins</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Shop