import sponsorsData from "../data/sponsors.json";
import '@/assets/css/sponsors.css'

const Sponsors = () => {
  const { carouselImagesDir, numCarouselImages, sponsors } = sponsorsData;

  return (
    <>
      <div className="top-bg bg-75">
        <div
          id="topCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {Array.from({ length: numCarouselImages }).map((_, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img src={`${carouselImagesDir}sponsor${index + 1}.jpg`} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="title-banner">
          <h1>Sponsors</h1>
        </div>
      </div>

      <section className="impact-section dark">
        <div className="container">
          <div className="section-header">
            <h2>WHY SPONSOR US</h2>
          </div>
          <div className="row justify-content-center">
            <div className="row align-items-center">
              <div className="col-lg-8">

                <p className="impact-text mb-4">
                  210 Robotics is a rapidly growing student organization at the University of Texas at San Antonio,
                  competing in both VEX U and the Siemens Immersive Design Challenge. 
                  Founded in Fall 2026 by a passionate group of students, our team is built on innovation, 
                  collaboration, and a shared drive to push the boundaries of robotics and engineering.
                  By sponsoring 210 Robotics, you are directly investing in the next 
                  generation of engineers, programmers, and problem-solvers. 
                  Our members gain hands-on experience in designing, building, 
                  and programming advanced robotic systems—skills that translate 
                  directly into the modern workforce.
                </p>

                <p className="impact-text">
                  Your support enables us to:
                  <ul>
                    <li>Purchase essential materials, tools, and components for robot development</li>
                    <li>Compete at regional and national competitions</li>
                    <li>Host workshops, outreach events, and collaborative learning opportunities</li>
                    <li>Build a strong, inclusive community for students interested in STEM</li>
                  </ul>
                  In return, sponsors gain meaningful visibility and engagement opportunities, including:
                  <ul>
                    <li>Brand placement on robots, team apparel, and promotional materials</li>
                    <li>Recognition across our social media platforms and events</li>
                    <li>Direct access to a pipeline of talented, motivated students</li>
                    <li>Opportunities to collaborate on projects, mentorship, and recruitment</li>
                  </ul>
                </p>
                <p>210 Robotics is more than a competition team—we are a community 
                  dedicated to innovation, growth, and impact. With your support, 
                  we can continue to expand our reach, elevate our performance, and 
                  inspire future leaders in technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors-grid-section light">
        <div className="container">
          <div className="section-header">
            <h2>THANK YOU SPONSORS</h2>
          </div>
          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <div className="sponsor-card" key={index}>
                <div className="sponsor-logo">
                  <img src={`assets/img/sponsors/logos/${sponsor.logo}`} alt={sponsor.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;