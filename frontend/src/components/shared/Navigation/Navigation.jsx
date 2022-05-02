import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
      marginLeft: "10px",
      marginTop: "10px",
      fontSize: "30px",
    };

    return (
      <nav className={`${styles.navbar} container`}>
        <Link style={brandStyle} to="/">
          <img src="logo.png" alt="logo" />
          <span style={logoText}>VoiceChatRoom</span>
        </Link>
      </nav>
    );
};

export default Navigation;
