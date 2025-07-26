import { useState } from 'react';
import './App.css';
import './LandingPage.css'; // Assuming you have a separate CSS file for the landing page styles
import MainSite from './MainSite';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [section, setSection] = useState('about');

  const handleEnter = (sectionName) => {
    setSection(sectionName);
    setShowMain(true);
  };

  if (showMain) {
    return <MainSite initialSection={section} />;
  }

  return (
    <div className="landing-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Welcome to Adrian Velez Villanueva's Website</h1>
      <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1.2rem' }} onClick={() => handleEnter('about')}>
        Enter
      </button>
    </div>
  );
}

export default App;
