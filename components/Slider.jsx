'use client'
import { useState } from 'react'
import { Slide } from './Slide'

export const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className='m-10'>
      {slides.map((slide, index) => {
        return (
          <div key={slide.path}>
            {currentSlide === index && (
              <Slide slide={slide} />
            )}
          </div>
        )
      })}
      <section className='flex gap-2 justify-center -mt-10'>
        {slides.map((slide, index) => {
          return (
            <button
              key={index}
              className={`p-2 rounded-full border-white border-2 ${currentSlide === index ? 'bg-white' : 'bg-transparent'}`}
              onClick={() => setCurrentSlide(index)}
            />
          )
        })}

      </section>
    </section>
  )
}
