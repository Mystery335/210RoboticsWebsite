import sponsorsData from "../data/sponsors.json";
import "@/assets/css/sponsors.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Sponsors = () => {
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

  const { carouselImagesDir, numCarouselImages, sponsors } = sponsorsData;

  return (
    <>
      <div className="top-bg bg-75">
        <div
          id="topCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        ></div>

        <div className="title-banner">
          <h1>Sponsors</h1>
        </div>
      </div>

      <section className="mentors-section light">
        <div className="container">
          <div className="section-header">
            <h2>WHY SPONSOR US</h2>
          </div>
          <div className="row justify-content-center">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <p className="impact-text mb-4">
                  210 Robotics functions as an expanding student organization based at 
                  University of Texas at San Antonio which participates in VEX U 
                  and Siemens Immersive Design Challenge competitions. 
                  Our team at Fall 2026 started by students who brought their 
                  passion to create a group that focuses on robotics and 
                  engineering innovation through teamwork. You can support the future 
                  development of engineers and programmers who will become skilled problem-solvers by sponsoring 210 Robotics. 
                  Our members develop practical abilities through their work on advanced robotic system design 
                  and construction and programming which prepares them for modern career requirements.
                </p>

                <p className="impact-text">
                  Your support enables us to:
                  <ul>
                    <li>
                      Buy basic resources and equipment and parts which we need for building our robots
                    </li>
                    <li>Participate in both regional and national competitions</li>
                    <li>
                      Organize workshops and outreach activities and group learning sessions for our community
                    </li>
                    <li>
                       Establish a welcoming STEM community 
                       which unites all students who show interest in science and technology.
                    </li>
                  </ul>
                  In return, our sponsors receive valuable marketing benefits, including the following:
                  <ul>
                    <li>
                      Brand exposure through robot decorations and team uniforms and marketing materials
                    </li>
                    <li>
                      Recognition across our social media platforms and events
                    </li>
                    <li>
                      Direct access to a pipeline of talented, motivated
                      students
                    </li>
                    <li>
                      Opportunities to collaborate on projects, mentorship, and
                      recruitment
                    </li>
                  </ul>
                </p>
                <p className="impact-text">
                  210 Robotics functions as a community which extends beyond being a competitive team because we work 
                  together to develop new ideas while expanding our knowledge and create meaningful social effects. 
                  We will extend our operational reach and improve our performance 
                  levels because you stand with us to support technology leadership development for upcoming generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>THANK YOU SPONSORS</h2>
          </div>
          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <div className="sponsor-card" key={index}>
                <div className="sponsor-logo">
                  <img
                    src={`/assets/sponsors/${sponsor.logo}`}
                    alt={sponsor.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mentors-section light">
        <div className="section-header">
          <h2>Interested?</h2>
          <div id="request">
            Please fill out the form below, and we will reach out to you soon!
          </div>
          <div className="p-3"></div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              name="Name"
              type="text"
              className="sponsor-input"
              placeholder="Company Name"
              required
            />
            <input
              name="Email"
              type="email"
              className="sponsor-input"
              placeholder="Contact Email"
              required
            />
            <textarea
              name="Desc"
              className="sponsor-input sponsor-textarea"
              placeholder="Additional Information"
            />
            <button type="submit" className="sponsor-btn">
              Submit
            </button>
            <div>
            {status === "success" && (
              <p style={{ color: "white", marginTop: "1rem" }}>
                Thank you for submitting your interest in sponsoring 210 Robotics! We will reach out to you soon.
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "white", marginTop: "1rem" }}>
                Something went wrong. Please try again.
              </p>
            )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Sponsors;
