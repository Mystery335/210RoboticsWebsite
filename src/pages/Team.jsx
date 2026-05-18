import { useEffect } from 'react'
import teamData from '../data/team.json'
import '@/assets/css/team.css'

const Team = ({siemensMode}) => {
  const {Team, teamMentors, Officers} = teamData

  return !siemensMode ?(
    <>
      <div className="top-bg bg-75">
        <img
          src="assets/img/team/banner.jpg"
          alt="Background"
        />
        <div className="title-banner">
          <h1>MEET THE TEAM</h1>
        </div>
      </div>

      

      <section className="mentors-section light" id="team">
        <div className="container">

          <div className="mentors-grid">
            {Object.entries(Team).map(([name, position]) => (
              <div className="mentor-card" key={name}>
                <h4>{name}<br /><small>{position}</small></h4>              
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mentors-section mentors-alt dark" id="mentors">
        <div className="container">
          <div className="section-header">
            <h2>TEAM MENTOR</h2>
          </div>

          <div className="">
            {teamMentors.map((mentor, index) => (
              <div className="mentor-card" key={index} id="teamMentor">
                <span>{mentor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  ) : (<>
    <div className="top-bg bg-75">
        <img
          src="assets/img/team/banner.jpg"
          alt="Background"
        />
        <div className="title-banner">
          <h1>MEET THE TEAM</h1>
        </div>
      </div>

      <section className="mentors-section light" >
        <div className="container">

          <div id="officers">
            {Object.entries(Officers).map(([name, position]) => (
              <div className="mentor-card" key={name}>
                <h4>{name}<br /><small>{position}</small></h4>              
              </div>
            ))}
          </div>
        </div>
      </section>
      
  </>);
}

export default Team