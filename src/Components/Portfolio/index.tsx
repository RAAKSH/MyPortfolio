import { useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import Resume from "../../assets/Raksha_C_new.pdf";
import { AboutMe } from "../AboutMe/index";
import { TypeWriter } from "../TypeWriter";
import { Projects } from '../Projects';
import { Skills } from "../Skills";

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode 
            ? "dark bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white" 
            : "bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-gray-900"}
          >

            <div className={`flex justify-between items-center p-4  transition-all duration-300 
                      ${darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-gray-900"}`}>

                <div className="flex ml-auto space-x-6 m-3">
                    <a href="#about"
                        className="hover:text-blue-500 transition-transform duration-300 transform hover:scale-110">
                        👩🏻‍🦰About Me
                    </a>
                    <a href="#skills"
                        className="hover:text-blue-500 transition-transform duration-300 transform hover:scale-110">
                        💻Skills
                    </a>
                    <a href="#projects"
                        className="hover:text-blue-500 transition-transform duration-300 transform hover:scale-110">
                        📃Projects
                    </a>
                </div>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-md transition-all duration-300"
                >
                    {darkMode ? (
                        <SunIcon className="h-6 w-6 text-yellow-400" />
                    ) : (
                        <MoonIcon className="h-6 w-6 text-gray-700" />
                    )}
                </button>


            </div>


            <header className="flex flex-col items-center justify-center h-screen text-center">
                <motion.h2
                    className="text-4xl font-bold block"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-sans">Hi There !<span className="wave" role="img" aria-labelledby="wave">
                        👋🏻,
                    </span></p>
                    <div className="p-2 font-sans"> I'm <strong className="p-2 m-3 font-serif">Raksha C</strong></div>
                </motion.h2>
                <motion.p
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >

                    A passionate Frontend Developer with 3.5 years of experience building scalable and user-friendly applications.
                </motion.p>
                <TypeWriter darkMode={darkMode} />
                <div className="m-2 pt-2 flex justify-between">
                    <button className="p-2 m-2 rounded-md transition-all duration-300 bg-blue-950 text-white hover:bg-blue-600 flex items-center">
                        <AiOutlineDownload className="mr-2 text-xl" />
                        <a href={Resume} target="_blank" >
                            Download CV
                        </a>
                    </button>
                </div>


                <div className="flex gap-4 mt-4">
                    <a href="https://github.com/RAAKSH?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl hover:text-gray-500 transition-colors duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/raksha-chandrashekar-29061993r/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors duration-300" />
                    </a>
                </div>
            </header>


            <section className="p-10" id="projects">
                <h3 className="text-3xl font-semibold text-center mb-6">Projects</h3>

                <Projects mode={darkMode} />
            </section>
            <section id="skills" className="p-10 mt-10 flex justify-start">
                <Skills mode={darkMode} />
            </section>
            <section id="about" className="p-10 mt-10">
                <AboutMe darkMode={darkMode} />
            </section>




        </div>
    );
}
