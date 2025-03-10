import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SolarSystem from "./SolarSystem";
import {
  FaReact,
  FaNodeJs,
  FaDatabase, //sql
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaJava,
  FaC,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiElectron,
  SiMysql,
} from "react-icons/si";
import { TbBrandCSharp, TbApi } from "react-icons/tb";

const EDUCATION = [
  {
    title:
      "Bachelor of Computer Applications  (Specialization: Cyber Security)",
    institution: "Amity University",
    duration: "2022 - Present",
    description:
      "Currently pursuing my BCA, focusing on full-stack development, AI, and database management. Completed CS50x and more certification courses along with building various projects.",
  },
  {
    title: "High School (12th Grade)",
    institution: "Thakur College of Science and Commerce",
    duration: "2020 - 2022",
    description:
      "Completed high school with a major in PCM with Computer Science, where I gained in-depth knowledge of C++ and programming logic. I also explored the Intel 8085 microprocessor, understanding low-level computing concepts. Alongside academics, I deepened my web development skills by taking a MERN web-development online course.",
  },
  {
    title: "Secondary School (till 10th Grade)",
    institution: "Sardar Vallabhbhai Patel Vidyalaya",
    duration: "2018 - 2020",
    description:
      "Discovered my passion for Computer Science and Coding, which shaped my career path. I created my first HTML & CSS webpage, sparking my interest in web development. Had the opportunities to develop leadership, communication, and teamwork abilities.",
  },
];

const techStack = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "React", icon: <FaReact />, url: "https://react.dev/" },
  { name: "Node.js", icon: <FaNodeJs />, url: "https://nodejs.org/" },
  { name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com/" },
  { name: "Express.js", icon: <SiExpress />, url: "https://expressjs.com/" },
  {
    name: "SQL",
    icon: <FaDatabase />,
    url: "https://developer.mozilla.org/en-US/docs/Glossary/SQL",
  },
  { name: "MySQL", icon: <SiMysql />, url: "https://www.mysql.com/" },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    url: "https://getbootstrap.com/",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    url: "https://www.framer.com/motion/",
  },
  { name: "Figma", icon: <FaFigma />, url: "https://www.figma.com/" },
  {
    name: "C",
    icon: <FaC />,
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  { name: "C++", icon: <SiCplusplus />, url: "https://isocpp.org/" },
  { name: "Python", icon: <SiPython />, url: "https://www.python.org/" },
  { name: "Java", icon: <FaJava />, url: "https://www.java.com/" },
  {
    name: "C#",
    icon: <TbBrandCSharp />,
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "Electron",
    icon: <SiElectron />,
    url: "https://www.electronjs.org/",
  },
  {
    name: "RESTful APIs",
    icon: <TbApi />,
    url: "https://hoppscotch.io/",
  },
];

export default function EducationTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.2, 1, 0.2]
  );
  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-100px", "0px", "100px"]
  );

  return (
    <div
      id="aboutme"
      ref={containerRef}
      className="bg-[#000b1e] w-screen relative py-20 text-white"
    >
      <SolarSystem />

      {/* About Me Section */}
      <div className="px-5 lg:px-20 py-5 lg:py-1 text-center">
        <h2 className="uppercase text-4xl lg:text-8xl font-bold">About ME</h2>
        <p className="lg:w-3/4 mx-auto text-lg text-stone-300 mt-5">
          Crafting with Precision; Innovating with Passion. Hey, I’m Kashish! A
          detail-obsessed developer who thrives on structure, design, and
          problem-solving — with a slight addiction to clean UI, smooth UX, and
          writing code that actually makes sense. My journey in tech is fueled
          by endless curiosity, constant learning, and pushing boundaries. Every
          project is an adventure — sometimes it’s about building intuitive web
          applications, sometimes it’s about debugging until 3 AM, but always,
          it’s about iterating, optimizing, and elevating. I believe in blending
          creativity with efficiency, where every bug is just a feature waiting
          to be tamed. Consistency is my strength, and growth is my goal. I
          don’t just build; I refine, perfect, and evolve. Let’s create
          something awesome—one line of code at a time. 🚀
        </p>

        {/* Technologies Section */}
        <h3 className="uppercase text-3xl lg:text-5xl font-bold mt-16">
          Technologies I Work With
        </h3>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {techStack.map((tech, index) => (
            <a
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl text-gray-400 hover:text-white transition-transform transform hover:scale-110"
            >
              {tech.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Education Timeline Section */}
      <h2 className="text-4xl lg:text-6xl font-bold text-center mt-20 uppercase">
        My Education Journey
      </h2>
      <div className="relative w-full flex flex-col items-center mt-10">
        <div className="absolute w-1 bg-stone-500 h-full left-1/2 transform -translate-x-1/2"></div>
        {EDUCATION.map(
          ({ title, institution, duration, description }, index) => (
            <motion.div
              key={index}
              className={`flex w-full max-w-4xl mb-10 relative ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              style={{ opacity: opacityTransform, x: xTransform }}
            >
              <div className="bg-[#111d32] text-white p-5 lg:p-8 rounded-xl w-[80%] shadow-lg">
                <h3 className="text-2xl lg:text-3xl font-bold">{title}</h3>
                <p className="text-lg text-stone-300">{institution}</p>
                <p className="text-sm text-stone-400 italic">{duration}</p>
                <p className="mt-3">{description}</p>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
