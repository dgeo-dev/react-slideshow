import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import "./Slider.css"

function Slider() {
  const baseUrl = "http://react-responsive-carousel.js.org/assets/"
  const datas = [
    {
      id: 1,
      image: `${baseUrl}1.jpeg`,
      title: "Titre du slider 1",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sit,
            enim accusantium incidunt quam dolore perferendis.`,
    },
    {
      id: 2,
      image: `${baseUrl}2.jpeg`,
      title: "Titre du slider 2",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sit,
            enim accusantium incidunt quam dolore perferendis.`,
    },
    {
      id: 3,
      image: `${baseUrl}3.jpeg`,
      title: "Titre du slider 3",
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sit,
            enim accusantium incidunt quam dolore perferendis.`,
    },
  ]
  return (
    <Carousel
      autoPlay
      interval={6000}
      infiniteLoop
      thumbWidth={120}
      showIndicators={false}
      showStatus={false}
    >
      {datas.map(slide => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h2 className="overlay__title">{slide.title}</h2>
            <p className="overlay__text">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Slider
