import "./App.css";
import { ReactComponent as Logo } from "./images/bg-header-mobile.svg";

function App() {
  return (
    <div className="container">
      <header className="header">
        {/* Logo is an actual React component */}
        <Logo />
      </header>
      <div className="hero_container">
        <div className="hero_avatar">
            {/* INSERT AVATTAR */}
        </div>
        <div className="hero_text_container">
        <div className="hero_text_container-heading">
          <p className="company">Photsnap</p>
          <p className="new">NEW!</p>
          <p className="featured">FEATURED</p>
        </div>
        <div className="hero_text_container-jobTitle">
          <h1 className="job-title">Senior Frontend Developer</h1>
        </div>
        <div className="hero_text_container-info">
          <p className="info">1d ago<span></span>Full Time<span></span>USA Only</p>
        </div>
        </div>
        <div className="hero_text_container_attributes">
          <ul className="role">
            <li>Frontend</li>
          </ul>
          <ul className="level">
          <li>Senior</li>
          </ul>
          <ul className="languages">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;
