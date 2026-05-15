import '@/assets/css/headlines.css';
import headlinesData from '@/data/headlines.json';

const Headlines = () => {
  const sortedHeadlines = [...headlinesData.headlines].sort((a, b) => {
    return new Date(b.eventDate) - new Date(a.eventDate);
  });

  return (
    <>
      <div className="top-bg bg-75">
        <img
          src="assets/img/headlines/banner.jpg"
          alt=""
        />
        <div className="title-banner">
          <h1>HEADLINES</h1>
        </div>
      </div>

      <section className="headlines-section dark">
        <div className="container">
          <div className="headlines-list">
            {sortedHeadlines.map((headline, index) => (
              <div key={index} className="headline-item">
                <div className="headline-image-wrapper">
                  <div id={`headlineCarousel${index}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      {Array.from({ length: headline.numberEventImages }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          data-bs-target={`#headlineCarousel${index}`}
                          data-bs-slide-to={i}
                          className={i === 0 ? "active" : ""}
                          aria-current={i === 0 ? "true" : "false"}
                        ></button>
                      ))}
                    </div>
                    <div className="carousel-inner">
                      {Array.from({ length: headline.numberEventImages }).map((_, i) => (
                        <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                          <img src={`${headline.eventImageDir}img${i + 1}.jpg`} alt="" />
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#headlineCarousel${index}`} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#headlineCarousel${index}`} data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                  </div>
                </div>
                <div className="headline-content-wrapper">
                  <div className="headline-header">
                    <h3 className="headline-title">{headline.eventTitle}</h3>
                    <span className="headline-date-dot">•</span>
                    <p className="headline-date">{headline.eventDate}</p>
                  </div>
                  <p className="headline-text">{headline.eventContent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Headlines;
