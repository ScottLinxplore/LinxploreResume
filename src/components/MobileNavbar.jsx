// src/components/MobileNavbar.jsx
import { useState } from "react";
import { RiMenuUnfold3Fill, RiCloseLine } from "react-icons/ri";
import "./css/MobileNavbar.css";

function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className={`MNSection ${open ? "invisible" : ""}`}>
      <div className={`mobile-navbar`}>
        <div className={`mobile-navbar-top ${open ? "none" : ""}`}>
          {!open && (
            <RiMenuUnfold3Fill
              className="burger-icon"
              onClick={() => setOpen(true)}
            />
          )}
        </div>

        <div className={`mobile-drawer ${open ? "open" : ""}`}>
          <RiCloseLine className="close-icon" onClick={() => setOpen(false)} />
          <div className="drawer-header">
            <span className="MNlogo">Linxplore</span>
          </div>
          <a href="#about" onClick={() => setOpen(false)}>
            關於我
          </a>
          <a href="#skills" onClick={() => setOpen(false)}>
            技能
          </a>
          <a href="#experience" onClick={() => setOpen(false)}>
            經歷
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            專案作品
          </a>
          <a
            className="mobile-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            <button>聯絡我</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MobileNavbar;
