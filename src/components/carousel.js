import React, { Component } from "react"

import placeholder1 from "./placeholder1.jpg"
import placeholder2 from "./placeholder2.png"
import astro from "./astro.jpg"
import plejady from "./plejady.jpg"
import video1 from "../videos/video1.mp4"
//import porn1 from "./porn1.jpg"
//import porn2 from "./porn2.jpg"
//import porn3 from "./porn3.jpg"

import Slider from "./slider"

const sampleVideo = (
  <video width="400px" height="400px" src={video1} controls autoplay />
)
const videoSrc = "https://www.youtube.com/watch?v=OTKnhVTeN4w"
const images = [video1, videoSrc]
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
                {/* <img src={image} alt="" /> */}
                <video
                  width="100%"
                  height="auto"
                  width="auto"
                  src={image}
                  autoplay
                  controls
                  muted
                />
                <h1>{titles[index]}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    )
  }
}
