import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { createBrowserHistory } from "history";

import 'bootstrap/dist/css/bootstrap.min.css';

// ************** Page imports ******************************
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import NavBar from './Pages/NavBar/NavBar'
import Status from './Pages/NavBar/Status'
import Login from "./Pages/Login/Login";
import Register from './Pages/Register/Register';
import Forgot from "./Pages/Forgot/Forgot";

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localToken: localStorage.token,
      token:[],
      user: [],
      currentUser: [],
      loggedIn: false,
    };

  };

  render() {
    return (
      <Container fluid>

        <Row>
          <Col><Header/></Col> 
          {/* <Col><h1><img src={Logo} alt="Forbes Services LLC" width="150" height="150"></img>Forbes Services LLC.</h1></Col> */}
        </Row>
      <hr></hr>
      <Container>
        <Row>
          <Col sm={6}><NavBar/></Col>
          <Col sm={4}><Status/></Col>
        </Row>
        </Container>
      <hr></hr>
        <Row className="center">
          <Col>
          <Router history={history} >

            <Switch >   
              <Route
              exact path='/'
              render={() => <Login/>}
              />

              <Route
              exact path='/register'
              render={() => <Register/>}
              />
              <Route
              exact path='/forgot'
              render={() => <Forgot/>}
              />
            </Switch>
            </Router>
          </Col>
        </Row>
<hr></hr>
        <Row>
          <Col><Footer/></Col>
        </Row>

      </Container>
  );
  };
}
 
export default App;
