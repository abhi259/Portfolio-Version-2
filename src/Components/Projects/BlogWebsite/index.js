import React from "react"
import Aos from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css"

export default function BlogWebsite() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <a
      target="_blank"
      href="https://blogwebsite1.vercel.app/"
      rel="noopener noreferrer"
    >
      <div data-aos="fade-right">
        <div className=" group  transition duration-700  ">
          <div className=" md:w-[500px] relative">
            <div className="md:group-hover:-translate-x-14   md:dark:bg-[#05222a] bg-[#000000]  group-hover:bg-opacity-0  transition duration-700 ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blog-website-2-a2fb4.appspot.com/o/BlogWebsite.png?alt=media&token=9f31e90c-d01b-4147-900a-e9be5d3d6039"
                alt="BlogWebsite"
                className=" mix-blend-screen object-cover  h-72  "
              />
            </div>
            <div className=" absolute top-14 right-0 md:-right-52  md:w-[400px]   bg-[#929292]/60 dark:bg-[#001C23]/70 h-48 backdrop-blur-lg flex flex-col justify-around p-5 md:group-hover:translate-x-20 transition duration-700">
              <div>
                <h1 className="text-[#32ABB4] text-xl pb-2">
                  <span className="text-2xl text-[#c7c7c7]">01.</span>{" "}
                  Micro-Blogging Website
                </h1>
                <p className="dark:text-[#828282] text-[#cccccc] ">
                  A web app where anyone can post a micro-blog using Google
                  Firebase Authentication.
                </p>
              </div>
              <div className="flex gap-8 text-sm text-[#609eac]">
                <p>React</p>
                <p>Tailwind</p>
                <p>Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
