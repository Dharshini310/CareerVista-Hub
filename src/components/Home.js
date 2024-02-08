import React, { Component } from "react";
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
export default class Home extends Component{
    render(){
        return(
            <div id="y">
    <Carousel>
      <Carousel.Item interval={300}>
          <img src="https://c4.wallpaperflare.com/wallpaper/671/361/277/programming-code-simple-background-coding-wallpaper-thumb.jpg" alt="loading.." width={800} height={527}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
          <img src="https://149818895.v2.pressablecdn.com/wp-content/uploads/2020/02/Free-Online-Course-1.jpg" alt="loading.." width={800} height={527}/>
      </Carousel.Item>
      <Carousel.Item interval={300}>
          <img src="https://www.geneva.edu/news/2017/10/gc-graphic_11-reasons-why-your-summer-internship-was-totally-worth-it_eddy.jpg" alt="loading.." width={800} height={527}/>
      </Carousel.Item>
    </Carousel>
            </div>

        )
    }
}