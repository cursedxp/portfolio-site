import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
export default function RevealAnimation({ children, width = "100%" }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, y: 0 });
      slideControls.start({ left: "100%" });
    }
  });

  return (
    <div ref={ref} className={`relative overflow-hidden ${width}`}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 h-full bg-gray-800"
        style={{ width: "100%" }}
        initial={{ left: 0 }}
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      ></motion.div>
    </div>
  );
}
