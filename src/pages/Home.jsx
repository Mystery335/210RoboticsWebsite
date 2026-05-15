import { useEffect } from 'react'
import '@/assets/css/index.css'

const Home = () => {
  useEffect(() => {
    function updateNavbarForSlide() {
      const activeSlide = document.querySelector('.carousel-item.active');
      const isFirstSlide = activeSlide?.classList.contains('first-slide');

      const navbar = document.querySelector('.navbar');
      if (isFirstSlide) {
        navbar?.classList.remove('tint');
      } else {
        navbar?.classList.add('tint');
      }
    }

    const mainCarousel = document.getElementById('mainCarousel');
    mainCarousel?.addEventListener('slide.bs.carousel', (e) => {
      const nextSlide = e.relatedTarget;
      const isFirstSlide = nextSlide.classList.contains('first-slide');

      const navbar = document.querySelector('.navbar');
      if (isFirstSlide) {
        navbar?.classList.remove('tint');
      } else {
        navbar?.classList.add('tint');
      }
    });

    updateNavbarForSlide();

    return () => {
      mainCarousel?.removeEventListener('slide.bs.carousel', updateNavbarForSlide);
    };
  }, []);

  return (
    <>
      <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="3"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="4"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="5"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="6"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="7"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="8"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="9"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active first-slide">
            <img src="assets/img/index/main/img1.jpg" alt="Team Cryptonite" />

            <div className="logo-container">
              <img src="assets/img/210-Robotics-Transparent-Banner.png" alt="210 Robotics Logo" />
              <p>210 Robotics; Multidisciplinary team from UT San Antonio</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="assets/img/index/main/img2.jpg" alt="Team Image 2" />
          </div>

          <div className="carousel-item">
            <img src="assets/img/index/main/img3.jpg" alt="Team Image 3" />
          </div>

          <div className="carousel-item">
            <img src="assets/img/index/main/img4.jpg" alt="Team Image 4" />
          </div>

          <div className="carousel-item">
            <img src="assets/img/index/main/img5.jpg" alt="Team Image 5" />
          </div>

          <div className="carousel-item">
            <img src="assets/img/index/main/img6.jpg" alt="Team Image 6" />
          </div>

          <div className="carousel-item">
            <img src="assets/img/index/main/img7.jpg" alt="Team Image 7" />
          </div>

          <div className="carousel-item">
            <img src="assets/img/index/main/img8.jpg" alt="Team Image 8" />
          </div>

          <div className="carousel-item">
            <img src="assets/img/index/main/img9.jpg" alt="Team Image 9" />
          </div>

          <div className="carousel-item">
            <img src="assets/img/index/main/img10.jpg" alt="Team Image 10" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <section className="who-we-are-section light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="assets/img/index/katy.png"
                    alt="Katy"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="assets/img/index/cr.png"
                    alt="CR"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-text mb-3">
                FRC Team CRyptonite 624 is a <i>FIRST</i> Robotics Competition
                team composed of students from Cinco Ranch High School in Katy
                ISD. We've been building robots since 2001, and have consistently
                been a top team.
              </p>
              <h5 className="mb-1">Fun Fact</h5>
              <p className="section-text">
                Our team name, "CRyptonite" combines "CR" for Cinco Ranch with
                "kryptonite"!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="weakness dark" style={{padding: "2rem 0"}}>
        <div className="container">
          <h1 style={{textAlign: "center"}}>ENGINEERING A PATH TO OUR FUTURE</h1>
        </div>
      </section>

      <section className="where-we-work-section light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <h2 className="section-title">Where We Work</h2>
              <p className="section-text">
                Our team operates out of the KatyISD Robert R. Shaw Center for
                STEAM. This facility provides us with our large manufacturing
                equipment and space to work. The STEAM Center serves as our
                meeting space for robot design.
              </p>
              <p className="section-text">
                We also share this space with other FRC teams in KatyISD: 4639
                RoboSpartans, 5427 Steel Talons, 2882 Nuts n' Boltz, 8576 Golden
                Warrior Robotics, 6488 RoboRams, and 8370 Glow with the Flow.
              </p>
            </div>

            <div className="col-12 col-lg-6">
              <div
                id="rscCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="4000"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#rscCarousel"
                    data-bs-slide-to="0"
                    className="active"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#rscCarousel"
                    data-bs-slide-to="1"
                  ></button>
                </div>
                <div className="carousel-inner rounded-3 overflow-hidden">
                  <div className="carousel-item active">
                    <img
                      src="assets/img/index/rsc/rsc1.jpg"
                      className="d-block w-100"
                      alt="RSC Image 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/img/index/rsc/rsc2.jpg"
                      className="d-block w-100"
                      alt="RSC Image 2"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#rscCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#rscCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
