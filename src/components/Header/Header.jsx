import { useState, useRef, useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
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
      <div className="absolute z-10 top-4 left-4 flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-gray-600">
            Hi there, 👋 I am
            <span className="font-bold text-emerald-500"> Anil</span>
          </span>
          <span className="text-gray-600 text-xs">
            Frontend Developer/UX Designer
          </span>
        </div>
        {/* Social icons or personal logos can be added here */}
      </div>
      <nav className="fixed z-20 top-5 right-5 flex justify-between items-center">
        <div className="flex gap-4 items-center" ref={menuRef}>
          {!showMenu && (
            <motion.div
              whileHover={{ rotate: 360, duration: 2 }}
              className="p-4 bg-white rounded-full shadow-xl cursor-pointer"
              onClick={handleMenu}
            >
              <img src={BurgerIcon} width={32} height={32} alt="Menu Icon" />
            </motion.div>
          )}

          {showMenu && (
            <div className="bg-white p-4 rounded-md shadow-xl z-50">
              <ul className="flex flex-col gap-3 text-gray-800">
                <li>
                  <Link
                    to="aboutme"
                    className=" cursor-pointer"
                    smooth={true}
                    duration={1000}
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <Link
                    to="techstack"
                    className=" cursor-pointer"
                    smooth={true}
                    duration={1000}
                  >
                    Techstack
                  </Link>
                </li>
                <li>
                  <Link
                    to="experience"
                    className=" cursor-pointer"
                    smooth={true}
                    duration={1000}
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="portfolio"
                    className=" cursor-pointer"
                    smooth={true}
                    duration={1000}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="flex gap-2 rounded-md text-emerald-400">
                  <ArrowDownTrayIcon className="h-5 w-5 text-emerald-400" />
                  <Link to="resume" smooth={true} duration={1000}>
                    My Resume
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
