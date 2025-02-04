import React, { useState, useEffect } from "react";
import {
	FaSun,
	FaMoon,
	FaBars,
	FaTimes,
	FaUser,
	FaBriefcase,
	FaGraduationCap,
	FaCogs,
	FaProjectDiagram,
	FaEnvelope,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
	const { darkMode, toggleTheme } = useTheme();
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("#home");

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1040) {
				setMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleNavClick = (section) => {
		setActiveSection(section);
		setMenuOpen(false);
	};

	return (
		<nav
			className="fixed top-0 left-0 w-full bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 
      backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-md dark:shadow-gray-900 
      text-black dark:text-white px-4 lg:px-24 py-3 z-50 transition-all"
		>
			<div className="flex justify-between items-center">
				{/* Logo */}
				<div className="text-2xl font-bold">Tigran</div>

				{/* Desktop Menu */}
				<div className="hidden lg:flex space-x-6 items-center">
					{[
						{ href: "#home", label: "Home" },
						{ href: "#about", label: "About" },
						{ href: "#experience", label: "Experience" },
						{ href: "#education", label: "Education" },
						{ href: "#service", label: "Services" },
						{ href: "#project", label: "Projects" },
						{ href: "#contact", label: "Contact" },
					].map((item) => (
						<a
							key={item.href}
							href={item.href}
							className={`hover:text-gray-500 dark:hover:text-gray-400 ${activeSection === item.href
									? "text-blue-500 dark:text-green-400" 
									: "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-green-400"
								}`}
							onClick={() => handleNavClick(item.href)}
						>
							{item.label}
						</a>
					))}

					<button
						onClick={toggleTheme}
						className="bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center gap-2 
            px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
					>
						{darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-200" />}
						{darkMode ? "Light Mode" : "Dark Mode"}
					</button>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex items-center lg:hidden">
					<button
						className="text-2xl p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none"
						onClick={toggleMenu}
					>
						{menuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>

				{/* Mobile Dropdown Menu */}
				{menuOpen && (
					<div
						className="absolute top-[56px] right-0 bg-white dark:bg-gray-900 
            shadow-lg dark:shadow-xl border border-gray-300 dark:border-gray-700 
            rounded-md py-4 px-4 w-20 flex flex-col items-center space-y-6 z-50"
					>
						{[
							{ href: "#about", icon: <FaUser /> },
							{ href: "#experience", icon: <FaBriefcase /> },
							{ href: "#education", icon: <FaGraduationCap /> },
							{ href: "#service", icon: <FaCogs /> },
							{ href: "#project", icon: <FaProjectDiagram /> },
							{ href: "#contact", icon: <FaEnvelope /> },
						].map((item) => (
							<a
								key={item.href}
								href={item.href}
								className={`flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-green-400 text-xl ${activeSection === item.href
										? "text-blue-800 dark:text-green-400"
										: ""
									}`}
								onClick={() => handleNavClick(item.href)}
							>
								{item.icon}
							</a>
						))}

						<button
							onClick={toggleTheme}
							className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-110 transition-transform"
						>
							{darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-200" />}
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
