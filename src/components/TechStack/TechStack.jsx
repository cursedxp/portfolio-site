import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
export default function TechStack({ id }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, x: 0 });
    }
  });

  return (
    <section
      id={id}
      className="flex xl:flex-row lg:flex-row md:flex-row xs:flex-col text-gray-800 my-20 xs:p-6 sm:p-8 md:p-0 lg:p-0"
    >
      <div className="flex-1 flex-col lg:p-6 xl:p-6 md:p-5">
        <h3 className=" text-sm font-bold text-fuchsia-500">Techstack</h3>
        <RevealAnimation>
          <h1 className="xl:text-6xl md:text-5xl sm:text-4xl xs:text-4xl font-bold leading-tight ">
            Technologies <br></br> and tools
          </h1>
        </RevealAnimation>
        <RevealAnimation>
          <p className="my-6">
            In my toolkit, you'll find a carefully selected array of
            technologies and tools that I leverage to build seamless, effective
            web applications. Here’s a glimpse into some of the key tools I work
            with.
          </p>
        </RevealAnimation>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 75 }}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex-1 p-6 text-base text-gray-600 bg-gray-50 shadow-md"
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="font-bold text-2xl pb-6">Development</div>
            <div className="flex gap-8">
              <ul className="flex flex-col gap-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>NextJS</li>
                <li>NestJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Tailwind</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>Git</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className=" font-bold text-2xl pb-6">Design</div>
            <ul className="flex flex-col gap-2">
              <li>Figma</li>
              <li>Sketch</li>
              <li>Adobe XD</li>
              <li>Adobe Creative Cloud </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
