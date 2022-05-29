import { Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Container } from "react-bootstrap"
import logo from '../assets/img/LiquizLogo.png'

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
            <div className="shop">
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={logo} />
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
                    <Card>
                        <Card.Img variant="top" src={logo} />
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
                    <Card>
                        <Card.Img variant="top" src={logo} />
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
                    <Card>
                        <Card.Img variant="top" src={logo} />
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
                    <Card>
                        <Card.Img variant="top" src={logo} />
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
                    <Card>
                        <Card.Img variant="top" src={logo} />
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
            </div>
        </Container>
    )
}

export default Shop