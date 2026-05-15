const Footer = () => {
  return (
    <footer className="footer dark text-light">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <p className="mb-2">
              <i className="fas fa-envelope me-2"></i>
              <a href="mailto:info@team624.org">info@team624.org</a>
            </p>
            <p className="mb-0">
              <i className="fas fa-map-marker-alt me-2"></i>
              Cinco Ranch High School<br />
              <span>23440 Cinco Ranch Blvd</span><br />
              <span>Katy, TX 77494</span>
            </p>
            <div className="social-links mt-3">
              <a href="https://www.instagram.com/frcteam624/" className="text-light text-decoration-none me-2">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.youtube.com/@CRyptoniteRobotics" className="text-light text-decoration-none me-2">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
              <a href="https://www.facebook.com/CRyptoniteRobotics/" className="text-light text-decoration-none">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; 2025 Cryptonite Robotics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;