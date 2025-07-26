// MainSite.jsx
// This component contains the main site content previously in index.jsx
import { useState } from 'react';
import About from './about';
import Professional from './professional';
import Hobbies from './hobbies';
import './styles.css';

function MainSite({ initialSection = 'about' }) {
  const [section, setSection] = useState(initialSection);

  let Panel;
  if (section === 'about') Panel = About;
  else if (section === 'professional') Panel = Professional;
  else if (section === 'hobbies') Panel = Hobbies;
  else Panel = () => <div />;

  return (
    <div className="crt">
      <div className="background-image" />
      <header>
        <div id="navbar-container" style={{ display: 'inline' }}>
          <ul className="navbar">
            <li>
              <button className="navbar-section" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setSection('about')}>About</button>
            </li>
            <li>
              <button className="navbar-section" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setSection('professional')}>Professional</button>
            </li>
            <li>
              <button className="navbar-section" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setSection('hobbies')}>Hobbies</button>
            </li>
          </ul>
        </div>
      </header>
      <main style={{ width: '100%' }}>
        <div id="sidebar-container">
          <ul className="sidebar">
            <li>one</li>
          </ul>
        </div>
        <section className="content" style={{ minHeight: '400px' }}>
          <Panel />
        </section>
      </main>
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
  );
}

export default MainSite;
