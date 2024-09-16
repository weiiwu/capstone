import React from 'react'
import Restaurant from '../assets/images/restaurant.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="hero py-20 mb-4">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <div className="text-left">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl"
            >
              Little Lemon
            </h1>
            <p className="my-4 text-3xl text-white">
              Chicago
            </p>
            <div className="flex h-20 items-center justify-between">
              <p className="my-4 text-xl text-white">
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </p>
              <div className="flex space-x-2">
                <img
                  className="h-48 w-auto sm:h-20 w-full"
                  src={Restaurant} alt='Restaurant'
                />
              </div>
            </div>

            <div className='mt-4'><Link className= 'py-2 px-4 rounded-full text-gray-700 bg-yellow font-bold' to='/booking'>Reserve a table</Link></div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Hero