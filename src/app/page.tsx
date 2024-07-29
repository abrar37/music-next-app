import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialSlider from "@/components/TestimonialSlider";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialSlider/>
      <Webinars/>
      <Instructors/>
    </>
  );
}
