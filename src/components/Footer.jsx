import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Joseph mokua. All rights reserved.</p>
        <div className="footer-links">
          <div className="footer-col">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          </div>
          <div className="footer-col">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />Whatsapp 
          </a>
          </div>
          <div className="footer-col">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> IG
          </a>
          <a href="#home">
            <FontAwesomeIcon icon={faArrowUp} /> Back to Top
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
