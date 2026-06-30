import portfolioResume from "../assets/colleen-murray-resume-new.pdf";
import "../styles/Resume.css";
import resumeScreenshot from "../assets/colleen-murray-resume-screenshot.png";

function Resume() {
  return (
    <div className="skills-container">
      <div className="resume-columns">
        <div className="skills" id="technical-skills">
          <h3>Technical Skills</h3>
          <span className="skill-cell">React.js</span>
          <span className="skill-cell">TypeScript</span>
          <span className="skill-cell">JavaScript</span>
          <span className="skill-cell">Flutter</span>
          <span className="skill-cell">GraphQL</span>
          <span className="skill-cell">Apollo Client</span>
          <span className="skill-cell">Next.js</span>
          <span className="skill-cell">Material UI</span>
          <span className="skill-cell">Jest</span>
          <span className="skill-cell">Playwright</span>
          <span className="skill-cell">Node.js</span>
          <span className="skill-cell">Dart</span>
          <span className="skill-cell">SQL</span>
          <span className="skill-cell">Jira</span>
          <span className="skill-cell">Postman</span>
          <span className="skill-cell">Git</span>
        </div>

        <div className="resume-image">
          <img src={resumeScreenshot} alt="resume" />
          <a
            href={portfolioResume}
            target="_blank"
            className="submit-btn resume-download"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="skills" id="soft-skills">
          <h3>Other Strengths</h3>
          <span className="skill-cell">Adaptable</span>
          <span className="skill-cell">Customer-Focused</span>
          <span className="skill-cell">Self-Motivated</span>
          <span className="skill-cell">Quick Learner</span>
          <span className="skill-cell">Collaborative</span>
          <span className="skill-cell">Team Player</span>
          <span className="skill-cell">Leadership Experience</span>
          <span className="skill-cell">Growth Mindset</span>
        </div>
      </div>
    </div>
  );
}

// idea for this page: if you hover over or click on a skill
// a modal will pop up with all the relevant experience for that skill
export default Resume;
