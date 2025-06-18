// ExperienceSection.jsx
import "./css/Experience.css";

function Experience() {
  const timelineData = [
    // 學習經歷
    {
      title: "資策會前端工程師養成班",
      period: "2025/01 ~ 2025/05",
      group: "education",
    },
    {
      title: "國立成功大學 / 工業設計所 / 碩士",
      period: "2021/09 ~ 2024/02",
      group: "education",
    },
    {
      title: "國立雲林科技大學 / 工業設計系 / 學士",
      period: "2017/09 ~ 2021/06",
      group: "education",
    },

    // 工作經歷
    {
      title: "美商科高股份有限公司 Google Taiwan / HPS研習生",
      period: "2023/06 ~ 2023/09",
      group: "work",
      description:
        "共同開發具互動教育體驗的智慧垃圾分類裝置 GREENIFY，從 UI/UX 流程設計到 React 前端實作，參與後台硬體、AI 與動畫引導。聚焦於提升環保教育的參與感與實性，於 HPS 計畫成果發表中展示。",
    },
    {
      title: "金屬工業研究發展中心 / 研習生",
      period: "2022/06 ~ 2022/12",
      group: "work",
      description:
        "於金屬中心執行嚴肅遊戲遊戲開發任務，聚焦風電作業訓練模擬之介面與互動設計，包含事前調研、需求盤點、流程設計與介面流程規劃。",
    },
    {
      title: "台灣設計研究院 / 實習生",
      period: "2020/08 ~ 2020/09",
      group: "work",
      description:
        "參與設計策略專案調查與整體設計活動行政協力，協助設計政策研究報告製作與簡報工作。接觸政策設計概念與跨領域實踐方式，理解產官平台作業機制。",
    },
  ];

  return (
    <section id="experience" className="experience-section" data-aos="fade-up">
      <h2 className="experience-title">經歷</h2>

      <div className="timeline-group">
        <div className="timeline">
          {timelineData
            .filter((item) => item.group === "education")
            .map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                </div>
                <div className="timeline-period">{item.period}</div>
              </div>
            ))}
        </div>
      </div>

      <div className="timeline-group">
        <div className="timeline">
          {timelineData
            .filter((item) => item.group === "work")
            .map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                </div>
                <div className="timeline-period">{item.period}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
