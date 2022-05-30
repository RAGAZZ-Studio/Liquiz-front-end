import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import React, { useState } from 'react'
import axios, { Axios } from 'axios'
import '../style/login.css'
import Card from 'react-bootstrap/Card'
import logo from '../assets/img/LiquizLogo.png'
import loginImage from '../assets/img/login.png'

function Login() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: user.username,
      password: user.password
    };
    axios.post("https://liquiz-backend.herokuapp.com/api/login", userData)
      .then((response) => {
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
    <Container>
      <Card className="loginCard">
        <Row>
          <Col className="justify-content-left">
            <div className='form'>
              <Image
              src={logo}
              height="110"
              className="rounded loginLogo"
              alt="Liquiz Logo"
              />
              <br></br>
              <h1 className="welcomeText">Welcome Back !!!</h1>
              <br></br>
              <br></br>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" onChange={handleChange} value={user.username}>
                  <Form.Label className="labelLogin bsPrefix">Username</Form.Label>
                  <Form.Control name="username" type="text" className="formLogin" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleChange} value={user.password}>
                  <Form.Label className="labelLogin bsPrefix">Password</Form.Label>
                  <Form.Control name="password" type="password"  className="formLogin" />
                </Form.Group>
                <div className='option ml-10'>Belum punya akun? Daftar <a href='/register'>disini.</a></div>
                <br></br>
                <Button variant="primary" type="submit" onClick={Login} className="loginButton">LOGIN</Button>
              </Form>
            </div>
          </Col>
          <Col>
          <Image
              src={loginImage}
              height="800"
              className="rounded mt-100"
              alt="Login Image"
              />
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Login
