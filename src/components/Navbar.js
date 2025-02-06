import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "./Navbar.scss";

const NavbarComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/">{language === "en" ? "Home" : "მთავარი"}</Link>
      <Link to="/about">{language === "en" ? "About" : "შესახებ"}</Link>
      <Link to="/posts">{language === "en" ? "Posts" : "პოსტები"}</Link>
      <button onClick={toggleTheme} className="btn-theme">
        {language === "en" ? "Toggle Theme" : "თემის შეცვლა"}
      </button>
      <button onClick={toggleLanguage} className="btn-language">
        {language === "en" ? "Georgian" : "ინგლისური"}
      </button>
    </nav>
  );
};

export default NavbarComponent;
