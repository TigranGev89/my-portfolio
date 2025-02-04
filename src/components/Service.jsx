import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Crafting modern, visually stunning, and user-friendly web interfaces with a focus on UX/UI principles.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building highly responsive, interactive, and performance-optimized web applications using modern frameworks like React.",
  },
  {
    id: 3,
    title: "UI/UX Design Implementation",
    description: "Translating Figma, Sketch, or Adobe XD designs into pixel-perfect and fully functional web applications.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Developing end-to-end web solutions with a strong focus on seamless frontend-backend integration.",
  },
  {
    id: 5,
    title: "State Management & API Integration",
    description: "Implementing efficient state management using Redux, Redux Toolkit (RTK), and optimizing API interactions with RTK Query for seamless data fetching.",
  },
  {
    id: 6,
    title: "UI Component Libraries & Styling",
    description: "Building elegant and responsive UIs with Material-UI (MUI) and Bootstrap, ensuring consistency and accessibility across web applications.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div 
      className="bg-white text-black dark:bg-black dark:text-white pt-28 transition-colors relative"
      id="service"
    >
      {/* Background Animation Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-30 animate-float"></div>

      <div className="container mx-auto px-12 md:px-20 lg:px-32">
        <h2 
          className="text-5xl font-bold text-center mb-16" 
          data-aos="fade-down"
        >
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative group bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 
              p-8 rounded-xl shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl 
              hover:border hover:border-green-500/30 dark:hover:border-blue-400/30 min-h-[22rem] flex flex-col justify-center"
              data-aos="fade-up"
              data-aos-delay={index * 150} // Staggered animation
            >
              {/* Service Title */}
              <h3
                className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r 
                from-green-400 to-blue-500 transition-all duration-500 group-hover:scale-105 text-center"
              >
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-lg text-center">{service.description}</p>

              {/* Decorative Hover Effect */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-green-400/10 
                opacity-0 group-hover:opacity-20 transition-opacity duration-700 backdrop-blur-sm rounded-xl"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
