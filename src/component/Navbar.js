
import React from "react";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="logo">
                Luxe<span>Bags</span>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#shop" onClick={handleLinkClick}>Shop</a></li>
                <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>

            {/* Cart */}
            <div className="cart">
                🛒 <span>0</span>
            </div>
             <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>


        </nav>
    );
}

export default Navbar;
