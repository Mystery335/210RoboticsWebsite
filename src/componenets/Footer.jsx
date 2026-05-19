const Footer = () => {
  return (
    <footer className="footer text-light bg-[#444444]" id="footer">
      <div className="container py-1">
        <div className="row g-0">
          <div className="col-md-6">
            <img 
              src="assets/img/210-Robotics-Transparent-Banner.png" 
              alt="" 
              style={{width: '50%', marginLeft: '-3.3%'}}
            />
            <p className="mb-2" style={{marginTop: '-5%'}}>
              <i className="fas fa-envelope me-2"></i>
              <a href="mailto:admin@210robotics.com">admin@210robotics.com</a>
            </p>
          </div>
          <div className="col-md-6 text-end p-2">
            <p className="mb-0">
              <i className="fas fa-map-marker-alt me-2"></i>
              UT San Antonio<br />
              <span>1 UTSA Circle</span><br />
              <span>San Antonio, TX 78249</span>
            </p>
            <div className="social-links mt-3">
              <a href="https://discord.gg/SddubkhhE" className="text-light text-decoration-none me-2" target="_blank">
                <i className="fab fa-discord fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/210_robotics/" className="text-light text-decoration-none me-2" target="_blank">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/company/210-robotics/" className="text-light text-decoration-none me-2" target="_blank">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/Mystery335/210Robotics_Website" className="text-light text-decoration-none me-2" target="_blank">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; 2026 210 Robotics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;