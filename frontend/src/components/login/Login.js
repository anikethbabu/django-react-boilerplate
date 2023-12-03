import React, {useState} from "react";
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {
    const [userData, setUserData] = useState(
        {
            username: "",
            password: ""
        });
    const onChange = e => {
        setUserData({...userData, [e.target.name]: e.target.value});
    };
    const onLoginClick = () => {
        console.log("Login" + userData.username + " " + userData.password);
    };
    return (
        <Container>
            <Row>
                <Col md="4">
                    <h1>Login</h1>
                    <Form>
                        <Form.Group controlId="usernameId">
                            <Form.Label>User name</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Enter user name"
                                value={userData.username}
                                onChange={onChange}
                            />
                            <FormControl.Feedback type="invalid"></FormControl.Feedback>
                        </Form.Group>

                        <Form.Group controlId="passwordId">
                            <Form.Label>Your password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={userData.password}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                    <Button color="primary" onClick={onLoginClick}>Login</Button>
                    <p className="mt-2">
                        Don't have account? <Link to="/signup">Signup</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Login