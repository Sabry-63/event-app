import React from 'react';
import LogoImg from '../../assets/logo.png';
import './logo.css';

export default function Logo() {
    return (
        <div className="logo__event">
            <img src={LogoImg} alt="Logo" />
        </div>
    );
}
