import '@/assets/css/robots.css'
import robotsData from '../data/robots.json'
import { Link } from 'react-router-dom'

const RoboRowdy = () => {
  const years = Object.keys(robotsData).sort((a, b) => b - a)

  return (
    <>
      <div className="top-bg bg-75">
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
            <p>RoboRowdy is an autonomous robot with the purpose of improving sustainability in 3D Print Farms.
              It removes completed prints, cleans the build plate, and restarts the print for mid to large-scale 3D print farms by removing 
              human intervention, improving operational efficiency, reducing errors, and minimizing downtime. 
              The increase in throughput and uptime paves the way for future advancements in additive manufacturing.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default RoboRowdy;