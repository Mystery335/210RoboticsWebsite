import { useEffect } from 'react'
import '@/assets/css/index.css'


const Home = ({siemensMode}) => {
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
            <img src="assets/img/siemens.png" alt="Team Siemens" />

            <div className="logo-container">
              <img 
                src={siemensMode ? 'assets/img/210-Robotics-Transparent-Banner.png' : 'assets/img/210-Robotics-Transparent-Banner - Siemens.png'}
                alt="210 Robotics Logo" 
                />
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
        <div className="container ">
          <div className="row align-items-center g-4 ">
            <div className="col-12 col-lg-6">
                <div className="col-12">
                  <img
                    src="assets/img/utsa.png"
                    alt="UT San Antonio"
                    className="img-fluid rounded"
                  />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-text mb-3">
                210 Robotics is an organization at The University of Texas at 
                San Antonio competing in both Vex U and the Siemen’s Immersive Design Challenge.
              </p>
              <p className="section-text mb-3">
                This organization started Fall 2026, by a group of friends interested in Robotics.               </p>
              <p className="section-text mb-3">
                Our goal is to provide a space where students interested in robotics, 
                programming, or just exploring UTSA can come together and compete in 
                competitions, participate in socials, and learn new skills. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="where-we-work-section light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <h2 className="section-title">Where We Work</h2>
              <p className="section-text">
                210 Robotics operates out of The University of Texas at San Antonio, 
                where members collaborate on robot design, engineering, programming, 
                and technical development through competitive robotics and hands-on projects.
              </p>
            </div>

            <div className="col-12 col-lg-6">
                <div className="rounded-3 overflow-hidden">
                  <div className="active">
                    <img
                      src="assets/img/makerspace.png"
                      className="d-block w-100"
                      alt="Makerspace Image"
                    />
                  </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
    </>
  )
}

export default Home;
