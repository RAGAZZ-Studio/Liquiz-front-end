import { Form,Button } from 'react-bootstrap'
import React ,{useState} from 'react'
import axios, { Axios } from 'axios'

function Login() {
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    const signIn = (e) => {
        e.preventDefault();
        Axios.post("https://liquiz-backend.herokuapp.com/api/login", {
            username,
            password
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <div className='form'>
            <h1>MASUK</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Masukkan Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Masukkan Password" />
                </Form.Group>
                <div className='option'>Belum punya akun? Daftar <a href='/register'>disini.</a></div>
                <Button variant="primary" type="submit" onClick={signIn}>Masuk</Button>
            </Form>
        </div>
    )
}

export default Login