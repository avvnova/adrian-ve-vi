import './layout.css';
import {Tooltip} from '@mui/base'; // for  footer elements
import React from 'react';

export default function Footer() {
  return (
    <footer className="base-bar">
      <div>&copy; 2025 My Company</div>
      <div className="nav-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </div>
    </footer>
  );
}