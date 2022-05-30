import { Button, Container, Card, CardGroup, Col, Row, Image } from "react-bootstrap"
import coins from '../assets/img/coins.png'
import '../style/Shop.css'

//Ini gambar buat ngetes doang, nanti ganti aja
function Shop() {
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
            {/* <div className="shop">
                <CardGroup className="m-10">
                    <Card className="shopCard">
                        <Image
                            src={coins}
                            height="228"
                            className="rounded loginLogo"
                            alt="coins"
                        />
                        <Card.Body>
                            <Card.Title>{shopList[0].itemName}</Card.Title>
                            <Card.Text>
                                Mendapatkan koin berjumlah kecil dengan harga yang murah.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="dark">{shopList[0].price}</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="shopCard">
                        <Card.Img variant="top" src={coins} />
                        <Card.Body>
                            <Card.Title>{shopList[1].itemName}</Card.Title>
                            <Card.Text>
                                Koin yang sepadan untuk harga yang murah.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="dark">{shopList[1].price}</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="shopCard">
                        <Card.Img variant="top" src={coins} />
                        <Card.Body>
                            <Card.Title>{shopList[2].itemName}</Card.Title>
                            <Card.Text>
                                Jumlah koin yang cukup untuk beberapa barang.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="dark">{shopList[2].price}</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card className="shopCard">
                        <Card.Img variant="top" src={coins} />
                        <Card.Body>
                            <Card.Title>{shopList[3].itemName}</Card.Title>
                            <Card.Text>
                                Koin yang lumayan banyak untuk uang yang sedikit.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="dark">{shopList[3].price}</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="shopCard">
                        <Card.Img variant="top" src={coins} />
                        <Card.Body>
                            <Card.Title>{shopList[4].itemName}</Card.Title>
                            <Card.Text>
                                Koin banyak untuk harga yang murah.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="dark">{shopList[4].price}</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="shopCard">
                        <Card.Img variant="top" src={coins} />
                        <Card.Body>
                            <Card.Title>{shopList[5].itemName}</Card.Title>
                            <Card.Text>
                                Jumlah koin banyak untuk membeli berbagai macam barang.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="dark">{shopList[5].price}</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div> */}
        </Container>
    )
}

export default Shop