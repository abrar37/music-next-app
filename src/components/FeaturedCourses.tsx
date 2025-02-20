"use client";

import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

import courseData from "../data/music_courses.json"

interface CourseDataType{
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  image: string,
}

function FeaturedCourses() {
  const featuredCourse =  courseData.courses.filter((course:CourseDataType) => course.isFeatured);
  return (
    <div className="py-20 bg-gray-900 flex flex-col gap-8 items-center">

        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourse.map((course:CourseDataType)=>(
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full">
                <Image
                  src={course.image}
                  height="400"
                  width="400"
                  className="object-cover rounded"
                  alt={course.title}
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>

                <Link href={`/course/${course.slug}`}>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>View Course</span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      {course.price}
                    </span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>

        
        <Link href={"courses"}>
          <div className="py-4 px-8 bg-black rounded-lg hover:bg-teal-600">All Courses</div>
        </Link>
        
    </div>
  )
}

export default FeaturedCourses