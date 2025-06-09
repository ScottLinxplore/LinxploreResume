import "./css/Navbar.css";
import { useState } from "react";
import { RiMenuUnfold3Fill } from "react-icons/ri";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="navbarSection delay-1" data-aos="fade-up">
      <div className="menuIcon">
        <RiMenuUnfold3Fill
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <div className={`navbarText ${menuOpen ? "show" : "hide"}`}>
        <span className="logo">Linxplore</span>
        <a href="#about">關於我</a>
        <a href="#skills">技能</a>
        <a href="#experience">經歷</a>
        <a href="#projects">專案作品</a>
        <a className="a-contact" href="#contact">
          <button>聯絡我</button>
        </a>
      </div>
    </section>
  );
}
export default Navbar;
