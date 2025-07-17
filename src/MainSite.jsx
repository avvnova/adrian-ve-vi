// MainSite.jsx
// This component contains the main site content previously in index.jsx

function MainSite({ initialSection }) {
  // Optionally scroll to section after mount
  // You can enhance this with useEffect if you want smooth scrolling
  return (
    <>
      <div className="crt">
        <div className="background-image" />
        <header>
          <div id="navbar-container" style={{ display: "inline" }}>
            <ul className="navbar">
              <li>
                <a href="#about" className="navbar-section">About</a>
              </li>
              <li>
                <a href="#professional" className="navbar-section">Professional</a>
              </li>
              <li>
                <a href="#hobbies" className="navbar-section">Hobbies</a>
              </li>
            </ul>
          </div>
        </header>
        <main />
        <div id="sidebar-container">
          <ul className="sidebar">
            <li>one</li>
          </ul>
        </div>
        <section className="content" id="about">
          <div className="bio-container">
            <div className="bio-content">
              <span className="bio-topper">bio-topper</span>
              <h2 className="bio-title">bio-title</h2>
              <div className="bio animate__animated animate__shakeX">
                <p className="bio-text">bio-text</p>
              </div>
              <picture className="cs-picture" id="artsy-picture">
                <source media="(min-width: 601px)" srcSet="assets/images/trianglehands.png" />
                <img loading="lazy" decoding="async" src="assets/images/trianglehands.png" alt="art_image" width={608} height={406} />
              </picture>
            </div>
            <div className="cs-stats-group">
              <picture className="cs-picture" id="prof-picture">
                <source media="(min-width: 601px)" srcSet="assets/images/headshot.png" />
                <img loading="lazy" decoding="async" src="assets/images/headshot.png" alt="headshot" width={608} height={688} />
              </picture>
              <ul className="cs-stats">
                <li className="cs-stat">
                  <img src="assets/icons/icons8-musical-notes-50.png" loading="lazy" decoding="async" alt="art-icon" className="bio-icon" />
                  <span className="cs-desc">Code</span>
                </li>
                <li className="cs-stat">
                  <img src="assets/icons/icons8-code-50.png" loading="lazy" decoding="async" alt="cse-icon" className="bio-icon" />
                  <span className="cs-desc">Art</span>
                </li>
                <li className="cs-stat">
                  <img src="assets/icons/icons8-design-50.png" loading="lazy" decoding="async" alt="dsg-icon" className="bio-icon" />
                  <span className="cs-desc">Design</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="socials">
          <a href="https://linktr.ee/adrian_velvil" target="_blank" rel="noopener noreferrer">
            <img src="assets/icons/linktree.png" alt="Linktree" loading="lazy" className="socicon" />
          </a>
          <a href="https://www.linkedin.com/in/adrian-velez-villanueva/" target="_blank" rel="noopener noreferrer">
            <img src="assets/icons/linkedin.png" alt="Linkedin" loading="lazy" className="socicon" />
          </a>
          <a href="https://github.com/avvnova" target="_blank" rel="noopener noreferrer">
            <img src="assets/icons/github.png" alt="Github" loading="lazy" className="socicon" />
          </a>
        </div>
        <footer>
          <p className="copy">© Copyright 2024</p>
          <p className="copy">
            Built by
            <a href="https://github.com/avvnova" target="_blank" rel="noopener noreferrer">Adrian Velez Villanueva (avvnova)</a>
            <br />
            Resources and Boilerplate by
            <a href="https://twitter.com/koladechris" target="_blank" rel="noopener noreferrer">Kolade Chris (Ksound)</a>
            <br />
            Icons by{' '}
            <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a>
            <a href="https://lordicon.com/" target="_blank" rel="noopener noreferrer">Icons by Lordicon.com</a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default MainSite;
