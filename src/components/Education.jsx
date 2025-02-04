import { motion } from "framer-motion";
import MicImage from "../assets/mic.png";
import SmartCode from "../assets/smartCode.png";
import CmsaImage from "../assets/cmsa.png";
import NpuaImage from "../assets/npua.png";

const Education = () => {
  const educationData = [
    {
      title: "Master's Degree in Crisis Management",
      institution: "Crisis Management National Academy of RA, Yerevan",
      duration: "Sep 2017 - Feb 2020",
      description: "Crisis Management",
      image: CmsaImage,
      link: "https://www.linkedin.com/in/tigran-gevorgyan-88257211b/overlay/education/499723514/multiple-media-viewer/?profileId=ACoAAB3ONWIBxYEjchPU5GHyzGXEBQSKPhG9WI0&treasuryMediaId=1711448693298",
    },
    {
      title: "Bachelor's Degree in Engineering",
      institution: "National Polytechnic University Of Armenia, Yerevan",
      description: "Engineering",
      duration: "Sep 2006 - Jun 2010",
      image: NpuaImage,
      link: "https://www.linkedin.com/in/tigran-gevorgyan-88257211b/overlay/education/422510462/multiple-media-viewer/?profileId=ACoAAB3ONWIBxYEjchPU5GHyzGXEBQSKPhG9WI0&treasuryMediaId=1711448488972",
    },
  ];

  const courses = [
    {
      title: "Computer Programming",
      institution: "SmartCode Development School",
      duration: "Sep 2021",
      description:
        "Frontend Bootcamp, including: Frontend Engineering (JavaScript, HTML5/CSS3, React, Redux), Node.js Basics, UX/UI Design, Git, GitHub",
      image: SmartCode,
      link: "https://www.linkedin.com/in/tigran-gevorgyan-88257211b/details/education/1007690507/multiple-media-viewer/?profileId=ACoAAB3ONWIBxYEjchPU5GHyzGXEBQSKPhG9WI0&treasuryMediaId=1723819994395",
    },
    {
      title: "Computer Programming",
      institution: "Microsoft Innovation Center Armenia",
      duration: "Oct 2020",
      description: "Studying HTML, CSS, JavaScript, and introduction to Web Development",
      image: MicImage,
      link: "https://www.linkedin.com/in/tigran-gevorgyan-88257211b/details/education/1007689459/multiple-media-viewer/?profileId=ACoAAB3ONWIBxYEjchPU5GHyzGXEBQSKPhG9WI0&treasuryMediaId=1723819503941",
    },
  ];

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white text-center py-16 transition-colors" id="education">
      <h2 className="text-4xl font-bold mb-8">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Education
        </span>{" "}
        &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          Courses
        </span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        Explore my academic achievements and professional courses.
      </p>

      <div className="flex flex-col lg:flex-row gap-12 px-8 max-w-7xl mx-auto">
        <div className="flex-1 space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-lg min-h-[300px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain rounded-full" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.institution}</p>
              {item.description && <p className="text-gray-500 dark:text-gray-300 mt-4 text-sm">{item.description}</p>}
              <p className="text-gray-500 dark:text-gray-400 mt-2">{item.duration}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                View Diploma
              </a>
            </motion.div>
          ))}
        </div>

        <div className="flex-1 space-y-8">
          {courses.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-lg min-h-[300px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <img src={item.image} alt={item.title} className="w-full h-full rounded-full" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.institution}</p>
              {item.description && <p className="text-gray-500 dark:text-gray-300 mt-1 text-sm">{item.description}</p>}
              <p className="text-gray-500 dark:text-gray-400 mt-2">{item.duration}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
