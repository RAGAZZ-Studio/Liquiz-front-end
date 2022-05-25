import { Form,Button } from 'react-bootstrap'

function Login() {
    return (
        <div className='form'>
            <h1>MASUK</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Masukkan Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Masukkan Password" />
                </Form.Group>
                <div className='option'>Belum punya akun? Daftar <a href='/register'>disini.</a></div>
                <Button variant="primary" type="submit">
                    Masuk
                </Button>
            </Form>
        </div>
    )
}

export default Login