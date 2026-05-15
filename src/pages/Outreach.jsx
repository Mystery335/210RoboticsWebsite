import { useEffect } from 'react';
import '@/assets/css/outreach.css'

const Outreach = () => {
  useEffect(() => {
    if (window.Swiper) {
      var swiper = new Swiper(".robotDemosSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 300,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
    }
  }, []);
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
            <div className="carousel-item active">
              <img
                src="assets/img/outreach/_carousel/outreach1.jpg"
                alt="Outreach 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/img/outreach/_carousel/outreach2.jpg"
                alt="Outreach 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/img/outreach/_carousel/outreach3.jpg"
                alt="Outreach 3"
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/img/outreach/_carousel/outreach4.jpg"
                alt="Outreach 4"
              />
            </div>
          </div>
        </div>

        <div className="title-banner">
          <h1>OUTREACH</h1>
        </div>
      </div>

      <section className="programs-section dark">
        <div className="container">
          <div className="section-header">
            <h2>PROGRAMS</h2>
          </div>
          <div className="row align-items-start g-5">
            <div className="col-lg-6">
              <div className="inspiration-container">
                <h4 className="section-subtitle-small">Our Inspiration</h4>
                <div className="inspiration-image-wrapper">
                  <img
                    src="assets/img/outreach/inspiration.jpg"
                    alt="Our Inspiration"
                    className="inspiration-image"
                  />
                </div>
                <div className="inspiration-content mt-3">
                  <p className="section-text">
                    Our mission of building for a better future expands beyond
                    just the inner workings of our team. We aim to give back, not
                    only by spreading STEM interest, but by enabling those who are
                    interested in STEM with the tools they need to pursue it.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="video-container">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/An5HTkh3dBY"
                    title="Outreach Programs Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="robot-demos-section light">
        <div className="container">
          <div className="section-header">
            <h2>ROBOT DEMOS</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="swiper robotDemosSwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="demo-slide">
                      <img
                        src="assets/img/outreach/demos/demos1.jpg"
                        alt="MTS Barbecue Demo"
                        className="demo-image"
                      />
                      <h4 className="demo-title">MTS Barbecue Demo</h4>
                      <p className="demo-date">November 7, 2019</p>
                      <p className="demo-author">By Team624</p>
                      <p className="demo-text">
                        On November 7th, Team 624 participated in the Marine
                        Technological Society Barbecue, showing off two of our
                        robots, Sidewinder and Thor. CRyptonite students enjoyed
                        excellent barbecue while sharing their experiences in
                        FIRST robotics...
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="demo-slide">
                      <img
                        src="assets/img/outreach/demos/demos2.jpg"
                        alt="Katy ISD STEAM Night"
                        className="demo-image"
                      />
                      <h4 className="demo-title">Katy ISD STEAM Night</h4>
                      <p className="demo-date">October 18, 2019</p>
                      <p className="demo-author">By Team 624</p>
                      <p className="demo-text">
                        KISD parents and community members visited the RSC for
                        STEAM Night. Parents and students participated in various
                        STEM activities as well as taking a tour of Team 624's
                        work bay. Team 624...
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="demo-slide">
                      <img
                        src="assets/img/outreach/demos/demos3.jpg"
                        alt="Houston Open Golf Tournament Demo"
                        className="demo-image"
                      />
                      <h4 className="demo-title">
                        Houston Open Golf Tournament Demo
                      </h4>
                      <p className="demo-date">October 14, 2019</p>
                      <p className="demo-author">By Team624</p>
                      <p className="demo-text">
                        CRyptonite represented our founding Sponsor, BP, at the
                        Houston Open Golf Tournament in Humble, Texas. Attendees
                        had the opportunity to engage with team robots and learn
                        about CRyponite's influence on surrounding FLL...
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="demo-slide">
                      <img
                        src="assets/img/outreach/demos/demos4.jpg"
                        alt="Family Night at Chick-Fil-A"
                        className="demo-image"
                      />
                      <h4 className="demo-title">Family Night at Chick-Fil-A</h4>
                      <p className="demo-date">October 1, 2019</p>
                      <p className="demo-author">By Team624</p>
                      <p className="demo-text">
                        On October 1st from 5-7 pm, Team 624 students demonstrated
                        four unique types of robots to elementary students at
                        Chick-Fil-A's Family Night. The young students had a blast
                        learning how to drive,...
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="demo-slide">
                      <img
                        src="assets/img/outreach/demos/demos5.jpg"
                        alt="Bechtel Collaboration Day"
                        className="demo-image"
                      />
                      <h4 className="demo-title">Bechtel Collaboration Day</h4>
                      <p className="demo-date">November 22, 2019</p>
                      <p className="demo-author">By Team 624</p>
                      <p className="demo-text">
                        CRyptonite, along with other Bechtel sponsored teams Team
                        5892, Energy Heroes, and Team 4693, RoboSpartans met at
                        the RSC to discuss strategy and talk about progress in
                        building their competition robot. The...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Outreach;