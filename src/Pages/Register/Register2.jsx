import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Container, Row, Col, Form } from 'react-bootstrap';

const initialFieldValues = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    street: '',
    city: "",
    state: "",
    zip: "",
}

export default function Register(props) {



    const [values, setValues] = useState(initialFieldValues)



    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            streetaddress: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zip,
            type: "User"
        }
        //Axios call here from props App.js
        let response = axios.post('http://127.0.0.1:8000/api/auth/register/', user)
        if(response === undefined){
            console.log('Error registering user.')
        }
    }








    return (
        <>
            <Col sm={6}>
                <Form className="reg-form" onSubmit ="">
                    <Form.Group className="mb-3" controlId="formBasicRegister">
                    <Row>
                        <Col sm={6}>
                            <Form.Label className="reg-label" >Username</Form.Label>
                            <Form.Control className="reg-field" type='text' name='username' onChange={handleInputChange} value={values.username}/>
                        </Col>
                        <Col sm={6}>
                            <Form.Label className="reg-label">Password</Form.Label>
                            <Form.Control className="reg-field" type='password' name='password' onChange={handleInputChange} value={values.password}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <Form.Label className="reg-label">First Name</Form.Label>
                            <Form.Control className="reg-field" type='text' name='firstname' onChange={handleInputChange}value={values.firstname}/>
                        </Col>
                        <Col sm={6}>
                            <Form.Label className="reg-label">Last Name</Form.Label>
                            <Form.Control className="reg-field" type='text' name='lastname' onChange={handleInputChange} value={values.lastname}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Form.Label className="reg-label" >Email</Form.Label>
                            <Form.Control className="reg-field" type='email' name='email' onChange={handleInputChange} value={values.email}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            <Form.Label className="reg-label">Street</Form.Label>
                            <Form.Control className="reg-field" type='text' name='street' onChange={handleInputChange} value={values.street}/>
                        </Col>
                        <Col sm={3}>
                            <Form.Label className="reg-label">City</Form.Label>
                            <Form.Control className="reg-field" type='text' name='city' onChange={handleInputChange} value={values.city}/>
                        </Col>
                        <Col sm={2}>
                            <Form.Label className="reg-label">State</Form.Label>
                            <Form.Control className="reg-field" type='text' name='state' onChange={handleInputChange} value={values.state}/>
                        </Col>
                        <Col sm={2}>
                            <Form.Label className="reg-label">Zip</Form.Label>
                            <Form.Control className="reg-field" type='text' name='zip' onChange={handleInputChange} value={values.zip}/>
                        </Col>
                    </Row>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicButton">
                    <button className="reg-button" type='submit' value='Submit'>Register Account</button>{' '}
                    <button className="reg-button" type='reset' value='reset'>Clear Form</button>
                    </Form.Group>
                </Form>
                <Col sm={1}>
                </Col>
            </Col>
        </>
    )
}
