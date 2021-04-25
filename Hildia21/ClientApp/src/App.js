
import './css/style.css';
import './css/table.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
import "bootstrap/js/src/collapse.js";
import {Container,Row,Col} from 'react-bootstrap'
import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";
import Form from "./components/Form";
import Table from "./components/table/Table";
import RegionToggler from './components/RegionToggler';

const App = () => {
    return (
      <React.Fragment>

        <Container>

          <Row>
            <Col md="12" className="text-center">
              <span className="main-title">hildia 21</span>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <Form />
            </Col>
            <Col md="8">
              <RegionToggler />
              <Table />
            </Col>
          </Row>

        </Container>

      </React.Fragment>
    );
  }

  export default hot(App);