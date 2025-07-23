import React from 'react';
import './Header.css';
import userIcon from '../assets/user-icon.png';

export default function Header() {
  return (
    <header className="header">
      <button className="login-btn" onClick={() => {/* navigate to login later */}}>
        <img src={userIcon} alt="user icon" className="user-icon" />
        <span>Login</span>
      </button>
    </header>
  );
}