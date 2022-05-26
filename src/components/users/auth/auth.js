import React from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./auth.css";
import logo from "../../../assets/img/logo/logo.png";
import { RiCloseCircleLine, RiHome7Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";


const Auth = () => {
  const navigate = useNavigate(); /*istediğimiz bir adrese programatik olarak yönlendirmek için*/ 
  

  return (
    <Container fluid className="auth">
      <Row>
        <Col md={7}>
          <img src={logo} alt="TRVLCar" />          
            <RiCloseCircleLine
              onClick={() => navigate(-1)}/*-1 bir önceki sayfaya dön demek */
            />                      
        </Col>
        <Col md={5}>
                    
              <Tabs
                defaultActiveKey="login"
                className="mb-3"
              >
                <Tab eventKey="login" title="Login">
                  <LoginForm/>
                </Tab>
                <Tab eventKey="register" title="Register">
                  <RegisterForm/>
                </Tab>
              </Tabs>      
          
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
