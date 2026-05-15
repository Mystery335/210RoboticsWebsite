import '@/assets/css/robots.css'
import robotsData from '../data/robots.json'
import { Link } from 'react-router-dom'

const Robots = () => {
  const years = Object.keys(robotsData).sort((a, b) => b - a)

  return (
    <>
      <div className="top-bg bg-75">
        <video autoPlay muted loop playsInline>
          <source src="../assets/img/robots/25yrs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="title-banner">
          <h1>ROBOTS</h1>
        </div>
      </div>

      <section className="carousel-section">
        <div className="container">
          <div className="section-header">
            <h2>OUR ROBOTS</h2>
          </div>
        </div>
        <div className="container">
          <div className="robots-list">
            {years.map((year, index) => {
              const robot = robotsData[year]
              const coverImage = `../assets/img/robots/${year}/cover/cover1.png`
              
              return (
                <div key={year}>
                  <Link to={`/robots/${year}`} className="robot-list-item-link">
                    <div className="robot-list-item">
                      <img 
                        src={coverImage} 
                        alt={`${year} ${robot.robotName}`}
                        className="robot-list-image"
                      />
                      <div className="robot-list-content">
                        <h2>{year}: {robot.robotName}</h2>
                        <p>{robot.robotDescription}</p>
                        <span className="read-more">Read More</span>
                      </div>
                    </div>
                  </Link>
                  {index < years.length - 1 && <hr className="robot-divider" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Robots;