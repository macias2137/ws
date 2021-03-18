import React, { Component } from "react"

import placeholder1 from "./placeholder1.jpg"
import placeholder2 from "./placeholder2.png"
import astro from "./astro.jpg"
import plejady from "./plejady.jpg"
//import porn1 from "./porn1.jpg"
//import porn2 from "./porn2.jpg"
//import porn3 from "./porn3.jpg"

import Slider from "./slider"

const images = [placeholder1, placeholder2, astro, plejady, porn1, porn2, porn3]
const titles = []
for (let i = 0; i < images.length; i++) {
  titles.push(`REALIZACJA ${i + 1}`)
}

export default class Carousel extends React.Component {
  render() {
    return (
      <section id="realizacje" className="carousel__section">
        <Slider
          options={{
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            fullscreen: true,
            adaptiveHeight: false,
            setGallerySize: false,
          }}
        >
          {images.map((image, index) => (
            <div className="carousel__item__container" key={index}>
              <div className="carousel__item">
                <img src={image} alt="" />
                <h1>{titles[index]}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    )
  }
}
