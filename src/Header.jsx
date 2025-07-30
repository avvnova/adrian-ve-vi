import './layout.css'
import {Menu} from '@mui/base'; // for header and footer
import React from 'react';

export default function Header() {
  return (
    <header className="base-bar">
      <div className="logo">My App</div>
      <nav className="nav-links">
        <Menu></Menu>
      </nav>
    </header>
  );
}