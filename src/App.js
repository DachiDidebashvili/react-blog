import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NavbarComponent from "./components/Navbar";
import "./styles/main.scss";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
