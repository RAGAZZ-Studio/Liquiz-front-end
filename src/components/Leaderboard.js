import { Container, Table, Image } from 'react-bootstrap'
import '../style/leaderboard.css'
import crown from '../assets/img/crown.png'
import { useState } from 'react';
import Login from './Login'

//Ini statis bukan db, tiati ngeditnya
function Leaderboard() {
    const Token = localStorage.getItem('token')
    if (Token == null){
        alert("Silahkan masuk terlebih dahulu!")
        window.location.href = "/login"
    }
    else {
        return (
            <Container>
                <div>
                    <br></br>
                    <Table className='tableLeaderboard bsPrefix justify-content-center'>
                        <thead>
                            <tr>
                                <th>Champion No.</th>
                                <th>Username</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="no1row">
                                <td className="no1Text">
                                    <Image src={crown} height="80" />1
                                </td>
                                <td>Vulbough</td>
                                <td>83</td>
                            </tr>
                            <tr>
                                <td className="no1Text"><Image src={crown} height="70" className="invimage"/>2</td>
                                <td>Petapa Ompong</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <td className="no1Text"><Image src={crown} height="70" className="invimage"/>3</td>
                                <td>Bang Jago</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td className="no1Text"><Image src={crown} height="70" className="invimage"/>4</td>
                                <td>Bikini Bottom</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td className="no1Text"><Image src={crown} height="70" className="invimage"/>5</td>
                                <td>Suhu</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td className="no1Text"><Image src={crown} height="70" className="invimage"/>6</td>
                                <td>Timburduk</td>
                                <td>38</td>
                            </tr>
                            <tr>
                                <td className="no1Text"><Image src={crown} height="70" className="invimage"/>7</td>
                                <td>Cuber</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td className="no1Text"><Image src={crown} height="70" className="invimage"/>8</td>
                                <td>Kambing Tetangga</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        )
    }

}

export default Leaderboard