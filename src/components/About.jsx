// src/components/About.jsx
import "./css/About.css";
import HPSme from "./image/HPSme.jpg";
import RUN from "./image/run.jpg";
import SnowMountain from "./image/snowMaintainMe.jpg";
import Surf from "./image/surf.jpg";
import Hike from "./image/Hike.jpg";
import HPSGroup from "./image/HPSGroup.jpg";
import EZGOGroup from "./image/EZGOGroup.jpg";
import TDRI from "./image/TDRI.jpg";
import { useEffect } from "react";
function useMoodItemCenterEffect() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    if (!isMobile) return;

    const images = document.querySelectorAll(".mood-item");

    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;

      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.top + rect.height / 2;
        const distance = Math.abs(imgCenter - windowCenter);

        const maxDistance = window.innerHeight / 4; // ¼ 螢幕高為最大放大區域
        const progress = Math.max(0, 1 - distance / maxDistance); // 0～1

        const scale = 1 + progress * 0.2; // 最大 scale 1.1
        img.style.transform = `scale(${scale})`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初次執行

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
function useScrollFlipEffect() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    if (!isMobile) return;

    const cards = document.querySelectorAll(".flip-card");

    const handleScroll = () => {
      cards.forEach((card) => {
        const inner = card.querySelector(".flip-inner");
        if (!inner) return;

        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const lowerThreshold = windowHeight * (2 / 3); // 畫面下方 1/3
        const center = windowHeight / 2;

        const cardCenter = rect.top + rect.height / 2;

        // 如果卡片中心還沒到下方1/3，維持 0 度
        if (cardCenter < lowerThreshold) {
          inner.style.transform = "rotateY(180deg)";
          return;
        }

        // 如果卡片中心在中心點之後，不再繼續轉
        if (cardCenter > center + (center - lowerThreshold)) {
          inner.style.transform = "rotateY(0deg)";
          return;
        }

        // 計算在 [下方1/3 ~ 中心點] 的進度，進行轉動
        const progress =
          (cardCenter - lowerThreshold) / (center - lowerThreshold);
        const clampedProgress = Math.min(Math.max(progress, 0), 1); // 限制在 0 ~ 1
        const angle = clampedProgress * 180;

        inner.style.transform = `rotateY(${angle}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

function About() {
  useScrollFlipEffect();
  useMoodItemCenterEffect();
  const moodBoardArray = [
    RUN,
    Surf,
    HPSme,
    SnowMountain,
    Hike,
    HPSGroup,
    EZGOGroup,
    TDRI,
  ];

  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <h2 className="about-title">關於我</h2>
      <p className="about-description">
        您好，我是林敬庭，畢業於成功大學工業設計研究所。原本來自觀光背景，自學轉設計，大學至研究所期間完成跨域轉換，培養了設計與前端整合能力。我熟悉使用者研究、資訊架構與互動設計，並能以
        React.js、HTML /CSS/ JavaScript 實作 UI 介面，有效協助設計落地。
      </p>

      <div className="card-grid">
        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <p className="card-title">專案經驗與實戰能力</p>
              <p className="card-sub">專案實作 × 前端整合</p>
            </div>
            <div className="flip-back">
              <p>
                曾參與 Google HPS
                計畫，與多元團隊合作開發具教育性的智慧垃圾分類系統，負責 UI/UX
                與前端整合實作。今年初於資策會參加前端工程師養成班，擔任「朝聖之路」專案組長，主導「路線規劃模組」的功能設計與技術開發，並協調團隊進度。
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <p className="card-title">個人品牌與未來方向</p>
              <p className="card-sub">持續精進 × 體驗優化</p>
            </div>
            <div className="flip-back">
              <p>
                獨立開發 Linxplore 互動旅遊網站，從設計構思到 RWD
                前端實作全程參與，實踐完整產品流程。未來希望加入重視體驗與品質的團隊，擔任前端工程師或
                UI/UX 設計師，打造更有溫度的產品體驗。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="moodBoard">
        {moodBoardArray.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`mood-${index}`}
            className="mood-item"
          />
        ))}
      </div>
    </section>
  );
}

export default About;
