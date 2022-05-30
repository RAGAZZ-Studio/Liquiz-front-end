import { Form,Button, Container, Row, Col, Card, Image } from 'react-bootstrap'
import React ,{useState} from 'react'
import axios from 'axios'
import logo from '../assets/img/LiquizLogo.png'
import '../style/regis.css'
import regisImage from '../assets/img/register.png'

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
          alert("Pendaftaran Berhasil! Silahkan masuk.")
          window.location.href = "/login"
        });
      };

    return (
      <Container>
      <Card className="loginCard">
        <Row>
          <Col className="justify-content-left">
          <Image
              src={regisImage}
              height="750"
              className="rounded mt-100"
              alt="Regis Image"
              />
          </Col>
          <Col className="justify-content-left">
            <div className='form'>
              <Image
                src={logo}
                height="110"
                className="rounded loginLogo"
                alt="Liquiz Logo"
                />
                <br></br>
                <h1 className="welcomeText">Getting Started With Liquiz</h1>
                <br></br>
                <br></br>
              <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" value={user.username}
                  onChange={handleChange}>
                      <Form.Label className="labelLogin bsPrefix">Username</Form.Label>
                      <Form.Control className="formLogin" name="username" type="text"  />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword" value={user.password}
                  onChange={handleChange}>
                      <Form.Label className="labelLogin bsPrefix">Password</Form.Label>
                      <Form.Control name="password" type="password" className="formLogin" />
                  </Form.Group>
                  <br></br>
                  <div className='option'>Already have an account?<a href='/login'>Login here</a></div>
                  <Button onClick={Register} variant="primary" type="submit" className="loginButton">
                      REGISTER
                  </Button>
              </Form>
          </div>
          </Col>
        </Row>
      </Card>
    </Container>



    )
}

export default Register
