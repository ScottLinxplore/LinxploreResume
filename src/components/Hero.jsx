// src/components/Hero.jsx
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import mountain from "./image/mountain.jpg";
import bigHead from "./image/bigHead.png";
import MobileNavbar from "./MobileNavbar";
import "./css/Hero.css";

function Hero({ isDark }) {
  return (
    <section className="hero-section">
      <MobileNavbar />
      <div className="hero-content">
        <img
          src={bigHead}
          alt="Profile"
          className="hero-image-phone fade-slide-up delay-3"
        />
        <div className="hero-left fade-slide-left delay-2">
          <div className="divContainer delay-2">
            <h1 className="hero-title fade-slide-left">
              Hello I’m <i className="highlight">Scott Lin</i>
            </h1>
            <h2 className="hero-sub fade-slide-left delay-1">
              welcome to Linxplore – a story about design and engineering
            </h2>

            <div className="hero-icons fade-slide-left delay-2">
              {[
                {
                  icon: FaFacebookF,
                  url: "https://www.facebook.com/share/1LJfLFtr3y/?mibextid=wwXIfr",
                },
                {
                  icon: FaLinkedinIn,
                  url: "https://www.linkedin.com/in/%E6%95%AC%E5%BA%AD-%E6%9E%97-7256a01b5/",
                },
                {
                  icon: FaInstagram,
                  url: "https://www.instagram.com/jingtinglin5?igsh=MXhmYmhoNHdpY3E4dQ%3D%3D&utm_source=qr",
                },
                { icon: FaGithub, url: "https://github.com/ScottLinxplore" },
              ].map(({ icon: Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  className="icon-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="hero-right"
          style={{
            backgroundImage: `url(${mountain})`,

            backgroundRepeat: "no-repeat",
            filter: isDark ? "none" : "invert(1) contrast(1.2)",
          }}
        >
          <div className="hero-tags fade-slide-right delay-4">
            <p>Front end Developer</p>
            <br />
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
      <img
        src={bigHead}
        alt="Profile"
        className="hero-image fade-slide-up delay-3"
      />
    </section>
  );
}

export default Hero;
