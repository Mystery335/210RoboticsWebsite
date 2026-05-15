import { useEffect } from 'react'
import '@/assets/css/about/history.css'
import buttonsData from '@/data/buttons.json'
import journeyData from '@/data/journey.json'
import awardsData from '@/data/awards.json'

const History = () => {
  useEffect(() => {
    const now = new Date();
    const yearsSince2001 = now.getFullYear() - 2000;
    const yearsEl = document.querySelector(".count.years");
    if (yearsEl) {
      yearsEl.dataset.target = String(yearsSince2001);
    }

    const counters = document.querySelectorAll(".count");
    counters.forEach(function (el) {
      const target = parseInt(el.dataset.target, 10) || 0;
      const suffix = el.dataset.suffix || "";
      const duration = parseInt(el.dataset.duration, 10) || 1500;
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }

      requestAnimationFrame(step);
    });
  }, [])
  return (
    <>
      <div className="top-bg">
        <img
          src="/assets/img/about/history.jpg"
          alt="Background"
          className="img-fluid"
        />
        <div className="title-banner">
          <h1>HISTORY</h1>
        </div>
      </div>

      <section className="stats-section dark">
        <div className="container">
          <div className="row text-center g-4 align-items-end">
            <div className="col-12 col-md-4">
              <div className="stat-item">
                <div className="stat-number display-3 fw-bold">
                  <span className="count" data-target="20" data-duration="1200"
                  >0</span
                  >
                </div>
                <div className="stat-label">Blue Banners</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="stat-item">
                <div className="stat-number display-3 fw-bold">
                  <span
                    className="count"
                    data-target="100"
                    data-suffix="+"
                    data-duration="1400"
                  >0</span
                  >
                </div>
                <div className="stat-label">Awards</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="stat-item">
                <div className="stat-number display-3 fw-bold">
                  <span className="count years" data-target="23" data-duration="1200"
                  >0</span
                  >
                </div>
                <div className="stat-label">Years Competing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="split-section light" id="history">
        <div className="container">
          <div className="row align-items-start g-4">
            <div className="col-12 col-lg-6 sticky-col">
              <div
                id="historyCarousel"
                className="history-carousel carousel slide"
                data-bs-interval="false"
              >
                <div className="carousel-indicators">
                  {Array.from({ length: journeyData.slides }).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      data-bs-target="#historyCarousel"
                      data-bs-slide-to={idx}
                      className={idx === 0 ? "active" : ""}
                      aria-current={idx === 0 ? "true" : undefined}
                      aria-label={`Slide ${idx + 1}`}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner rounded-3 overflow-hidden">
                  {Array.from({ length: journeyData.slides }).map((_, idx) => (
                    <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                      <img
                        src={`../assets/img/history/slides/slide${idx + 1}.jpg`}
                        className="d-block w-100"
                        alt={`History slide ${idx + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#historyCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#historyCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="px-1 px-lg-3">
                <h2 className="mb-4 journey">Our Journey</h2>
                <div className="timeline-list list-group list-group-flush">
                  {journeyData.journey.map((entry, idx) => (
                    <div key={idx} className="list-group-item px-0">
                      <h5 className="mb-1">{entry.year}</h5>
                      <p className="mb-0">{entry.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="buttons-section new dark" id="buttons">
        <div className="container buttons-container">
          <div className="section-header">
            <h2>Buttons</h2>
          </div>
          <div className="buttons-groups">
            {Object.entries(buttonsData).map(([category, buttons]) => (
              <div key={category} className="mt-5">
                <h2 className="mb-4">{category}</h2>
                <div className="buttons-grid">
                  {buttons.map((button, idx) => (
                    <div key={idx} className="button-item">
                      <div className="button-image-wrapper">
                        <img
                          src={`/assets/img/history/buttons/${button.image}`}
                          alt={button.desc}
                          className="button-image"
                        />
                      </div>
                      <p>{button.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="awards-section new light" id="awards">
        <div className="container">
          <div className="section-header">
            <h2>AWARDS & RESULTS</h2>
          </div>

          <div className="row">
            {Object.entries(awardsData).reverse().map(([year, events]) => (
              <div key={year} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card624">
                  <div className="card-header-624">{year}</div>
                  <img
                    src={`../assets/img/history/years/${year}.jpg`}
                    alt={`${year} Highlights`}
                    className="card-img-624"
                  />
                  <div className="card-content-624 list-card">
                    {events.map((event, idx) => (
                      <div key={idx}>
                        <h5>{event.title}</h5>
                        <ul>
                          {event.awards.map((award, awardIdx) => (
                            <li key={awardIdx}>{award}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default History;