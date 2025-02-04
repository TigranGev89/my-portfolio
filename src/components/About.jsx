import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import AboutImageLight from "../assets/aboutme-image.png";
import AboutImageDark from "../assets/aboutme-image-dark.png";
import UsaFlag from "../assets/usa-flag.png";
import RussiaFlag from "../assets/russia-flag.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiMui, SiMongodb } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    { skill: "HTML", icon: <FaHtml5 className="text-red-500 w-8 h-8" />, proficiency: "90%" },
    { skill: "CSS", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" />, proficiency: "80%" },
    { skill: "JavaScript", icon: <FaJs className="text-yellow-500 w-8 h-8" />, proficiency: "90%" },
    { skill: "TypeScript", icon: <SiTypescript className="text-blue-500 w-8 h-8" />, proficiency: "85%" },
    { skill: "React", icon: <FaReact className="text-blue-400 w-8 h-8" />, proficiency: "90%" },
    { skill: "Redux", icon: <SiRedux className="text-purple-500 w-8 h-8" />, proficiency: "85%" },
    { skill: "Material-UI", icon: <SiMui className="text-blue-700 w-8 h-8" />, proficiency: "80%" },
    { skill: "Bootstrap", icon: <FaBootstrap className="text-purple-600 w-8 h-8" />, proficiency: "75%" },
    { skill: "Tailwind", icon: <SiTailwindcss className="text-teal-400 w-8 h-8" />, proficiency: "70%" },
    { skill: "GitHub", icon: <FaGithub className="text-gray-700 w-8 h-8" />, proficiency: "80%" },
    { skill: "Node.js", icon: <FaNodeJs className="text-green-600 w-8 h-8" />, proficiency: "65%" },
    { skill: "MongoDB", icon: <SiMongodb className="text-green-600 w-8 h-8" />, proficiency: "65%" },
  ];

  const languages = [
    { language: "English", proficiency: "85%", flag: UsaFlag },
    { language: "Russian", proficiency: "85%", flag: RussiaFlag },
  ];

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white py-20 transition-colors" id="about">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          <img
            src={darkMode ? AboutImageDark : AboutImageLight}
            alt="Tigran Gevorgyan"
            className="w-72 h-100 rounded object-cover mb-8 md:mb-0 transition-all duration-300"
            data-aos="zoom-in"
          />
          <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              I am a software engineer with extensive experience in developing, testing, and deploying web applications using React.js.
              Proficient in front-end frameworks, including Material-UI and Bootstrap. Skilled in state management with RTK Query,
              and creating responsive interfaces. Known for clean, testable code and collaboration with cross-functional teams.
              Enthusiastic and adaptable, always eager to learn new technologies.
            </p>

            <h3
              className="text-2xl font-bold text-center text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500 mb-6"
              data-aos="fade-right"
            >
              Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map(({ skill, icon, proficiency }, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="mb-2">{icon}</div>
                  <h4 className="text-base md:text-lg font-bold mb-2 text-gray-800 dark:text-gray-200 truncate">
                    {skill}
                  </h4>
                  <div className="relative w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
                    <div
                      className="absolute bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-700"
                      style={{ width: proficiency }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <h3
              className="text-2xl font-bold text-center text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500 mt-12 mb-6"
              data-aos="fade-left"
            >
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {languages.map(({ language, proficiency, flag }, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <img src={flag} alt={`${language} Flag`} className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="text-base md:text-lg font-bold mb-2 text-gray-800 dark:text-gray-200 truncate">
                    {language}
                  </h4>
                  <div className="relative w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
                    <div
                      className="absolute bg-gradient-to-r from-yellow-400 to-red-500 h-2 rounded-full transition-all duration-700"
                      style={{ width: proficiency }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
