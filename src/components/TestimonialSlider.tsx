"use client";
 
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Testimonials from "../data/testimonials_data.json"


function TestimonialSlider() {
  return (
    <div className="py-20 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        
        <InfiniteMovingCards
          items={Testimonials.testimonials}
          direction="right"
          speed="slow"
        />
    </div>
  )
}

export default TestimonialSlider