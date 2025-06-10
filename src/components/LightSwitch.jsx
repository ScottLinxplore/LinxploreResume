import "./css/Light.css";
function LightSwitcher({ toggleMode, isDark }) {
  return (
    <div className="LightSwitcherSection fade-slide-right delay-4">
      <label className="toggle-wrapper">
        <input type="checkbox" checked={isDark} onChange={toggleMode} />
        <span className="toggle-slider" />
        <span className="toggle-label">Dark mode</span>
      </label>
    </div>
  );
}
export default LightSwitcher;
