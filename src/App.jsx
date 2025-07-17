import { useState } from 'react';
import './App.css';
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
      <p>Select a section to enter:</p>
      <div style={{ display: 'flex', gap: '1rem', margin: '2rem 0' }}>
        <button onClick={() => handleEnter('about')}>About</button>
        <button onClick={() => handleEnter('professional')}>Professional</button>
        <button onClick={() => handleEnter('hobbies')}>Hobbies</button>
      </div>
    </div>
  );
}

export default App;
