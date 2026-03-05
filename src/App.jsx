import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import StarrySky from "./components/StarrySky";
import "./style.css";
import "./App.css";
import "./mobile-responsive.css";
import "./fixes.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    // Keep URL as root
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
    }

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "project":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      case "blog":
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <StarrySky />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="page-content">{renderPage()}</div>
      <Footer />
    </div>
  );
}

export default App;
