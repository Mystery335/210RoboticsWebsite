import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "@/assets/css/sponsors.css";

    
  const Footer = () => {
    const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7y6f16p",
        "template_t6e7ptb",
        formRef.current,
        "LmF_XCkY4eaR4g-Ay",
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <footer className="footer text-light bg-[#444444]" id="footer">
      <div className="container py-1">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="assets/img/210-Robotics-Transparent-Banner.png"
              alt=""
              style={{ width: "50%", marginLeft: "-3.3%" }}
            />
            <p className="mb-2" style={{ marginTop: "-5%" }}>
              <i className="fas fa-envelope me-2"></i>
              <a href="mailto:admin@210robotics.com">admin@210robotics.com</a>
            </p>
            <p className="mb-0">
              <i className="fas fa-map-marker-alt me-2"></i>
              UT San Antonio
              <br />
              <span>1 UTSA Circle</span>
              <br />
              <span>San Antonio, TX 78249</span>
            </p>
            <div className="p-5"></div>
          </div>
          <div className="col-md-6 text-end p-2">
            <div className="social-links mt-4">
              <a
                href="https://discord.gg/SddubkhhE"
                className="text-light text-decoration-none me-2"
                target="_blank"
              >
                <i className="fab fa-discord fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/210_robotics/"
                className="text-light text-decoration-none me-2"
                target="_blank"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/210-robotics/"
                className="text-light text-decoration-none me-2"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/Mystery335/210Robotics_Website"
                className="text-light text-decoration-none me-2"
                target="_blank"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col items-end mt-4">
                <input
                  name="Name"
                  className="contact-input"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                name="Email"
                  className="contact-input"
                  type="text"
                  placeholder="Email"
                  required
                />
                <input
                  name="Subject"
                  className="contact-input"
                  type="text"
                  placeholder="Subject"
                  required
                />

                <div className="contact-row">
                  <textarea
                    name="Desc"
                    className="contact-input message-box"
                    placeholder="Message"
                    required
                  />
                  <button type="submit" className="contact-btn">
                    Send Message!
                  </button>
                </div>
                {status === "success" && (
              <p style={{ color: "white", marginTop: "1rem" }}>
                Message Sent!
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "white", marginTop: "1rem" }}>
                Something went wrong. Please try again.
              </p>
            )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
