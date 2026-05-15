import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import robotsData from '../data/robots.json'
import '@/assets/css/global.css'
import '@/assets/css/robots.css'

const RobotDetail = () => {
  const { year } = useParams()
  const navigate = useNavigate()

  const robot = robotsData[year]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [year])

  useEffect(() => {
    if (!robot) {
      navigate('/404')
    }
  }, [robot, navigate])

  if (!robot) {
    return null
  }

  return (
    <>
      <div className="top-bg robot-detail-bg">
        {robot.numCover > 0 ? (
          <img
            src={`/assets/img/robots/${year}/cover/cover1.png`}
            alt="Robot Cover"
          />
        ) : (
          <div className="placeholder-bg"></div>
        )}
        <div className="title-banner">
          <h1>{year}: {robot.robotName}</h1>
        </div>
      </div>

      {robot.numCover > 0 && (
        <section className="carousel-section">
          <div className="container">
            <div id={`coverCarousel${year}`} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {Array.from({ length: robot.numCover }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target={`#coverCarousel${year}`}
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Cover ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {Array.from({ length: robot.numCover }).map((_, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={`/assets/img/robots/${year}/cover/cover${index + 1}.png`}
                      className="d-block w-100"
                      alt={`${robot.robotName} Cover ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              {robot.numCover > 1 && (
                <>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#coverCarousel${year}`}
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#coverCarousel${year}`}
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {}
      <section className="robot-detail-section">
        <div className="container my-5">
          <div className="robot-info-container">
            <div className="robot-main-content">
              <h1 className='mb-2'>{robot.robotName}</h1>
              <p>{robot.robotDescription}</p>
              {robot.robotFeatures.length > 0 && (
                <div className="robot-features">
                  <h5>Key Features:</h5>
                  <ul>
                    {robot.robotFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <img
              className='robot-picture'
              src={`/assets/img/robots/${year}/robot.png`}
              alt={robot.robotName}
              style={robot.robotPictureAspect ? { aspectRatio: robot.robotPictureAspect } : {}}
            />
          </div>
        </div>

        {}
        {robot.robotSubsystems.subsystems && robot.robotSubsystems.subsystems.length > 0 && (
          <div className="subsystems-section my-5">
            <div className="container">
              <h2>Subsystems</h2>
            </div>
            {robot.robotSubsystems.subsystems.map((subsystem, index) => (
              <div key={index}>
                <div className="container">
                  <div className="subsystem-item">
                    { subsystem.imageName && (
                      <img
                        src={`/assets/img/robots/${year}/subsystems/${subsystem.imageName}`}
                        className="subsystem-image"
                        alt={subsystem.title}
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    )}
                    <div className="subsystem-content">
                      <h4>{subsystem.title}</h4>
                      <p>{subsystem.description}</p>
                    </div>
                  </div>
                </div>
                <hr className="subsystem-divider" />
              </div>
            ))}
          </div>
        )}

        {robot.robotVideos && robot.robotVideos.length > 0 && (
          <div className="videos-section my-5">
            <div className="container">
              <h2>Videos</h2>
              <div className="videos-list">
                {robot.robotVideos.map((video, index) => {
                  const videoId = video.url.split('v=')[1]?.split('&')[0]
                  return (
                    <div key={index} className="video-item">
                      <h3>{video.type}</h3>
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`${robot.robotName} ${video.type}`}
                        allowFullScreen
                      ></iframe>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {Object.keys(robot.robotEvents).length > 0 && (
          <div className="container my-5">
            <h2>Events & Awards</h2>
            <div className="events-grid">
              {Object.entries(robot.robotEvents).map(([eventName, eventData], index) => (
                <div key={index} className="card624 no-img">
                  <div className="card-header-624">{eventName}</div>
                  <div className="card-content-624 list-card pt-2">
                    <ul>
                      <li><strong>Rank:</strong> {eventData.rank}</li>
                      <li><strong>Alliance:</strong> {eventData.alliance}</li>
                      {eventData.awards && eventData.awards.length > 0 && (
                        <>
                          <li><strong>Awards:</strong></li>
                          <ul className='mt-0'>
                            {eventData.awards.map((award, awardIndex) => (
                              <li key={awardIndex}>{award}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default RobotDetail