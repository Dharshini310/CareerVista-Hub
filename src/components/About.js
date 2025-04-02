import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Blank from './Blank';
import Coding from './Coding';
import Course from './Course';
import Intern from './Intern';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div id="s">
        {/* You can link to "/blank" without displaying text */}
        <Link to="/blank" style={{ display: 'none' }}></Link>

        <Routes>
          <Route path="/blank" element={<Blank />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/course" element={<Course />} />
          <Route path="/intern" element={<Intern />} />
        </Routes>

        {/* Your other content goes here */}
        <img src="https://static.vecteezy.com/system/resources/previews/008/163/386/non_2x/coding-software-programming-concept-icon-illustration-for-computer-science-developer-poster-or-graphic-element-vector.jpg" alt="" width={300} height={300} id="g" />&nbsp;
        <b id="x">Explore a variety of coding platforms that provide a comprehensive environment to enhance and refine your coding skills.&nbsp;<Link to="/blank" id="cu">CLICK HERE</Link></b><br />
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgUiJgWY6gPK4lEjy1T-z5SO_yQ0_DY9BHEk_W-coKIVV_mWFrGBPDgTzE6njkbf8BJ8&usqp=CAU" alt="" width={300} height={300} id="u" />&nbsp;
        <b id="co">Discover a wide range of online courses that are tailored to help you gain in-depth knowledge and advance your expertise.&nbsp;<Link to="/course" id="cu">CLICK HERE</Link></b><br />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVg22xkpPuxYl3esBjZn3uyVzLdGD_FTL4lA&usqp=CAU" alt="" width={300} height={300} id="t" />&nbsp;       
          <b id="in">Explore a variety of internship opportunities that allow you to apply your knowledge and skills in real-world settings.&nbsp;<Link to="/intern" id="cu">CLICK HERE</Link></b>
            </div>
    )
  }
}
