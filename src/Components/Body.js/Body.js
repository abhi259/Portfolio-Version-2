import "./Body.css"
import { SiGithub, SiLinkedin, SiArtstation } from "react-icons/si"

export default function Body() {
  return (
    <div>
      <div className="flex justify-left mt-16">
        <div>
          <h1 className="fonthello my-2">Hi! my name is </h1>
          <h1 className="name my-2 text-transparent bg-clip-text bg-gradient-to-t from-[#bababa] to-[#ffffff] dark:text-[#32abb4] text-4xl transition duration-[1500ms]">
            Abhishek Patil
          </h1>
          <p className="fonthello my-2">I am a Front-End Developer</p>
        </div>
      </div>
      <div className=" items-center text-5xl flex justify-center gap-6 pt-10 text-[#2e2e2e] dark:text-gray-300 transition duration-[1500ms]">
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
        <div className="  bg-gradient-to-b from-[#171717] dark:from-[#00d8bf] rounded-full w-80 h-80 mt-20 justify-center items-center overflow-hidden md:h-96 md:w-96">
          <img
            className="pt-12 scale-[1.34]"
            src="dev-ed-wave.png"
            alt="abcd"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mt-28  ">
          <h1 className="heading pr-4 text-3xl ">About</h1>
          <p className="custom-line bg-[#2e2e2e] dark:bg-gray-300 transition duration-[1500ms]"></p>
        </div>
        <div className="text-sm text-light">
          <p className="paragraph mt-3">
            Hello! My name is Abhishek. I am a Front-End Web Developer and 3D
            Artist. My interest in web development started in early 2022 when I
            wanted to make my own website to showcase my 3D work. I wanted to
            build my own website from the ground up and that's how my web
            development journey started.
          </p>
          <br />
          <p className="paragraph">
            I worked as a 3D artist for around three years but when I started
            exploring Front-End Tech as a hobby I realised this is something I
            want to do for living and since then I have been working on my
            Front-end skills.
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center mt-28  ">
            <h1 className="heading pr-4 text-3xl ">Skills</h1>
            <p className="custom-line bg-[#2e2e2e] dark:bg-gray-300 transition duration-[1500ms]"></p>
          </div>
          <div className="grid grid-cols-2 mt-5">
            <div className="flex  items-center gap-2 m-4">
              <img src="HTML.svg" alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="flex items-center gap-2 m-4">
              <img src="CSS.svg" alt="HTML" />
              <p>CSS</p>
            </div>
            <div className="flex items-center gap-2 m-4">
              <img src="Javascript.svg" alt="HTML" />
              <p>Javascript</p>
            </div>
            <div className="flex items-center gap-2 m-4">
              <img src="Reactjs.svg" alt="HTML" />
              <p>ReactJS</p>
            </div>
            <div className="flex items-center gap-2 m-4">
              <img src="Tailwind.svg" alt="HTML" />
              <p>Tailwind</p>
            </div>
            <div className="flex items-center gap-2 m-4">
              <img src="Bootstrap.svg" alt="HTML" />
              <p>Bootstrap</p>
            </div>
            <div className="flex items-center gap-2 m-4">
              <img src="Python.svg" alt="HTML" />
              <p>Python</p>
            </div>
            <div className="flex items-center gap-2 m-4">
              <img src="Figma.svg" alt="HTML" />
              <p>Figma</p>
            </div>
            <div className="flex items-center gap-2 m-4">
              <img src="Photoshop.svg" alt="HTML" />
              <p>Photoshop</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-28  ">
            <h1 className="heading pr-4 text-3xl ">Projects</h1>
            <p className="custom-line bg-[#2e2e2e] dark:bg-gray-300 transition duration-[1500ms]"></p>
          </div>
        </div>
      </div>
    </div>
  )
}
