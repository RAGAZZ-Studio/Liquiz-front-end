import { Form,Button } from 'react-bootstrap'
import React ,{useState} from 'react'
import axios, { Axios } from 'axios'

function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = JSON.stringify({
          username: "ngetes",
          password: "lalala"
        });
        axios.post("https://liquiz-backend.herokuapp.com/api/login", userData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }).then((response) => {
          console.log(response.status);
          console.log(response.data.token);
        })
        .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log("server responded");
            } else if (error.request) {
              console.log("network error");
            } else {
              console.log(error);
            }
        });
      };

    return (
        <div className='form'>
            <h1>MASUK</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" onChange={handleChange} value={data.username}>
                    <Form.Control type="text" placeholder="Masukkan Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange} value={data.password}>
                    <Form.Control type="password" placeholder="Masukkan Password" />
                </Form.Group>
                <div className='option'>Belum punya akun? Daftar <a href='/register'>disini.</a></div>
                <Button variant="primary" type="submit" onClick={Login}>Masuk</Button>
            </Form>
        </div>
    )
}

export default Login