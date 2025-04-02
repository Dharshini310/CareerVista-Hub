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
        <b id="x">Several coding platforms enhance skills through interactive learning and challenges.&nbsp;<Link to="/blank" id="cu">CLICK HERE</Link></b><br />
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgUiJgWY6gPK4lEjy1T-z5SO_yQ0_DY9BHEk_W-coKIVV_mWFrGBPDgTzE6njkbf8BJ8&usqp=CAU" alt="" width={300} height={300} id="u" />&nbsp;
        <b id="co">Several online course platforms enhance technical knowledge through structured learning.&nbsp;<Link to="/course" id="cu">CLICK HERE</Link></b><br />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVg22xkpPuxYl3esBjZn3uyVzLdGD_FTL4lA&usqp=CAU" alt="" width={300} height={300} id="t" />&nbsp;       
          <b id="in">Several internship platforms allow you to apply your technical skills practically.&nbsp;<Link to="/intern" id="cu">CLICK HERE</Link></b>
            </div>
    )
  }
}
