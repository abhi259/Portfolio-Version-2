import { useEffect } from "react"
import "./Body.css"
import { SiGithub, SiLinkedin, SiArtstation } from "react-icons/si"
import Aos from "aos"
import "aos/dist/aos.css"
import Typewriter from "typewriter-effect"
import BlogWebsite from "../Projects/BlogWebsite"

export default function Body() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div>
      <div className="flex justify-left mt-40 fonthello ">
        <div>
          <h1 className="my-2 md:text-xl ">Hi! my name is </h1>
          <div className="name  text-transparent bg-clip-text bg-gradient-to-b from-[#bababa] to-[#ffffff] dark:text-[#32abb4]  text-4xl md:text-5xl leading-4 transition duration-[1500ms] ">
            <Typewriter
              options={{
                cursor: "_",
                delay: 140,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString("<span style='line-height: 1; '>Abhishek</span>")
                  .pauseFor(1800)
                  .typeString("<span style='line-height: 1; '> Patil</span>")
                  .start()
              }}
            />
          </div>
          <p className="my-2 md:text-xl ">I am a Front-End Developer</p>
        </div>
      </div>
      <div className="mt-10 items-center text-5xl flex justify-center gap-6 pt-10 text-[#2e2e2e] dark:text-gray-300 transition duration-[1500ms]">
        <p className="custom-line bg-[#2e2e2e] dark:bg-gray-300 transition duration-[1500ms]"></p>
        <a href="https://github.com/abhi259" target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-patil-900098158/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin />
        </a>

        <a
          href="https://www.artstation.com/abhishekpatil925"
          target="_blank"
          rel="noreferrer"
        >
          <SiArtstation />
        </a>
        <p className="custom-line bg-[#2e2e2e] dark:bg-gray-300 transition duration-[1500ms]"></p>
      </div>
      <div className="flex justify-center ">
        <div className="  bg-gradient-to-b from-[#171717] dark:from-[#00d8bf] rounded-full w-80 h-80  my-20 justify-center items-center overflow-hidden ">
          <img
            className="pt-12 scale-[1.34]"
            src="dev-ed-wave.png"
            alt="abcd"
          />
        </div>
      </div>
      <div className=" md:w-[700px] mx-auto ">
        <div data-aos="fade-right">
          <div>
            <div className="flex justify-start items-center   ">
              <h1 className="heading pr-4 text-3xl ">About</h1>
              <p className="custom-line bg-[#2e2e2e] dark:bg-gray-300 transition duration-[1500ms]"></p>
            </div>
            <div className="text-sm   text-light my-5 md:pl-32 ">
              <p className="paragraph leading-[20px] ">
                Hello! My name is Abhishek. I am a Front-End Web Developer and
                3D Artist. My interest in web development started in early 2022
                when I wanted to make my own website to showcase my 3D work. I
                wanted to build my own website from the ground up and that's how
                my web development journey started.
              </p>
              <br />
              <p className="paragraph leading-[20px]">
                I worked as a 3D artist for around three years but when I
                started exploring Front-End Tech as a hobby I realised this is
                something I want to do for living and since then I have been
                working on my Front-end skills.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="my-24">
            <div className="flex justify-start items-center my-10  ">
              <h1 className="heading pr-4 text-3xl">Skills</h1>
              <p className="custom-line bg-[#2e2e2e] dark:bg-gray-300 transition duration-[1500ms]"></p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3  mt-5">
              <div className="flex  items-center gap-2 m-4 hover:scale-125 transition duration-[400ms]">
                <img src="HTML.svg" alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="flex items-center gap-2 m-4 hover:scale-125 transition duration-[400ms]">
                <img src="CSS.svg" alt="HTML" />
                <p>CSS</p>
              </div>
              <div className="flex items-center gap-2 m-4 hover:scale-125 transition duration-[400ms]">
                <img src="Javascript.svg" alt="HTML" />
                <p>Javascript</p>
              </div>
              <div className="flex items-center gap-2 m-4 hover:scale-125 transition duration-[400ms]">
                <img src="Reactjs.svg" alt="HTML" />
                <p>ReactJS</p>
              </div>
              <div className="flex items-center gap-2 m-4 hover:scale-125 transition duration-[400ms]">
                <img src="Tailwind.svg" alt="HTML" />
                <p>Tailwind</p>
              </div>
              <div className="flex items-center gap-2 m-4 hover:scale-125 transition duration-[400ms]">
                <img src="Bootstrap.svg" alt="HTML" />
                <p>Bootstrap</p>
              </div>
              <div className="flex items-center gap-2 m-4 hover:scale-125 transition duration-[400ms]">
                <img src="Python.svg" alt="HTML" />
                <p>Python</p>
              </div>
              <div className="flex items-center gap-2 m-4 hover:scale-125 transition duration-[400ms]">
                <img src="Figma.svg" alt="HTML" />
                <p>Figma</p>
              </div>
              <div className="flex items-center gap-2 m-4 hover:scale-125 transition duration-[400ms]">
                <img src="Photoshop.svg" alt="HTML" />
                <p>Photoshop</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center my-16  ">
            <h1 className="heading pr-4 text-3xl ">Projects</h1>
            <p className="custom-line bg-[#2e2e2e] dark:bg-gray-300 transition duration-[1500ms]"></p>
          </div>
          <div>
            <BlogWebsite />
          </div>
        </div>
      </div>
    </div>
  )
}
