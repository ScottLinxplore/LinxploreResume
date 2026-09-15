import React, { useState } from "react";
import "./css/Projects.css";
import Steplygo1 from "./image/steplygo1-1.jpg";
import LinxploreCamino from "./image/linxploreCamino.jpg";
import HPS from "./image/HPS.jpg";
import WAH from "./image/WAH.png";
import Pickup from "./image/pickup.png";
const projects = [

  {
    title: "EZGO｜多功能無障礙電動輔具",
    description:
      "針對行動不便者在不同生活情境中需要使用多種輔具的問題，設計整合電動輪椅、助行器、拐杖與步行訓練等四種功能的移動輔具。透過使用情境分析、產品機構與型態整合，讓使用者能依不同環境切換使用模式，提升室內外自主移動的彈性。本專案獲得 2021 iF Design Talent Award。",
    image: HPS,
    URL: "https://ifdesign.com/en/winner-ranking/project/ezgo/319553",
  },

  {
    title: "Google HPS 專案",
    description:
      "教育互動系統，負責 UI/UX 與前端整合，開發具互動教育的智慧垃圾分類裝置GREENIFY，從 UI/UX 流程設計到 React 前端實作，參與後台硬體、AI 與動畫引導。聚焦於提升環保教育的參與感與實性，於 HPS 計畫成果發表中展示。",
    image: HPS,
    URL: "https://drive.google.com/drive/folders/1RATGdxEWHElwR9tDo6i2EX9VmHfSugW6",
  },
  {
    title: "離岸風電模擬訓練系統（嚴肅遊戲）",
    description:
      "本專案是一款專為離岸風力發電維修人員設計的模擬訓練系統，採用「嚴肅遊戲（Serious Game）」概念，結合 Unity3D 互動模擬技術，建立出仿真的高空維修情境，以提升維修人員在實務前的心理建設、應變判斷與安全意識。",
    image: WAH,
    URL: "https://drive.google.com/drive/folders/1MkGXg1mMMtAzTzu-KR4Jkmoy3HXDSRKG",
  },
  {
    title: "朝聖之路｜路線規劃模組",
    description:
      "本專案是一個專為西班牙朝聖之路（Camino de Santiago）設計的旅遊行程規劃與套裝販售平台，讓使用者能根據自身需求規劃路線，並選購客製化或推薦的朝聖行程與服務。目標是提升自由行旅客在行前、行中、行後的資訊取得與體驗品質。",
    image: Steplygo1,
    URL: "https://github.com/ScottLinxplore/Camino_team1",
  },
  {
    title: "Linxplore 互動旅遊網站",
    description:
      "獨立開發，強調互動與完整產品流程。本專案是一個專為西班牙朝聖之路（Camino de Santiago）設計的旅遊行程規劃與套裝販售平台，並選購推薦的朝聖行程與服務。目標是提升自由行旅客在行前、行中、行後的資訊取得與體驗品質。",
    image: LinxploreCamino,
    URL: "https://github.com/ScottLinxplore/Camino?tab=readme-ov-file",
  },
  
];

function Projects() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="carousel-section" data-aos="fade-up">
      <h2 className="carousel-title">專案作品</h2>
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prev}>
          ‹
        </button>
        <div className="carousel-card">
          <img src={projects[current].image} alt={projects[current].title} />
          <div className="projectText">
            <h3>{projects[current].title}</h3>
            <p>{projects[current].description}</p>
            <a
              href={projects[current].URL}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看更多 →
            </a>
          </div>
        </div>

        <button className="carousel-btn right" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Projects;
