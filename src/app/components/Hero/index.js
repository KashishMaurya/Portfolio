import { motion } from "framer-motion";
import Link from "next/link";
import Waves from "./Waves";
import Clouds from "./Clouds";
import Mountains from "./Mountains";
import Sun from "./Sun";
import Underline from "../Text/Underline";
import Typing from "../Text/Typing";
import Flip from "../Text/Flip";

export default function Hero() {
  return (
    <div className="h-[150vh] w-screen relative">
      <div className="sticky top-0 grid grid-cols-2 lg:grid-cols-3 py-3 px-10">
        <div className="hidden lg:block z-10">
          <span className={`text-xl text-stone-800 uppercase`}>2025</span>
        </div>

        <h4
          className={`text-stone-800 text-xl lg:text-2xl font-bold uppercase z-10 lg:text-center`}
        >
          — Hello World
        </h4>

        <div className="flex gap-5 justify-between items-center lg:text-lg text-stone-800 font-bold uppercase z-10">
          <Underline
            text={
              <a className="text-center cursor-pointer" href="#aboutme">
                About Me
              </a>
            }
          ></Underline>

          <Underline
            text={
              <a className="text-center cursor-pointer" href="#projects">
                Projects
              </a>
            }
          ></Underline>

          <Underline
            text={
              <a className="text-center cursor-pointer" href="#sayhello">
                Say Hello
              </a>
            }
          ></Underline>
        </div>

        <div
          className="absolute top-0 w-screen h-[60vh]"
          style={{
            background:
              "linear-gradient(#bff1ff, #eefffe, #ffe7ea, #c0cad6 80%)",
          }}
        >
          <div
            width={100}
            height={100}
            className='w-full h-full bg-[url("/noise.png")] opacity-30 bg-repeat-round'
          ></div>
        </div>

        <Clouds />

        <Sun />

        <Mountains />
      </div>

      <div className="sticky top-5 lg:top-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-10 lg:left-20 top-5 lg:top-20 w-[30vw] z-10 text-stone-900"
        >
          <h4 className="uppercase font-bold text-6xl hidden lg:text-[110px] leading-tight lg:flex ">
            {"Kashish Maurya".split("").map((t, index) =>
              t === " " ? (
                <span key={index} className="w-8">
                  {"\u00A0"}
                </span> // Adds visible spacing
              ) : (
                <Flip
                  key={index}
                  text1={t}
                  text2={t}
                  lineHeight={"h-[1] lg:h-[120px]"}
                />
              )
            )}
          </h4>

          <div className="font-bold uppercase pr-2 lg:h-auto -mt-9 text-lg">
            <Typing text="Grateful for the Run | Learning, Evolving, Having Fun ❤" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-[42vw] flex flex-col items-start absolute right-0 top-5 lg:top-[28vh] text-stone-900"
        >
          <div className="font-bold uppercase pr-2 h-44 lg:h-3 text-lg ">
            <Typing text=" Turning Passion into Profession" />
          </div>

          <h4 className="uppercase font-bold text-6xl hidden lg:text-[75px] leading-tight tracking-tight lg:flex">
            {"full-stack developer".split("").map((t, index) =>
              t === " " ? (
                <span key={index} className="w-4 lg:w-6">
                  {"\u00A0"}
                </span> // Adds visible spacing
              ) : (
                <Flip
                  key={index}
                  text1={t}
                  text2={t}
                  lineHeight={"h-[1] lg:h-[100px]"} //
                />
              )
            )}
          </h4>
        </motion.div>
      </div>

      <Waves />
    </div>
  );
}
