import "./Projects.css";

export default function Projects() {
  return (
    <div id="projects-section">
    <section className="project-tile">
        <a href="https://codepen.io/tashe-stefacek/full/NWMxWdb" target="_blank" rel="noopener noreferrer">
        <figure>
            <img className="project-img" src="registrationForm.png" alt="registration form thumbnail"></img>
        </figure>
        </a>
        <a className="project-link" href="https://codepen.io/tashe-stefacek/full/NWMxWdb" target="_blank" rel="noopener noreferrer">
        <figcaption>Registration Form</figcaption>
        </a>
    </section>
    <section className="project-tile">
        <a href="https://codepen.io/tashe-stefacek/full/JjeQKxq" target="_blank" rel="noopener noreferrer">
        <figure>
            <img className="project-img" src="technicalDocumentation.png" alt="technical documentation page thumbnail"></img>
        </figure>
        </a>
        <a className="project-link" href="https://codepen.io/tashe-stefacek/full/JjeQKxq" target="_blank" rel="noopener noreferrer">
        <figcaption>Technical Documentation</figcaption>
        </a>
    </section>
    <section className="project-tile">
        <a href="https://codepen.io/tashe-stefacek/full/poVRqgv" target="_blank" rel="noopener noreferrer">
        <figure>
            <img className="project-img" src="balanceSheet.png" alt="balance sheet thumbnail"></img>
        </figure>
        </a>
        <a className="project-link" href="https://codepen.io/tashe-stefacek/full/poVRqgv" target="_blank" rel="noopener noreferrer">
        <figcaption>Balance Sheet</figcaption>
        </a>
    </section>
    </div>
  );
}
