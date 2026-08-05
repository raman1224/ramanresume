import { useEffect, useState, lazy, Suspense } from "react"

import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

// Code splitting sections below the fold
const Hero = lazy(() => import("./components/Hero"))
const Skills = lazy(() => import("./components/Skills"))
const About = lazy(() => import("./components/About"))
const Experience = lazy(() => import("./components/Experience"))
const Projects = lazy(() => import("./components/Projects"))
const Education = lazy(() => import("./components/Education"))
const Contact = lazy(() => import("./components/Contact"))

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
