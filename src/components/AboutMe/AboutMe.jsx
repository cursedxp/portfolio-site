import RevealAnimation from "../RevealAnimation/RevealAnimation";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
export default function AboutMe({ id }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, x: 0 });
    }
  });

  return (
    <div
      id={id}
      className="flex xl:flex-row  md:flex-row sm:flex-col xs:flex-col xl:p-4 sm:p-8 md:p-4"
    >
      <div className="flex-1 flex-col px-6 md:px-2 ">
        <h3 className=" text-sm font-bold text-fuchsia-500">About me</h3>
        <RevealAnimation>
          <h1 className="xl:text-6xl md:text-5xl sm:text-4xl xs:text-4xl font-bold xl:leading-tight md:leading-snug text-gray-800">
            <RevealAnimation>
              <span>My</span>
            </RevealAnimation>
            <RevealAnimation>
              <span>development - </span>
              <RevealAnimation>
                <span>design odyssey</span>
              </RevealAnimation>
            </RevealAnimation>
          </h1>
        </RevealAnimation>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 75 }}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex-1 p-6 text-base text-gray-600"
      >
        <p className="mb-4">
          Hello! I'm a dedicated professional with a robust background in UX
          design, seamlessly transitioned into front-end web development. My
          journey in tech began with creating intuitive and visually appealing
          user experiences, which naturally led me to the mechanics of how users
          interact with these designs on the web.
        </p>
        <p className="mb-4">
          With proficiency in HTML, CSS, JavaScript, and key frameworks and
          technologies like React, Node.js, Express.js, and MongoDB, I am
          skilled at bringing designs to life with clean, efficient code. My
          combined experience in UX and front-end development allows me to craft
          websites that not only look great but also perform seamlessly,
          ensuring a fantastic user experience from start to finish.
        </p>
        <p>
          I am passionate about using my skills to solve problems and build
          innovative web solutions that meet user needs. Whether working on a
          team or independently, I strive to push the boundaries of web
          technology to create impactful digital experiences.
        </p>
      </motion.div>
    </div>
  );
}
