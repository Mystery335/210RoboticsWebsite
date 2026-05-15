import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ tinted = false }) => {
  return (
    <nav className={`navbar navbar-expand-lg transparent ${tinted ? 'tint' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="../assets/img/logo-text.svg"
            alt="Cryptonite"
            style={{height: "30px"}}
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
              <Link className="nav-link" to="/about/first">
                <div className="nav-text"><i>FIRST</i></div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about/history">
                <div className="nav-text">History</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/robots">
                <div className="nav-text">Robots</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sponsors">
                <div className="nav-text">Sponsors</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/outreach">
                <div className="nav-text">Outreach</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/headlines">
                <div className="nav-text">Headlines</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                <div className="nav-text">Team</div>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://drive.google.com/drive/folders/1sjkzWhyKY7iMicSTPg6yCTiit4jftolw?usp=sharing">
                <div className="nav-text">Trainings</div>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-icons ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://calendar.google.com/calendar/embed?src=info%40team624.org&ctz=America%2FChicago"
              >
                <div className="nav-text">
                  <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                  <div className="nav-icon-text ms-2">Calendar</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://gallery.team624.org/">
                <div className="nav-text">
                  <i className="fas fa-images" aria-hidden="true"></i>
                  <div className="nav-icon-text ms-2">Gallery</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;