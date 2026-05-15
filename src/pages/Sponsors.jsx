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
          <p className="mt-2" style={{ fontSize: "larger" }}>
            Making our dreams a reality since 2001.
          </p>
        </div>
      </div>

      <section className="impact-section dark">
        <div className="container">
          <div className="section-header">
            <h2>IMPACT</h2>
          </div>
          <div className="row justify-content-center">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="impact-subtitle mb-4">Paying it forward</h3>

                <p className="impact-text mb-4">
                  Every dollar donated to support FRC Team 624, "CRyptonite" helps
                  inspire hundreds of students to pursue STEM careers. Our funding
                  allows our high school team to compete in competitions with
                  teams from around the world in FIRST (For Inspiration and
                  Recognition of Science and Technology). At the Robert R. Shaw
                  Center for STEAM, parts and tools purchased using donations have
                  taught members industry-level skill, preparing them to succeed
                  in college and in the workplace.
                </p>

                <p className="impact-text">
                  Cinco Ranch High School Robotics Booster Club provides financial
                  and mentoring support for Team 624. CRHS Robotics Booster Club
                  is a registered 501c3 educational non-profit organization.
                </p>
              </div>

              <div className="col-lg-4">
                <div className="impact-image-container">
                  <img
                    src="assets/img/sponsors/impact.jpg"
                    alt="Impact Image"
                    className="img-fluid rounded"
                  />
                </div>
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