import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { createBrowserHistory } from "history";

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
          <Col>Header Here</Col>
        </Row>

        <Row>
          <Col sm={8}>Menuu Links</Col>
          <Col sm={4}>Login/Logout/User Info</Col>
        </Row>

        <Row>
          <Col>Main body here</Col>
        </Row>

        <Row>
          <Col>Footer</Col>
        </Row>

      </Container>
  );
  };
}
 
export default App;
