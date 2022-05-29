import { Form,Button } from 'react-bootstrap'
import React ,{useState} from 'react'
import axios, { Axios } from 'axios'

function Register() {
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    const signUp = (e) => {
        e.preventDefault();
        Axios.post("https://liquiz-backend.herokuapp.com/api/register", {
            username,
            password
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <div className='form'>
            <h1>DAFTAR</h1>
            <Form>
                <Form.Group className="mb-3" value={username}
                onChange={(e)=>setUsername(e.target.value)}>
                    <Form.Control type="text" placeholder="Masukkan Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" value={username}
                onChange={(e)=>setPassword(e.target.value)}>
                    <Form.Control type="password" placeholder="Masukkan Password" />
                </Form.Group>
                <div className='option'>Sudah punya akun? Masuk <a href='/login'>disini.</a></div>
                <Button onClick={signUp} variant="primary" type="submit">
                    Daftar
                </Button>
            </Form>
        </div>
    )
}

export default Register