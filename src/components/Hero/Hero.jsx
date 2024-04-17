import CanvasBackground from "../CanvasBackground/CanvasBackground";
import BallAnimation from "../BallAnimation/BallAnimation";
import AnimatedHeroText from "../AnimatedHeroText/AnimatedHeroText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <CanvasBackground />
      <BallAnimation />
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold xl:text-9xl lg:text-8xl md:text-7xl sm:text-7xl xs:text-5xl flex flex-col justify-center items-start gap-2 z-20 text-fuchsia-600">
        <div className="sm:m-0 xs:ms-6">MULTI-</div>
        <div className="sm:ml-40 xs:ml-20">DISCIPLINED</div>
        <AnimatedHeroText />
        <p className=" text-base font-normal max-w-md text text-gray-600  xs:m-5 sm:ml-0">
          Based in Germany, I have nurtured a deep passion for crafting
          beautiful and intuitive digital experiences.
        </p>
        <motion.a
          href="mailto:anilozsoy@gmail.com"
          className=" text-base font-normal px-6 py-3 bg-emerald-400 rounded-md sm:self-end xs:self-start mt-0  xs:ml-6  text-white hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact me
        </motion.a>
      </div>
    </div>
  );
}
