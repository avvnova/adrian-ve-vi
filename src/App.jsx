import { useState } from 'react';
import './App.css';
import './LandingPage.css'; // Assuming you have a separate CSS file for the landing page styles
import MainSite from './MainSite';

// App is the root component that manages whether to show the landing page or the main site
function App() {
  // State to control whether the main site is shown
  const [showMain, setShowMain] = useState(false);
  // State to track which section to show first in the main site
  const [section, setSection] = useState('about');

  // Handler for entering the main site, sets the initial section
  const handleEnter = (sectionName) => {
    setSection(sectionName);
    setShowMain(true);
  };

  // If showMain is true, render the main site with the selected section
  if (showMain) {
    return <MainSite initialSection={section} />;
  }

  // Otherwise, render the landing page
  return (
    <div
      className="landing-page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1>Welcome to Adrian Velez Villanueva's Website</h1>
      {/* Button to enter the main site, defaults to 'about' section */}
      <button
        style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1.2rem' }}
        onClick={() => handleEnter('about')}
      >
        Enter
      </button>
    </div>
  );
}

export default App;
