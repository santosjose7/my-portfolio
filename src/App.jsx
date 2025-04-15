import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? JSON.parse(stored) : false;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Jose</h1>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}><i className="fas fa-home"></i> Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}><i className="fas fa-user"></i> About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}><i className="fas fa-code"></i> Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}><i className="fas fa-envelope"></i> Contact</a></li>
        </ul>

        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </nav>

      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
