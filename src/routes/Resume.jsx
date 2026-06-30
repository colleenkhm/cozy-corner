import portfolioResume from "../assets/colleen-murray-resume-new.pdf";
import "../styles/Resume.css";
import resumeScreenshot from "../assets/colleen-murray-resume-screenshot.png";

function Resume() {
  return (
    <div className="skills-container">
      <div className="resume-columns">
        <div className="skills" id="technical-skills">
          <h3>Technical Skills</h3>
          <div className="list-item">React.js</div>
          <div className="list-item">TypeScript</div>
          <div className="list-item">JavaScript</div>
          <div className="list-item">Flutter</div>
          <div className="list-item">GraphQL</div>
          <div className="list-item">Apollo Client</div>
          <div className="list-item">Next.js</div>
          <div className="list-item">Material UI</div>
          <div className="list-item">Jest</div>
          <div className="list-item">Playwright</div>
          <div className="list-item">Node.js</div>
          <div className="list-item">Dart</div>
          <div className="list-item">SQL</div>
          <div className="list-item">Jira</div>
          <div className="list-item">Postman</div>
          <div className="list-item">Git</div>
        </div>

        <div className="resume-image">
          <img src={resumeScreenshot} alt="resume" />
          <div className="resume-link">
            <a
              href={portfolioResume}
              target="_blank"
              className="resume-link"
              rel="noopener noreferrer"
            >
              Download Resume Here
            </a>
          </div>
        </div>

        <div className="skills" id="soft-skills">
          <h3>Other Strengths</h3>
          <div className="list-item">Adaptable</div>
          <div className="list-item">Customer-Focused</div>
          <div className="list-item">Self-Motivated</div>
          <div className="list-item">Quick Learner</div>
          <div className="list-item">Collaborative</div>
          <div className="list-item">Team Player</div>
          <div className="list-item">Leadership Experience</div>
          <div className="list-item">Growth Mindset</div>
        </div>
      </div>
    </div>
  );
}

// idea for this page: if you hover over or click on a skill
// a modal will pop up with all the relevant experience for that skill
export default Resume;
