import { Container, Table } from 'react-bootstrap'
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
                    <Table striped bordered hover variant="dark" className='leaderboard'>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Username</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ngetes</td>
                                <td>4/5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Bang Jago</td>
                                <td>4/5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ga jago</td>
                                <td>3/5</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        )
    }

}

export default Leaderboard