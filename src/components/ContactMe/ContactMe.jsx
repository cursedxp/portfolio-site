import RevealAnimation from "../RevealAnimation/RevealAnimation";
import { motion } from "framer-motion";
export default function ContactMe() {
  return (
    <section className="flex flex-col text-gray-800 items-center">
      <div className="p-6">
        <h3 className="text-sm font-bold text-fuchsia-500 text-center">
          What is next?
        </h3>
        <RevealAnimation>
          <h1 className="xl:text-6xl md:text-5xl sm:text-4xl xs:text-4xl font-bold leading-tight text-center">
            Get in touch
          </h1>
          <p className="my-8 px-6 text-base text-gray-600 max-w-3xl text-center">
            I’m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
        </RevealAnimation>
      </div>
      <div className="flex flex-col gap-4">
        <motion.a
          href="mailto:anilozsoy@gmail.com"
          className=" text-base font-normal px-6 py-3 bg-emerald-400 rounded-md sm:self-end xs:self-start mt-0  xs:ml-6  text-white hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}
