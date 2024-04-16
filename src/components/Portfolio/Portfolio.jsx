import { useState, useRef, useEffect } from "react";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Portfolio({ id }) {
  const [displayCount, setDisplayCount] = useState(3);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const handleDisplayCount = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1 });
    }
  });

  const portfolioItems = [
    { title: "Project 1", description: "Description for Project 1" },
    { title: "Project 2", description: "Description for Project 2" },
    { title: "Project 3", description: "Description for Project 3" },
    { title: "Project 4", description: "Description for Project 4" },
    { title: "Project 5", description: "Description for Project 5" },
    { title: "Project 6", description: "Description for Project 6" },
  ];

  return (
    <div id={id} className="flex flex-col text-gray-800">
      <div className="p-6">
        <h3 className="text-sm font-bold text-fuchsia-500">Projects</h3>
        <RevealAnimation>
          <h1 className="text-6xl font-bold leading-tight">Portfolio</h1>
          <p className="my-8 text-base text-gray-600 max-w-3xl">
            Welcome to my portfolio, a curated showcase of my most notable
            projects front-end development. Each project is a testament to my
            ability to blend aesthetic design with functional technology,
            creating seamless digital experiences that engage and delight users.
          </p>
        </RevealAnimation>
      </div>

      <div className="flex flex-wrap xl:gap-12 lg:gap-10 px-8 justify-center">
        {portfolioItems.slice(0, displayCount).map((item, index) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={mainControls}
            transition={{ delay: 0.3 * index }}
            key={index}
            className="flex-1 min-w-[30%] max-w-[30%] relative bg-yellow-500 shadow-lg"
          >
            <img src="https://picsum.photos/400/600" alt="" />
            <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black h-full w-full flex flex-col justify-end">
              <div className="p-4 text-white">
                <div className="font-bold mb-4">{item.title}</div>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {displayCount < portfolioItems.length && (
        <div className=" relative flex justify-center mt-16">
          <button
            onClick={handleDisplayCount}
            className="px-4 py-2 border-2 border-emerald-500 bg-white text-emerald-500 rounded-md"
          >
            Load More
          </button>
          <div className="absolute top-3 -z-10 left-0 w-full px-32 py-2">
            <div className="border-t border-dashed border-emerald-500 w-full"></div>
          </div>
        </div>
      )}
    </div>
  );
}
