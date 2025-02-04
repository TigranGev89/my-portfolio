
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import { ThemeProvider } from "./context/ThemeContext"; 

function App() {

  return (
		<ThemeProvider>
			<div className="bg-white text-black dark:bg-black dark:text-white transition-colors">
        <Navbar />
        <Hero />
        <About />
				<Experience/>
				<Education/>
        <Service />
        <Projects />
        <Contact />
        <Footer />
    	</div>
		</ThemeProvider>
    
  )
}

export default App
