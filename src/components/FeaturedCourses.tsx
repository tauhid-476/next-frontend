'use client';
import courseData from "@/data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"


interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

// let username:string = "hitesh"
// username = 1
//type safety ensures the datatype remINA SAME


function FeaturedCourses() {

  //filter based on isFeatured propert
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

  return (
 
    <div className="py-12 bg-gray-900">
      {/* 1 text cards button */}
      <div className="">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
      </div>

      {/* 2nd */}
      <div className="m-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center ">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                 <p  className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                 <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                 <Link href={`/courses/${course.slug}`}>
                 Learn More</Link>
                </div>
              </BackgroundGradient>

            </div>
          ))}
        </div>
      </div>
      {/* 3 */}
      <div className="m-20 text-center">
        <Link href={"/courses"}
          className="text-white font-bold bg-teal-600 hover:bg-teal-700 p-4 rounded-lg">
          View All Courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses