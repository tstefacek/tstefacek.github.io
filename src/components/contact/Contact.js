import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export default function Contact() {
  return (
    <section id="contact-section">
      <a className="contact-link" href="https://github.com/tstefacek"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="contact-icon"/>Email</a>  
      <a className="contact-link" href="https://forms.gle/ceAdCeEmTgYwiy5s9" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2xl" className="contact-icon"/>Github</a>      
      <a className="contact-link" href="https://www.linkedin.com/in/tashe-stefacek/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2xl" className="contact-icon" />Linkedin</a>
    </section>
  );
}