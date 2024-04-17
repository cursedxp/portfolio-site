import { useState, useRef, useEffect } from "react";
import {
  ArrowDownTrayIcon,
  CommandLineIcon,
  BuildingOffice2Icon,
  RectangleStackIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import BurgerIcon from "../../assets/icon-hamburger.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        console.log("Outside click detected");
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      console.log("Cleanup - Removing event listeners");
    };
  }, []);

  return (
    <header>
      <div className="absolute z-30 top-4 left-4 flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-gray-600">
            Hi there, 👋 I am
            <span className="font-bold text-emerald-500"> Anil</span>
          </span>
          <span className="text-gray-600 text-xs">
            Frontend Developer/UX Designer
          </span>
        </div>
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/in/anilozsoy/" target="_blank">
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="Linkedin"
            />
          </a>
          <a href="https://github.com/cursedxp" target="_blank">
            <img
              src="https://img.icons8.com/color/48/000000/github.png"
              alt="github.com/cursedxp"
            />
          </a>
        </div>
      </div>
      <nav
        ref={menuRef}
        className="fixed z-20 top-5 right-5 flex justify-between items-center"
      >
        {!showMenu && (
          <motion.div
            whileHover={{ rotate: 360, duration: 2 }}
            className=" bg-white rounded-full shadow-xl cursor-pointer"
            onClick={handleMenu}
          >
            <img
              src={BurgerIcon}
              width={32}
              className="m-4"
              height={32}
              alt="Menu Icon"
            />
          </motion.div>
        )}
        {showMenu && (
          <div className="bg-white rounded-md shadow-xl z-50 w-48">
            <ul className="flex flex-col w-full text-gray-800">
              <li className=" flex rounded-t-md  hover:bg-emerald-500 hover:text-white">
                <Link
                  to="aboutme"
                  className="cursor-pointer  p-4 flex items-center gap-2 "
                  smooth={true}
                  duration={1000}
                >
                  <IdentificationIcon className="h-5 w-5" />
                  About me
                </Link>
              </li>
              <li className="flexitems-center hover:bg-emerald-500 hover:text-white">
                <Link
                  to="techstack"
                  className=" cursor-pointer  p-4 flex items-center gap-2"
                  smooth={true}
                  duration={1000}
                >
                  <CommandLineIcon className="h-5 w-5" />
                  Techstack
                </Link>
              </li>
              <li className=" hover:bg-emerald-500 hover:text-white">
                <Link
                  to="experience"
                  className=" cursor-pointer p-4 flex items-center gap-2"
                  smooth={true}
                  duration={1000}
                >
                  <BuildingOffice2Icon className="h-5 w-5" />
                  Experience
                </Link>
              </li>
              <li className=" hover:bg-emerald-500 hover:text-white">
                <Link
                  to="portfolio"
                  className="  cursor-pointer p-4 flex items-center gap-2"
                  smooth={true}
                  duration={1000}
                >
                  <RectangleStackIcon className="h-5 w-5" />
                  Portfolio
                </Link>
              </li>
              <li className="flex gap-2 rounded-b-md text-emerald-400 hover:bg-emerald-500 hover:text-white">
                <a
                  href="../../../public/AnilOzsoy_Resume.pdf"
                  download="AnilOzsoy_Resume.pdf"
                  className="cursor-pointer p-4 flex items-center gap-2"
                >
                  <ArrowDownTrayIcon className="h-5 w-5 hover:text-white" />
                  My Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
