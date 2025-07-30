import { useState } from 'react';
import './index.css';
import StyledButton from './Button';
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
        backgroundImage: 'url("src/assets/Waterfall Background.gif")',
        backgroundSize: 'contain',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1 style={{ fontFamily: "Balgruf" }}>Adrian Velez Villanueva</h1>
      {/* Button to enter the main site, defaults to 'about' section */}
      <StyledButton 
        label="Enter Main Site"
        onClick={() => handleEnter('about')}
      >
        Enter
      </StyledButton>
    </div>
  );
}

export default App;
