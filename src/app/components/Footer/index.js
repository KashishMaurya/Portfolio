import { useState, useRef } from "react";
import ContactModal from "./ContactModal";
import Mountains from "./Mountains";
import { motion } from "framer-motion";
import Flip from "../Text/Flip";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const circleRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleMouseEnter = () => {
    const ele = circleRef.current;
    ele.style.top = "0";
  };

  const handleMouseLeave = () => {
    const ele = circleRef.current;
    ele.style.top = "100%";
  };

  const phrases = [
    ["Contact Me", "Stay Connected"],
    ["Say Hello", "Let's Chat"],
    ["Drop a Message", "I'm Online"],
    ["Start a Conversation", "Let's Connect"],
    ["Reach Me", "I'm Just a Click Away"],
    ["Work Together?", "Let's Build!"],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeText = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  };

  return (
    <div
      id="sayhello"
      className="relative w-screen h-screen flex flex-col items-center p-20 overflow-hidden"
      style={{
        background:
          "url('/noise.png'), linear-gradient(#9fb1ad 10%, #def2e5 50%)",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Contact Button */}
      <motion.div
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        onClick={openModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer overflow-hidden w-56 h-56 rounded-full flex justify-center items-center text-xl font-bold uppercase text-stone-900 transition-all"
        style={{
          background:
            "url('/noise.png'), radial-gradient(circle, #fff9e8, #ffffff)",
          backgroundRepeat: "round",
        }}
      >
        <div
          ref={circleRef}
          className="h-full w-full absolute pointer-events-none top-full rounded-full transition-[400]"
          style={{
            backgroundImage:
              "url('/noise.png'), radial-gradient(circle, #fff9e8, #ffcdd7)",
            backgroundRepeat: "round",
          }}
        ></div>
        <Flip
          text1={phrases[currentIndex][0]}
          text2={phrases[currentIndex][1]}
          lineHeight={"h-5"}
          onClick={changeText}
        />
      </motion.div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Background */}
      <Mountains />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-gray-800 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-all"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}
