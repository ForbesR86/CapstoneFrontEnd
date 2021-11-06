import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { createBrowserHistory } from "history";
import Logo from './Images/Logo.png';

// ************** Page imports ******************************
import Register from './Pages/Register/Register'
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'

const history = createBrowserHistory();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localToken: localStorage.token,
      token:[],
      user: [],
      currentUser: [],
      currentUserID: "",
      registeredUser: [],
      loggedIn: false,
      books:[],
      searchResults: [],
      searchEnable: false,
      usertype:false,
    };

  };

  render() {
    return (
      <Container fluid>

        <Row>
          <Col><img src={Logo} alt="Forbes Services LLC" width="150" height="150"></img>Header Here</Col>
        </Row>
      <hr></hr>
        <Row>
          <Col sm={6}><Container>Menuu Links</Container></Col>
          <Col sm={4}>Login/Logout/User Info</Col>
        </Row>
      <hr></hr>
        <Row>
          <Col><Register/>
          </Col>
        </Row>

        <Row>
          <Col>Footer</Col>
        </Row>

      </Container>
  );
  };
}
 
export default App;
