import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SolarSystem from "./SolarSystem";

// ─── Data ────────────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    role: "Website Developer",
    company: "BuzzTactics (Marketing Agency)",
    duration: "Jan 2026 - March 2026",
    location: "Mumbai",
    points: [
      "Built a fully responsive production website using React + Tailwind CSS with reusable component architecture.",
      "Implemented dynamic rendering and efficient state management for smooth user experience.",
      "Improved performance via lazy loading, code splitting, and asset optimization.",
      "Applied budget-aware engineering — used EmailJS for contact forms and CDN-based static assets for cost-efficient deployment.",
      "Ensured accessibility, cross-browser compatibility, and clean Git workflows throughout.",
    ],
  },
];

const EDUCATION = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Amity University",
    duration: "2023 - 2026",
    description:
      "Pursuing BCA with a CGPA of 8.4, expected graduation July 2026. Focused on full-stack development, AI/ML, and database management. Completed CS50x (Harvard), TCS iON RIO-125 (AI/ML), Oracle AI Foundations Associate, and GFG160 DSA Challenge.",
  },
  {
    title: "High School — HSC (12th Grade)",
    institution: "Thakur College of Science and Commerce",
    duration: "2020 - 2022",
    description:
      "Completed HSC under Maharashtra State Board with 72%. Majored in PCM with Computer Science, gaining strong fundamentals in C++ and low-level computing (Intel 8085 microprocessor). Simultaneously pursued a MERN stack web development course online.",
  },
  {
    title: "Secondary School — SSC (10th Grade)",
    institution: "Sardar Vallabhbhai Patel Vidyalaya",
    duration: "2018 - 2020",
    description:
      "Discovered my passion for Computer Science here. Built my first HTML & CSS webpage, which sparked everything. Also developed leadership, communication, and teamwork skills through school activities.",
  },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "REST APIs",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "NLP",
      "BERT",
      "HuggingFace",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation (F1, Precision, Recall)",
    ],
  },
  {
    title: "Core CS",
    items: [
      "DSA",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
      "SDLC",
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "Git",
      "GitHub",
      "Figma",
      "Docker",
      "EmailJS",
      "CDN Optimization",
      "Lazy Loading",
      "Code Splitting",
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function EducationTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.2, 1, 0.2],
  );
  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-100px", "0px", "100px"],
  );

  return (
    <div
      id="aboutme"
      ref={containerRef}
      className="bg-[#000b1e] w-screen relative py-24 text-white"
    >
      <SolarSystem />

      {/* ── About Me ── */}
      <div className="px-5 lg:px-24 py-5 lg:py-1 text-center">
        <h2 className="uppercase text-4xl lg:text-8xl font-bold">About ME</h2>
        <p className="lg:w-3/4 mx-auto text-xl lg:text-2xl text-stone-300 mt-8 leading-relaxed ">
          Hey, I'm <span className="text-white font-semibold">Kashish</span> — a
          full-stack developer and AI/ML enthusiast based in Mumbai who
          genuinely enjoys the grind. I've built everything from QR-based
          identity systems and NLP pipelines powered by BERT, to real-time video
          apps, Airbnb clones, and stock dashboards — and every project has
          taught me something new (sometimes at 3 AM). My stack is MERN
          through and through, but I'm equally comfortable diving into Python
          for AI/ML work or squeezing out performance gains with lazy loading
          and code splitting. I've solved 300+ LeetCode problems not because I
          had to, but because problem-solving is genuinely fun to me. Currently
          finishing my BCA at Amity University with an 8.4 CGPA, certified by
          Harvard (CS50x), TCS, and Oracle — and ready to build things that
          actually matter. Clean code. Sharp UI. Real impact. Let's go!
        </p>

        {/* ── Skills Grid ── */}
        <h3 className="uppercase text-3xl lg:text-6xl font-bold mt-24 mb-2">
          Skills & Expertise
        </h3>
        <p className="text-stone-500 uppercase tracking-widest text-sm lg:text-base mb-12">
          What I bring to the table
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 lg:w-5/6 mx-auto text-left">
          {SKILL_GROUPS.map(({ title, items }) => (
            <div
              key={title}
              className="bg-[#111d32] rounded-2xl p-8 shadow-xl border border-stone-700 hover:border-stone-500 transition-colors duration-200"
            >
              <h4 className="text-white font-bold uppercase text-base tracking-widest mb-5 border-b border-stone-600 pb-3">
                {title}
              </h4>
              <ul className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="bg-[#1c2e4a] text-stone-200 text-lg font-medium px-4 py-2 rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Experience ── */}
      <h2 className="text-4xl lg:text-6xl font-bold text-center mt-32 mb-2 uppercase">
        Experience
      </h2>
      <p className="text-stone-500 uppercase tracking-widest text-sm lg:text-base text-center mb-12">
        Where I've shipped real work
      </p>
      <div className="relative w-full flex flex-col items-center px-5 lg:px-0">
        {EXPERIENCE.map(
          ({ role, company, duration, location, points }, index) => (
            <motion.div
              key={index}
              className="w-full max-w-5xl mb-12"
              style={{ opacity: opacityTransform }}
            >
              <div className="bg-[#111d32] text-white p-8 lg:p-12 rounded-2xl shadow-xl border border-stone-700">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-8">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold">{role}</h3>
                    <p className="text-xl text-stone-300 mt-1">{company}</p>
                  </div>
                  <div className="lg:text-right shrink-0">
                    <p className="text-base text-stone-400 italic">
                      {duration}
                    </p>
                    <p className="text-base text-stone-500 mt-1">{location}</p>
                  </div>
                </div>
                <ul className="space-y-4 text-stone-300 text-lg">
                  {points.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-stone-400 inline-block"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ),
        )}
      </div>

      {/* ── Education ── */}
      <h2 className="text-4xl lg:text-6xl font-bold text-center mt-24 mb-2 uppercase">
        My Education Journey
      </h2>
      <p className="text-stone-500 uppercase tracking-widest text-sm lg:text-base text-center mb-12">
        The road that got me here
      </p>
      <div className="relative w-full flex flex-col items-center mt-4">
        <div className="absolute w-1 bg-stone-600 h-full left-1/2 transform -translate-x-1/2"></div>
        {EDUCATION.map(
          ({ title, institution, duration, description }, index) => (
            <motion.div
              key={index}
              className={`flex w-full max-w-5xl mb-12 relative ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              style={{ opacity: opacityTransform, x: xTransform }}
            >
              <div className="bg-[#111d32] text-white p-8 lg:p-10 rounded-2xl w-[82%] shadow-xl border border-stone-700">
                <h3 className="text-2xl lg:text-3xl font-bold leading-snug">
                  {title}
                </h3>
                <p className="text-xl text-stone-300 mt-2">{institution}</p>
                <p className="text-base text-stone-500 italic mt-1">
                  {duration}
                </p>
                <p className="mt-5 text-lg text-stone-300 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
}
