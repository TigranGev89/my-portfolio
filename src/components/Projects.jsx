import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import weatherAppImage from "../assets/weather.png";
import cinemateAppImage from "../assets/cinemate.png";
import pizzaMenuImage from "../assets/pizza.png";

const projects = [
  {
    id: 1,
    name: "Weather App",
    image: weatherAppImage,
    github: "https://github.com/TigranGev89/weather-app",
  },
  {
    id: 2,
    name: "Cinemate App",
    image: cinemateAppImage,
    github: "https://github.com/TigranGev89/cinemate",
  },
  {
    id: 3,
    name: "Pizza Menu",
    image: pizzaMenuImage,
    github: "https://github.com/TigranGev89/Pizza",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div 
      className="bg-white text-black dark:bg-black dark:text-white py-20 transition-colors relative"
      id="project"
    >
      {/* Floating Background Animation */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/10 to-transparent opacity-30 animate-float"></div>

      <div className="container mx-auto px-12 md:px-20 lg:px-32">
        <h2 className="text-5xl font-bold text-center mb-16" data-aos="fade-down">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 
              p-8 rounded-lg  transition-transform transform hover:scale-110 hover:shadow-2xl 
             "
              data-aos="fade-up"
              data-aos-delay={index * 200} // Staggered appearance
            >
              {/* Image with Hover Zoom Effect */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-6 w-full h-64 object-cover transition-transform transform group-hover:scale-110 duration-700"
                />
              </div>

              {/* Project Name with Animated Gradient */}
              <h3
                className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r 
                from-green-400 to-blue-500 transition-all duration-500 group-hover:scale-105"
              >
                {project.name}
              </h3>

              {/* GitHub Link with Hover Glow Effect */}
              <a
                href={project.github}
                className="inline-block px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 
                text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-lg font-semibold cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
