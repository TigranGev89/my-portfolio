import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";
import CognaizeLogo from "../assets/cognaize.png";
import JurAmLogo from "../assets/jurAm.png";
import MinistryLogo from "../assets/mes.png";

const Experience = () => {
	const [expanded, setExpanded] = useState(null);

	const toggleExpand = (index) => {
		setExpanded((prev) => (prev === index ? null : index));
	};

	const experiences = [
		{
			role: "Software Engineer",
			duration: "Jun 2022 - Present",
			company: "Cognaize, Yerevan",
			logo: CognaizeLogo,
			shortDetail: "Developing AI-powered solutions for financial data analysis.",
			link: 'https://www.cognaize.com/',
			name: 'Cognaize',
			fullDetail: `Cognaize specializes in automating unstructured data for the financial services industry using hybrid intelligence. Its AI models help institutions process financial data with high precision, improving risk assessment and decision-making.`,
		},
		{
			role: "Freelance Developer",
			duration: "Jan 2022 - Aug 2022",
			company: "Jur.am, Yerevan",
			logo: JurAmLogo,
			link: 'https://jur.am/',
			name: 'Jur.am',
			shortDetail: "Designed and developed a responsive e-commerce platform.",
			fullDetail: `Jur.am is an Armenian online platform specializing in e-commerce and delivery services, with a modern web-based ordering system that enhances user experience and efficient delivery tracking.`,
		},
		{
			role: "Senior Instructor",
			duration: "Nov 2013 - June 2022",
			company: "Ministry of Emergency Situations of RA, Yerevan",
			logo: MinistryLogo,
			link: 'https://mia.gov.am/',
			name: 'MES of RA',
			shortDetail: "Led disaster risk reduction training and crisis management programs.",
			fullDetail: `The Rescue Service of Armenia, under the Ministry of Emergency Situations, focused on disaster management, emergency response, and public safety. It managed regional rescue centers and preparedness training programs.`,
		},
	];

	return (
		<div className="bg-white text-black dark:bg-black dark:text-white text-center py-16 transition-colors" id="experience">
			<h2 className="text-4xl font-bold mb-8">
				My{" "}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
					Experience
				</span>{" "}
				in Development
			</h2>

			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
				className="flex justify-center mb-12"
			>
				<div className="text-center bg-gray-300 dark:bg-gray-800 rounded-full p-4 max-w-[22rem] shadow-md">
					<h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
						4+
					</h3>
					<p className="text-gray-700 dark:text-gray-300">Years Experience</p>
				</div>
			</motion.div>

			<p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
				Discover my professional experience in software development and beyond.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
				{experiences.map((exp, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, delay: index * 0.2 }}
						className={`relative bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-8 rounded-xl shadow-lg h-[22rem] w-[95%] md:w-[95%] lg:w-[100%] flex flex-col justify-between transition-all duration-500 hover:scale-105 hover:shadow-2xl mx-auto ${expanded === index ? "h-auto" : "h-[22rem] overflow-hidden"
							}`}
					>
						<div>
							<div className="flex items-center justify-center space-x-4 mb-4">
								<img
									src={exp.logo}
									alt={`${exp.company} Logo`}
									className="w-16 h-16 object-contain rounded-lg "
								/>
								<div className="text-left">
									<h3 className="text-xl font-bold">{exp.role}</h3>
									<p className="text-gray-500 dark:text-gray-400">{exp.duration}</p>
								</div>
							</div>
							<p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
								{expanded === index ?
									exp.fullDetail

									: <>{exp.shortDetail}
										<a
											href={exp?.link}
											target="_blank"
											rel="noopener noreferrer"
											className="pt-6 inline-block text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
										>
											Link to {exp?.name} official website 🔗
										</a>	</>}
							</p>
						</div>

						<button
							onClick={() => toggleExpand(index)}
							className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
						>
							{expanded === index ? <FaTimes /> : <FaPlus />}
						</button>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Experience;
