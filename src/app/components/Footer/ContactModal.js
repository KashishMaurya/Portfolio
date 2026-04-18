import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaTimes,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// 🔁 Replace YOUR_GOOGLE_DRIVE_FILE_ID with your actual Drive file ID
const RESUME_DRIVE_LINK =
  "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 transition-opacity duration-300">
      <div
        className="relative shadow-xl rounded-3xl p-8 max-w-lg w-full transition-transform transform scale-100"
        style={{
          background:
            "url('/noise.png'), radial-gradient(circle, #fdfbfa, #e8dfd0)",
          borderImage: "url('/sand-texture.png') 20% stretch",
          borderRadius: "25px",
          borderWidth: "10px",
          borderStyle: "solid",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200"
          onClick={onClose}
        >
          <FaTimes size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 text-center leading-snug">
          This was me, Kashish Maurya. Until next time!{" "}
          <br className="hidden lg:block" />
          You reached the end… or is it just the beginning? ✨
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-7 mb-8">
          <a
            href="https://github.com/KashishMaurya"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-gray-700 hover:text-black transition-all duration-200 hover:scale-125"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/kashish-maurya-24b0712b6/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-blue-600 hover:text-blue-800 transition-all duration-200 hover:scale-125"
          >
            <FaLinkedin size={32} />
          </a>

          <a
            href="https://leetcode.com/u/kashish-18/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
            className="text-orange-500 hover:text-orange-700 transition-all duration-200 hover:scale-125"
          >
            <SiLeetcode size={32} />
          </a>

          <a
            href="mailto:kashishmaurya.1803@gmail.com?subject=Let's%20Connect!&body=Hi%20Kashish,%20I%20found%20your%20portfolio%20and%20would%20love%20to%20chat!"
            title="Email"
            className="text-red-500 hover:text-red-700 transition-all duration-200 hover:scale-125"
          >
            <FaEnvelope size={32} />
          </a>
        </div>

        {/* Download Resume */}
        <div className="flex gap-3">
          <a
            href="/Kashish_Maurya_Resume.pdf"
            target="_blank"
            className="flex-1 text-center border bg-gray-900 border-gray-800 py-3 rounded-xl hover:bg-gray-700 transition"
          >
            View Resume
          </a>

          <a
            href="/Kashish_Maurya_Resume.pdf"
            download
            className="flex-1 text-center bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Portfolio link */}
        <p className="mt-4 text-center text-sm text-gray-500">
          <a
            href="https://portfolio-kashish-fawn.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-800 transition-colors duration-200"
          >
            portfolio-kashish-fawn.vercel.app
          </a>
        </p>

        {/* Thank You */}
        <p className="mt-6 text-center text-gray-600 text-base">
          Thanks for stopping by! Hope to connect soon. ❤
        </p>
      </div>
    </div>
  );
}
