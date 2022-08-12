import React from 'react';
import './header.css';

export default function Header({ title }) {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
        </header>
    );
}
