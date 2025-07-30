// MainSite.jsx
// This component contains the main site content previously in index.jsx

import { useState } from 'react';
import { Sidebar, // for quests 
  
   Modal,
    ClickAwayListener} from '@mui/base';
import About from './About';
import Professional from './Professional';
import Hobbies from './Hobbies';

// MainSite is the top-level component for the main content area.
// It manages which section (About, Professional, Hobbies) is displayed.
function MainSite({ initialSection = 'about' }) {
  // State to track the currently selected section
  const [section, setSection] = useState(initialSection);

  // Determine which panel/component to render based on the selected section
  let Panel;
  if (section === 'about') Panel = About;
  else if (section === 'professional') Panel = Professional;
  else if (section === 'hobbies') Panel = Hobbies;
  else Panel = () => <div />; // fallback empty panel

  return (
    <div className="crt">
      {/* Background image overlay */}
      <div className="background-image" />
      <header>
        {/* Navigation bar for switching sections */}
        <div id="navbar-container" style={{ display: 'inline' }}>
          <ul className="navbar">
            <li>
              {/* Button to show About section */}
              <button
                className="navbar-section"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => setSection('about')}
              >
                About
              </button>
            </li>
            <li>
              {/* Button to show Professional section */}
              <button
                className="navbar-section"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => setSection('professional')}
              >
                Professional
              </button>
            </li>
            <li>
              {/* Button to show Hobbies section */}
              <button
                className="navbar-section"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => setSection('hobbies')}
              >
                Hobbies
              </button>
            </li>
          </ul>
        </div>
      </header>
      <main style={{ width: '100%' }}>
        {/* Sidebar (currently only one item) */}
        <div id="sidebar-container">
          <ul className="sidebar">
            <li>one</li>
          </ul>
        </div>
        {/* Main content area where the selected panel is rendered */}
        <section className="content" style={{ minHeight: '400px' }}>
          <Panel />
        </section>
      </main>
      {/* Social media links */}
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
      {/* Footer with credits and copyright */}
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
