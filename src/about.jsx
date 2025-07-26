export default function About() {
  return (
    <section className="skills" id="skills">
      <h2 className="skill-header">My Top Skills</h2>
      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          {/* loading="lazy" means the image only loads when we scroll to it */}
          <img
            src="assets/icons/icons8-python.svg"
            alt="Python"
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-css.svg"
            alt="CSS"
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-js.svg"
            alt="JavaScript"
            loading="lazy"
            className="icon icon-card"
          />
        </div>
        <div className="second-set animate__animated animate__pulse">
          <img
            src="assets/icons/icons8-c.svg"
            alt="C"
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/java-svgrepo-com.svg"
            alt="Java"
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="assets/icons/icons8-git.svg"
            alt="Git"
            loading="lazy"
            className="icon icon-card"
          />
        </div>
      </div>
    </section>
  );
}
