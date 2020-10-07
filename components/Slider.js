// Import Packages
import React, { useState } from 'react'

/**
 * @component Slider
 */
const Slider = ({}) => {
  // Test API Data
  const dummyData = [
    {
      heading: 'Hello world!',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem assumenda fugiat similique libero ducimus culpa.',
      image: '1210/1210'
    },
    {
      heading: 'Hello world 2!',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem assumenda fugiat similique libero ducimus culpa.',
      image: '1110/1110'
    }
  ]

  let [currentIndex, updateCurrentIndex] = useState(0)
  const slideClasses = 'slider__frame__slide absolute w-full transition transition-transform ease-in-out duration-500'
  const contentBoxClasses = 'slider__frame__slide__content-box w-full sm:w-64 py-8 px-4 bg-white sm:absolute shadow-2xl transition-transform ease-in-out duration-500'
  const activeClasses = 'opacity-100 transform translate-y-0'
  const inactiveClasses = 'opacity-0 transform translate-y-20'

  /**
   * Slide to next slide
   */
  const slideNext = () => {
    if (currentIndex + 1 > dummyData.length - 1) {
      return updateCurrentIndex(0)
    }

    return updateCurrentIndex(currentIndex + 1)
  }

  /**
   * Slide to previous slide
   */
  const slidePrev = () => {
    if (currentIndex - 1 < 0) {
      return updateCurrentIndex(dummyData.length - 1)
    }

    return updateCurrentIndex(currentIndex - 1)
  }

  return (
    <section id="slider" className="slider mx-auto mt-20 w-5/6 relative">
      <div className="slider__controls flex justify-end divide-x-2">
        <button
          className="h-20 w-20 bg-blue-600 text-2xl text-white font-bold"
          onClick={slidePrev}
        >&lt;</button>

        <button
          className="h-20 w-20 bg-blue-600 text-2xl text-white font-bold"
          onClick={slideNext}
        >&gt;</button>
      </div>

      <ul className="slider__frame w-full">
        {dummyData.map((slide, i) => (
          <li
            key={slide.text + i}
            className={[slideClasses, currentIndex === i ? activeClasses : 'opacity-0'].join(' ')}
          >
            <img
              className="w-full sm:w-11/12 object-cover sm:float-right"
              style={{
                height: '400px'
              }}
              src={`https://placekitten.com/${slide.image}`}
              alt="Picture of a kitten." />

            <div
              style={{
                top: '-5rem'
              }}
              className={[contentBoxClasses, currentIndex === i ? activeClasses : inactiveClasses].join(' ')}
            >
              <h1 className="text-2xl mb-4 font-bold font-serif">{slide.heading}</h1>

              <p className="mb-4">{slide.text}</p>

              <button className="py-2 px-4 bg-blue-600 text-base text-white font-bold tracking-wider uppercase">
                Click me!
              </button>
            </div>

            <div className="clear-both"></div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Slider