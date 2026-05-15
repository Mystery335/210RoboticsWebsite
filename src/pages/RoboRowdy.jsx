import '@/assets/css/robots.css'
import robotsData from '../data/robots.json'
import { Link } from 'react-router-dom'

const RoboRowdy = () => {
  const years = Object.keys(robotsData).sort((a, b) => b - a)

  return (
    <>
      <div className="top-bg bg-75">
        <video autoPlay muted loop playsInline>
          <source src="../assets/img/robots/25yrs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="title-banner">
          <h1>RoboRowdy</h1>
        </div>
      </div>

      <section className="carousel-section">
        <div className="container">
          <div className="section-header">
            <h2>What Is It?</h2>
          </div>
        </div>
        <div className="container">
          <div className="robots-list">
            <p>RoboRowdy is an autonomous robot with the purpose of improving sustainability in 3D Print Farms. </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default RoboRowdy;