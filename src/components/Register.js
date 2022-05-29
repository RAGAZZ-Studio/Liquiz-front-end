import { Form,Button } from 'react-bootstrap'
import React ,{useState} from 'react'
import axios, { Axios } from 'axios'

function Register() {
    const [state, setState] = useState({
        username: "",
        password: ""
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          username: state.username,
          password: state.password
        };
        axios.post("https://liquiz-backend.herokuapp.com/api/register", userData).then((response) => {
          console.log(response.status);
          console.log(response.data);
        });
      };

    return (
        <div className='form'>
            <h1>DAFTAR</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" value={state.username}
                onChange={handleChange}>
                    <Form.Control type="text" placeholder="Masukkan Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" value={state.password}
                onChange={handleChange}>
                    <Form.Control type="password" placeholder="Masukkan Password" />
                </Form.Group>
                <div className='option'>Sudah punya akun? Masuk <a href='/login'>disini.</a></div>
                <Button onClick={Register} variant="primary" type="submit">
                    Daftar
                </Button>
            </Form>
        </div>
    )
}

export default Register