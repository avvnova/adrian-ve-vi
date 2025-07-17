<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Adrian Velez Villanueva | Software Engineer</title>
  {"{"}/* Stylesheets*/{"}"}
  <link href="./styles.css" rel="stylesheet" type="text/css" media="all" />
  {"{"}/* Favicons */{"}"}
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="assets/icons/avv-apple-touch-icon-180x180.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="assets/icons/avv-32x32.png"
  />
  <div className="crt">
    <div className="background-image" />
    <header>
      {"{"}/* Navbar */{"}"}
      <div id="navbar-container" style={{ display: "inline" }}>
        <ul className="navbar">
          {"{"}/* make this a top bar, where hovering reveals a sub-list list of
          things for each one*/{"}"}
          <li>
            <a href="#about" className="navbar-section">
              About
            </a>
          </li>
          <li>
            <a href="#professional" className="navbar-section">
              Professional
            </a>
          </li>
          <li>
            <a href="#hobbies" className="navbar-section">
              Hobbies
            </a>
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
    {"{"}/*button class="burger-menu" id="burger-menu"&gt;&lt;--ion-icon
    class="bars" name="menu-outline"&gt;&lt;--/ion-icon&gt;&lt;--/button&gt;*/
    {"}"}
    {"{"}/*{"{"}/* Main Section */{"}"}
    <section className="content" id="about">
      <div className="bio-container">
        {"{"}/* Section 1: Bio */{"}"}
        <div className="bio-content">
          <span className="bio-topper">bio-topper</span>
          <h2 className="bio-title">bio-title</h2>
          <div className="bio animate__animated animate__shakeX">
            <p className="bio-text">bio-text</p>
          </div>
          <picture className="cs-picture" id="artsy-picture">
            <source
              media="(min-width: 601px)"
              srcSet="assets/images/trianglehands.png"
            />
            <img
              loading="lazy"
              decoding="async"
              src="assets/images/trianglehands.png"
              alt="art_image"
              width={608}
              height={406}
            />
          </picture>
        </div>
        <div className="cs-stats-group">
          <picture className="cs-picture" id="prof-picture">
            <source
              media="(min-width: 601px)"
              srcSet="assets/images/headshot.png"
            />
            <img
              loading="lazy"
              decoding="async"
              src="assets/images/headshot.png"
              alt="headshot"
              width={608}
              height={688}
            />
          </picture>
          <ul className="cs-stats">
            <li className="cs-stat">
              <img
                src="assets/icons/icons8-musical-notes-50.png"
                loading="lazy"
                decoding="async"
                alt="art-icon"
                className="bio-icon"
              />
              <span className="cs-desc">Code</span>
            </li>
            <li className="cs-stat">
              <img
                src="assets/icons/icons8-code-50.png"
                loading="lazy"
                decoding="async"
                alt="cse-icon"
                className="bio-icon"
              />
              <span className="cs-desc">Art</span>
            </li>
            <li className="cs-stat">
              <img
                src="assets/icons/icons8-design-50.png"
                loading="lazy"
                decoding="async"
                alt="dsg-icon"
                className="bio-icon"
              />
              <span className="cs-desc">Design</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  {"{"}/* Social accounts{"}"}
  <div className="socials">
    <a href="https://linktr.ee/adrian_velvil" target="_blank">
      <img
        src="assets/icons/linktree.png"
        alt="Linktree"
        loading="lazy"
        className="socicon"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/adrian-velez-villanueva/"
      target="_blank"
    >
      <img
        src="assets/icons/linkedin.png"
        alt="Linkedin"
        loading="lazy"
        className="socicon"
      />
    </a>
    <a href="https://github.com/avvnova" target="_blank">
      <img
        src="assets/icons/github.png"
        alt="Github"
        loading="lazy"
        className="socicon"
      />
    </a>
  </div>
  {"{"}/* Footer section */{"}"}
  <footer>
    <p className="copy">© Copyright 2024</p>
    <p className="copy">
      Built by
      <a href="https://github.com/avvnova" target="_blank">
        Adrian Velez Villanueva (avvnova)
      </a>
      <br />
      Resources and Boilerplate by
      <a href="https://twitter.com/koladechris" target="_blank">
        Kolade Chris (Ksound)
      </a>
      <br />
      Icons by{" "}
      <a href="https://icons8.com/" target="_blank">
        Icons8
      </a>
      <a href="https://lordicon.com/">Icons by Lordicon.com</a>
    </p>
  </footer>
  {"{"}/* Website scripts */{"}"}
  {"{"}/* Ion icons scripts */{"}"}
</>
