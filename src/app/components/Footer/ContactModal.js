import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFileDownload,
  FaTimes,
} from "react-icons/fa";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 transition-opacity duration-300">
      <div
        className="relative shadow-xl rounded-3xl p-8 max-w-lg w-full transition-transform transform scale-100 border-8 border-transparent"
        style={{
          background:
            "url('/noise.png'), radial-gradient(circle, #fdfbfa, #e8dfd0)", // Soft paper gradient
          borderImage: "url('/sand-texture.png') 20% stretch", // Sand-like frame texture
          borderRadius: "25px",
          borderWidth: "10px",
          borderStyle: "solid",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)", // Soft depth effect
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
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          This was me, Kashish Maurya. Until next time! You reached the end...
          or is it just the beginning?✨
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/KashishMaurya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-gray-700 hover:text-black transition-all duration-200"
              size={32}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kashish-maurya-24b0712b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-blue-600 hover:text-blue-800 transition-all duration-200"
              size={32}
            />
          </a>
          <a
            href="mailto:kashishmaurya.1803@gmail.com?subject=Let's%20Connect!&body=Hi%20Kashish,%20I%20found%20your%20portfolio%20and%20would%20love%20to%20chat!"
            className="text-red-500 hover:text-red-700 transition-all duration-200"
          >
            <FaEnvelope size={32} />
          </a>
        </div>

        {/* Download Resume Button */}
        <a
          href="/your-resume.pdf" // Replace with your actual resume file
          download
          className="block text-center bg-gray-900 hover:bg-gray-700 text-white py-3 rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2"
        >
          <FaFileDownload size={20} />
          Download Resume
        </a>

        {/* Thank You Message */}
        <p className="mt-6 text-center text-gray-600">
          Thanks for stopping by! Hope to connect soon. ❤ <br />
          {/* <b>-KASHISH MAURYA</b> */}
        </p>
      </div>
    </div>
  );
}
