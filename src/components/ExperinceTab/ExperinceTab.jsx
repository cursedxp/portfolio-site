import { useState } from "react";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import { motion } from "framer-motion";

export default function ExperinceTab({ id }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div id={id} className="flex flex-col text-gray-800">
      <div className="flex flex-col p-6">
        <h3 className=" text-sm font-bold text-fuchsia-500">Experience</h3>
        <RevealAnimation>
          <h1 className="xl:text-6xl md:text-5xl sm:text-4xl xs:text-4xl font-bold leading-tight ">
            Professional Experience
          </h1>
        </RevealAnimation>
        <RevealAnimation>
          <p className="my-8 text-base text-gray-600 max-w-3xl">
            My career in UX design and front-end development has been marked by
            significant roles across various esteemed companies. Below is an
            overview of the places where I have honed my skills and contributed
            to impactful projects
          </p>
        </RevealAnimation>
      </div>
      <div className="flex xl:flex-row xs:flex-col lg:flex-row md:flex-row">
        <div className="xl:w-1/4 lg:w-1/4 xs:w-full md:w-1/4">
          <ul className="flex xl:flex-col xs:flex-row lg:flex-col md:flex-col xs:bg-slate-100 xl:bg-white font-bold text-base">
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center gap-4 p-4 xs:p-3  hover:bg-emerald-100 cursor-pointer hover:shadow-lg ${
                activeTab === 0 ? "bg-fuchsia-100" : ""
              }`}
              onClick={() => handleTabChange(0)}
            >
              <div className=" h-8 w-8 bg-fuchsia-500 rounded-full xs:hidden"></div>
              Freelance
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05, shadow: "md" }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center gap-4 p-4 xs:p-3 hover:bg-emerald-100 cursor-pointer hover:shadow-lg ${
                activeTab === 1 ? "bg-fuchsia-100" : ""
              }`}
              onClick={() => handleTabChange(1)}
            >
              <svg viewBox="0 0 233.5036 299.2473" width={32} height={32}>
                <path
                  fill="#0088d9"
                  d="m3.2586,183.3815c-1.8164,0-3.2511,1.5166-3.186,3.3318,2.2422,62.5308,53.6438,112.534,116.7208,112.534s114.4609-49.9995,116.708-112.5251c.0655-1.8212-1.3744-3.3428-3.1968-3.3428h-61.4946c-1.6359,0-3.0456,1.3377-3.1738,2.9686-1.9853,25.2469-23.0869,45.1171-48.8428,45.1171-30.9024,0-43.3981-26.2411-43.4004-26.2454-3.9867-7.5129-5.149-14.8374-5.4791-18.9333-.1327-1.6465-1.5241-2.907-3.1759-2.9069l-61.4794.002Z"
                />
                <path
                  fill="#ff932c"
                  d="m194.9433,18.1224l-127.1606,70.3098v74.6428s129.1503-71.4139,129.1503-71.4139c1.6934-.9363,2.7441-2.7185,2.7441-4.6531V20.9143c0-2.4296-2.6076-3.9675-4.7339-2.7919Z"
                />
                <path
                  fill="#e32851"
                  d="m67.7827,3.1956c0-2.529-2.8019-4.0526-4.9246-2.6779L2.4268,39.6535c-1.5132.98-2.4268,2.66-2.4268,4.4629v115.7729c0,1.7594,1.4263,3.1857,3.1857,3.1857h64.597V3.1956Z"
                />
              </svg>
              trivago
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center gap-4 p-4 xs:p-3  hover:bg-emerald-100 cursor-pointer hover:shadow-lg  ${
                activeTab === 2 ? "bg-fuchsia-100" : ""
              }`}
              onClick={() => handleTabChange(2)}
            >
              <svg
                width={32}
                height={32}
                viewBox="100 100 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M231.287 450.612C237.601 456.733 233.139 467.221 224.173 467.221H168.06C156.989 467.221 147.98 458.488 147.98 447.756V393.358C147.98 384.666 158.799 380.341 165.113 386.462L231.287 450.612Z"
                  fill="#0A1551"
                />
                <path
                  d="M319.003 454.845C302.393 438.343 302.394 411.589 319.003 395.088L378.947 335.535C395.557 319.033 422.486 319.033 439.096 335.535C455.705 352.036 455.705 378.79 439.096 395.292L379.152 454.845C362.542 471.346 335.613 471.346 319.003 454.845Z"
                  fill="#FFB629"
                />
                <path
                  d="M160.64 305.204C144.031 288.703 144.031 261.949 160.64 245.447L261.52 145.155C278.129 128.653 305.059 128.653 321.669 145.155C338.278 161.656 338.278 188.41 321.669 204.912L220.789 305.204C204.179 321.705 177.25 321.705 160.64 305.204Z"
                  fill="#0099FF"
                />
                <path
                  d="M243.108 376.686C226.498 360.185 226.498 333.43 243.108 316.929L379.414 181.511C396.024 165.009 422.953 165.009 439.563 181.511C456.173 198.012 456.173 224.766 439.563 241.268L303.256 376.686C286.647 393.187 259.717 393.187 243.108 376.686Z"
                  fill="#FF6100"
                />
              </svg>
              Jotform
            </motion.li>
          </ul>
        </div>
        <div className="flex flex-col xl:w-3/4 lg:w-3/4 md:w-3/4 xs:w-full xl:p-8 lg:p-8 md:p-8 xs:p-8  shadow-md bg-white">
          {activeTab === 0 && (
            <div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">
                  Freelance Frontend Developer
                </h3>
                <p className=" text-emerald-500">2023 - Present</p>
              </div>
              <div>
                <p className="my-6">
                  As a freelance developer, I have worked on a variety of
                  projects, ranging from small business websites to large
                  e-commerce platforms. I have experience with HTML, CSS,
                  JavaScript, React, and other frontend technologies.
                </p>
                <ul className="flex flex-col list-disc px-4 gap-y-4">
                  <li>
                    Transitioned from UX Design to Fullstack Dev in 6-month
                    Ironhack bootcamp. Mastered JS, HTML, CSS, React, Node.js,
                    Express.js, MongoDB, with hands-on projects.
                  </li>
                  <li>
                    Integrated Redux in 2 projects, showcasing analysis and
                    cooperation in existing infrastructures in 3 months
                  </li>
                  <li>
                    Developed JavaScript backend infrastructure with Nodejs and
                    Express.js, reducing development time by 25% in 2 weeks
                  </li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">
                  Senior Experience Designer
                </h3>
                <p className=" text-emerald-500">2019 - 2023</p>
              </div>
              <div>
                <p className="my-6">
                  At trivago, I was responsible for designing user interfaces
                  for trivago Business Studio, a platform that helps hoteliers
                  manage their online presence. I worked closely with product
                  managers, developers, and other designers to create a
                  user-centered design that met the needs of our users.
                </p>
                <ul className="flex flex-col list-disc px-4 gap-y-4">
                  <li>
                    Designed a new trivago Business Studio product from initial
                    concept to launch resulting in a 14% increase in user
                    engagement over a period of 6 months
                  </li>
                  <li>
                    Created a comprehensive design system within a span of 9
                    months, resulting in a measured improvement of consistency
                    and usability across all trivago Business Studio products.
                  </li>
                  <li>
                    In 3 months, developed user experience prototypes for the
                    new trivago Business Studio that increased user engagement
                    and reduced development time by 30%.
                  </li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">
                  Experience Designer - Team Lead
                </h3>
                <p className=" text-emerald-500">2017 - 2019</p>
              </div>
              <div>
                <p className="my-6">
                  At JotForm, I led a team of developers to create engaging user
                  experiences for JotForm users. I worked closely with product
                  managers and developers to ensure that our designs were
                  implemented correctly and met the needs of our users.
                </p>
                <ul className="flex flex-col list-disc px-4 gap-y-4">
                  <li>
                    Led team of 6 to integrate new form type into JotForm in 4
                    months , successfully boosting user engagement by 8%.
                  </li>
                  <li>
                    Within 3 months, steered production team`s workflow for
                    efficient, on-time delivery of new JotForm feature,
                    resulting in a 15% improvement in project efficiency
                  </li>
                  <li>
                    In a 6-month period, designed engaging JotForm UI/UX,
                    leading to a 20% rise in user interaction via micro
                    animations and transitions.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
