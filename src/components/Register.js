import { Form,Button } from 'react-bootstrap'
import React ,{useState} from 'react'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({});
    
      const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          username: user.username,
          password: user.password
        };
        console.log(user)
        axios.post("https://liquiz-backend.herokuapp.com/api/register", userData).then((response) => {
          console.log(response.status);
          console.log(response.data);
        });
      };

    return (
        <div className='form'>
            <h1>DAFTAR</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" value={user.username}
                onChange={handleChange}>
                    <Form.Control name="username" type="text" placeholder="Masukkan Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" value={user.password}
                onChange={handleChange}>
                    <Form.Control name="password" type="password" placeholder="Masukkan Password" />
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
