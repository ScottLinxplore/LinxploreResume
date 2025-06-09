import React, { useState, useEffect } from "react";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LightSwitcher from "./components/LightSwitch";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // 只觸發一次
      offset: 100, // 捲動到距離元件 100px 時觸發
    });
    AOS.refresh();
  }, []);
  useEffect(() => {
    // 根據 isDark 決定 body 的 class
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  const toggleMode = () => setIsDark((prev) => !prev);

  return (
    <div>
      {/* <MobileNavbar isDark={isDark} /> */}
      <Hero isDark={isDark} />
      <Navbar isDark={isDark} />
      <LightSwitcher toggleMode={toggleMode} isDark={isDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Experience isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  );
}

export default App;
