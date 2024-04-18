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
    {
      title: "SmallFresh",
      description: "Online shopping application",
      url: "https://smallfresh.netlify.app/",
      imageUrl: "/smallfresh.netlify.app.png",
    },
    {
      title: "Single Page Developer Portfolio",
      description: "Visually appealing and responsive web application",
      url: "https://cursedxp.github.io/single-page-developer-portfolio/",
      imageUrl: "/cursedxp.github.io_single-page-developer-portfolio.png",
    },
    {
      title: "Product feedback application",
      description:
        "User-friendly responsive web app for streamlined feedback management.",
      url: "https://cursedxp.github.io/product-feedback-app/",
      imageUrl: "/cursedxp.github.io_product-feedback-app.png",
    },
    {
      title: "Jobs Board Application",
      description: "The Jobs Board Application is a responsive web platform",
      url: "https://cursedxp.github.io/devjobs-web-app/",
      imageUrl: "/cursedxp.github.io_devjobs-web-app.png",
    },
  ];

  return (
    <section id={id} className="flex flex-col text-gray-800">
      <div className="p-6">
        <h3 className="text-sm font-bold text-fuchsia-500">Projects</h3>
        <RevealAnimation>
          <h1 className="xl:text-6xl md:text-5xl sm:text-4xl xs:text-4xl font-bold leading-tight">
            Portfolio
          </h1>
          <p className="my-6 text-base text-gray-600 max-w-3xl">
            Welcome to my portfolio, a curated showcase of my most notable
            projects front-end development. Each project is a testament to my
            ability to blend aesthetic design with functional technology,
            creating seamless digital experiences that engage and delight users.
          </p>
        </RevealAnimation>
      </div>

      <div className="flex flex-row xs:flex-col sm:flex-row xs:justify-center xs:items-center xs:gap-4 flex-wrap xl:gap-10 lg:gap-8 md:gap-2 sm:gap-4 px-8 sm:px-4 justify-center">
        {portfolioItems.slice(0, displayCount).map((item, index) => (
          <motion.a
            ref={ref}
            initial={{ opacity: 0 }}
            animate={mainControls}
            transition={{ delay: 0.3 * index }}
            key={index}
            href={item.url}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div className="relative bg-gray-800 text-white xl:h-[500px] xl:w-[320px] lg:h-[500px] lg:w-[300px] md:h-[360px] md:w-[240px] sm:h-[360px] sm:w-[240px] xs:h-[360px] xs:w-[240px]  shadow-lg">
              <div
                className="absolute inset-0  z-0 "
                style={{
                  imageRendering: "optimizeQuality",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundImage: `url(${
                    item.imageUrl || "https://picsum.photos/400/600"
                  })`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
              </div>
              <div className="absolute bottom-0 z-10 p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.a>
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
            <div className="border-t border-dashed border-emerald-500 w-full xs:hidden sm:block"></div>
          </div>
        </div>
      )}
    </section>
  );
}
