import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Underline from "../Text/Underline"
import SolarSystem from "./SolarSystem"

const EDUCATION = [
  {
    title: "Bachelor of Computer Applications",
    institution: "Amity University",
    duration: "2022 - Present",
    description:
      "Currently pursuing my BCA, focusing on full-stack development, AI, and database management. Completed CS50 and various projects in MERN stack.",
  },
  {
    title: "High School (12th Grade)",
    institution: "Your School Name",
    duration: "2020 - 2022",
    description:
      "Completed high school with a major in Computer Science, where I built my first web applications and developed a passion for programming.",
    
  },
  {
    title: "Secondary School (10th Grade)",
    institution: "Your School Name",
    duration: "2018 - 2020",
    description:
      "Developed problem-solving skills and built a strong foundation in Mathematics and Computer Science.",
    
  },
  //duration is important while adding new div here!!
];

export default function EducationTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      id="aboutme"
      ref={containerRef}
      className="bg-[#000b1e] w-screen relative py-20 text-white"
    >
      {/* Solar System Background */}
      <SolarSystem />
      
      {/* About Me Section */}
      <div className="px-5 lg:px-200 py-5 lg:py-1 text-center">
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
      </div>

      {/* Education Timeline Section */}
      <h2 className="text-4xl lg:text-6xl font-bold text-center mt-20 uppercase">
        My Education Journey
      </h2>

      <div className="relative w-full flex flex-col items-center mt-10">
        {/* Vertical Line */}
        <div className="absolute w-1 bg-stone-500 h-full left-1/2 transform -translate-x-1/2"></div>

        {EDUCATION.map(
          ({ title, institution, duration, description }, index) => (
            <motion.div
              key={index}
              className={`flex w-full max-w-4xl mb-10 relative ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [0.2, 1, 0.2]
                ),
                x: useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  ["-100px", "0px", "100px"]
                ),
              }}
            >
              {/* Education Card */}
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