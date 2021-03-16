import React, { Component } from "react"

import placeholder1 from "./placeholder1.jpg"
import placeholder2 from "./placeholder2.png"

import Slider from "./slider"

const images = [placeholder1, placeholder2]

export default class Carousel extends React.Component {
  render() {
    return (
      <section id="realizacje" className="carousel__section">
        {/*<div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        />*/}
        <Slider
          options={{
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            fullscreen: true,
            adaptiveHeight: true,
          }}
        >
          {images.map((image, index) => (
            <div
              style={{ width: "80%", height: "800px", margin: "0 0.5em" }}
              key={index}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </Slider>
      </section>
    )
  }
}
