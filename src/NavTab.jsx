import top_bar from './assets/Wider Top Bar.png'; 
function NavTab({ onClick, activeTab }) {
  return (
    <div className="nav-tab">
      <img src={top_bar} alt="Top Bar" className="top-bar" />
      <div className="nav-buttons">
        <button
          className={`nav-button ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => onClick('about')}
        >
          About
        </button>
        <button
          className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => onClick('projects')}
        >
          Projects
        </button>
        <button
          className={`nav-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => onClick('contact')}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
export default NavTab;