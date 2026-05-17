import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ tinted = false }) => {

  const [siemensMode, setSiemensMode] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <nav className={`navbar navbar-expand-lg transparent ${tinted ? 'tint' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="../assets/img/210Robotics.png"
            alt="210 Robotics"
            style={{height: "60px"}}
          />
        </Link>
        <button
          className="navbar-toggler custom-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-nav-center mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <div className="nav-text">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                <div className="nav-text">Team</div>
              </Link>
            </li>
            {!siemensMode && (
              <li className="nav-item">
                <Link className="nav-link" to="/RoboRowdy">
                  <div className="nav-text">RoboRowdy</div>
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/sponsors">
                <div className="nav-text">Sponsors</div>
              </Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  <div className="nav-text">Donate</div>
                </Link>
              </li>
            <li className="nav-item">
              <div className="nav-link" onClick={handleContact} style={{ cursor: 'pointer' }}>
                <div className='nav-text'>Contact</div>
              </div>
            </li>
           <li className="nav-item">
            <Link to="/">
              <div
                className="nav-link"
                onClick={() => setSiemensMode(!siemensMode)}
                style={{ cursor: 'pointer' }}
              >
                <div className="nav-text">
                  <i>{siemensMode ? 'Siemens' : 'VEX U'}</i>
                </div>
              </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;