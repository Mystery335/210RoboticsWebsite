import { Link } from 'react-router-dom';
import '@/assets/css/about.css'

const About = () => {
  return (
    <>
      <div className="split-container">
        <div className="split-section" id="first-section">
          <div
            className="split-background"
            style={{backgroundImage: "url('../assets/img/about/first.jpg')"}}
          ></div>
          <div className="split-overlay"></div>
          <div className="split-content">
            <div className="section-bar">
              <Link to="/about/first" className="section-link">
                <h1><i>FIRST</i></h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="split-section" id="robots-section">
          <div
            className="split-background"
            style={{backgroundImage: "url('assets/img/about/robots.jpg')"}}
          ></div>
          <div className="split-overlay"></div>
          <div className="split-content">
            <div className="section-bar">
              <Link to="/robots" className="section-link">
                <h1>Robots</h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="split-section" id="history-section">
          <div
            className="split-background"
            style={{backgroundImage: "url('assets/img/about/history.jpg')"}}
          ></div>
          <div className="split-overlay"></div>
          <div className="split-content">
            <div className="section-bar">
              <Link to="/about/history" className="section-link">
                <h1>History</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;