import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './Nav.css';
import About from "./About";
import Login from "./Login";
import Signin from "./Signin";
import Home from "./Home";
import Blank from './Blank';
import Coding from './Coding';
import Course from './Course';
import Intern from './Intern';
import './About.css';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar expand="lg" className="y">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"} id="ck">Home</Nav.Link>&nbsp;&nbsp;
                  <Nav.Link as={Link} to={"/about"} id="j">About</Nav.Link>
                  <Nav.Link as={Link} to={"/login"} id="i">Login</Nav.Link>
                  <Nav.Link as={Link} to={"/signin"} id="i">Signin</Nav.Link>
                  <Nav.Link as={Link} to={"/blank"} id="c">Coding</Nav.Link>
                  <Nav.Link as={Link} to={"/course"} id="c">Courses</Nav.Link>
                  <Nav.Link as={Link} to={"/intern"} id="c">Internship</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
          <Route path="/blank" element={<Blank />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/course" element={<Course />} />
          <Route path="/intern" element={<Intern />} />
        </Routes>
        </Router>
      </div>
    );
  }
}
