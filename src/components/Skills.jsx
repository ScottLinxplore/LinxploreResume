// src/components/Skills.jsx
import { useState } from "react";
import "./css/Skills.css";

const allSkills = [
 
  { name: "Creo Pro E", category: "design" },
  { name: "Solidworks", category: "design" },
  { name: "Illustrator", category: "design" },
  { name: "Photoshop", category: "design" },
  { name: "KeyShot", category: "design" },
  { name: "Rhino", category: "design" },
  { name: "Figma", category: "interactiondesign" },
  { name: "Unity", category: "interactiondesign" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Restful API", category: "frontend" }
];

const categories = [
  { key: "design", label: "產品設計" },
  { key: "interactiondesign", label: "互動設計" },
  { key: "frontend", label: "前端開發" }
];

function Skills() {
  const [filters, setFilters] = useState([]);

  const toggleFilter = (key) => {
    setFilters((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  const displayedSkills =
    filters.length === 0
      ? allSkills
      : allSkills.filter((skill) => filters.includes(skill.category));

  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2 className="skills-title">技能</h2>
      <div className="filter-bar">
        <div className="filterDiv">
          {" "}
          <span style={{ fontFamily: "sans-serif" }}>Filter：</span>
          {categories.map(({ key, label }) => (
            <label key={key} className="filter-label">
              <input
                type="checkbox"
                checked={filters.includes(key)}
                onChange={() => toggleFilter(key)}
              />
              <span className={filters.includes(key) ? "active" : ""}>
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="skills-grid">
        {displayedSkills.map((skill, index) => (
          <div className="skill-pill" key={index}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
