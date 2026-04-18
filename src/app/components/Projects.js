import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "<u>CareConnect</u> <br/> QR-Based Digital Identity System",
    description:
      "A QR-based digital identity platform for secure user data retrieval and management.\nKey Features:\n- User registration & secure data storage\n- QR code generation & scanning for instant ID retrieval\n- Structured validation & error handling\n- Scalable architecture for real-world usability\n\nTech Stack:\n- MERN Stack (MongoDB, Express.js, React, Node.js)\n- QR code libraries for generation & scanning\n- JWT & Bcrypt for authentication\n- Tailwind CSS for styling",
    img: "/project_img/care-connect.png",
    websiteUrl: "https://care-connect-sand-five.vercel.app/",
  },
  {
    title: "<u>Wanderlust</u> <br/> Full-Stack Airbnb Clone",
    description:
      "A feature-rich full-stack rental platform where users can browse, list, and review vacation stays.\nKey Features:\n- User authentication & authorization\n- CRUD listings with image uploads\n- Review & rating system\n- REST API integration with MVC architecture\n\nTech Stack:\n- MERN Stack (MongoDB, Express.js, React, Node.js)\n- Cloudinary for image uploads\n- JWT & Bcrypt for authentication\n- Tailwind CSS & modular routing",
    img: "/project_img/wanderlust.png",
    websiteUrl: "https://wanderlust-k06z.onrender.com/listings",
  },
  {
    title: "Emotion Sentiment <br/> Analysis (AI/ML)",
    description:
      "An NLP pipeline that classifies emotions from text using a fine-tuned BERT model.\nKey Features:\n- Fine-tuned BERT on HuggingFace datasets\n- Text preprocessing & feature encoding\n- Data batching for efficient training\n- Evaluated using Precision, Recall & F1-score\n\nTech Stack:\n- Python · HuggingFace Transformers\n- BERT · Tokenizers · Trainer API\n- Pandas & NumPy for preprocessing\n- Scikit-learn for evaluation metrics",
    img: "/project_img/emotion.png",
    websiteUrl:
      "https://github.com/KashishMaurya/Automate-Emotional-Analysis-of-Textual-Comments-and-Feedback",
  },
  {
    title: "Check out more projects <br/> on my GitHub",
    description:
      "These are just the highlights — there's more where that came from.\n\nOther builds include:\n- Stalk Stock (Zerodha) \n- BitMeet (Zoom) \n- AI Chef \n- Amazon, Miranda, Spotify, Netflix (Website Clone)  \n\nAll projects focus on clean code, reusable components, performance optimization, and real-world usability.\n\nHead to my GitHub to explore everything I've shipped so far.",
    img: "/project_img/image.png",
    websiteUrl: "https://github.com/KashishMaurya",
  },
];

const Card = ({
  i,
  title,
  description,
  img,
  url,
  color,
  websiteUrl,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      id="projects"
      ref={container}
      className="w-screen h-screen pointer-events-none flex justify-center items-center sticky top-0"
    >
      <motion.div
        className="relative h-2/3 w-full rounded-xl px-5"
        style={{
          scale,
          top: `calc(5vh + ${i * 30}px)`,
        }}
      >
        <div className="-translate-y-20 lg:translate-y-0 lg:grid grid-cols-3 lg:h-full shadow-[0_0px_50px_-15px_#354340] rounded-xl">
          <div className="flex flex-col justify-between text-stone-900 bg-stone-100 rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl h-full">
            <h2 className="px-10 py-5 lg:p-10 uppercase text-4xl font-bold lg:text-7xl">
              <p dangerouslySetInnerHTML={{ __html: title }} />
            </h2>
          </div>
          <div className="h-64 lg:h-full w-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
              }}
              className="h-full"
            ></motion.div>
          </div>
          <div className="flex flex-col justify-between rounded-b-xl lg:rounded-r-xl bg-stone-100 text-stone-900 uppercase font-bold">
            <p className="p-7" style={{ whiteSpace: "pre-line" }}>
              {description}
            </p>
            <div className="w-full px-10 py-5 bg-stone-900 rounded-bl-xl lg:rounded-bl-none rounded-br-xl cursor-pointer relative">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase text-3xl text-stone-200 z-30 pointer-events-auto"
              >
                View Project 
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Products() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      id="products"
      ref={containerRef}
      className={`w-screen relative rounded-t-3xl py-10 lg:py-20`}
      style={{
        background:
          "url('/noise.png'), linear-gradient(#000b1e, #f5f5f4, #9fb1ad)",
        backgroundRepeat: "round",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex justify-center sticky top-0">
        {"Projects".split("").map((char, index) => (
          <div
            key={index}
            className="text-5xl lg:text-[150px] text-white font-bold flex flex-col uppercase overflow-hidden"
          >
            <motion.span
              key={index}
              initial={{ transform: "translateY(50%)" }}
              whileInView={{ transform: "translateY(0%)" }}
              transition={{
                duration: 1,
                delay: 0.1 * index,
                type: "spring",
              }}
            >
              {char}
            </motion.span>
          </div>
        ))}
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
