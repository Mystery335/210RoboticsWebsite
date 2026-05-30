import teamData from '../data/team.json'
import '@/assets/css/team.css'

const Team = () => {
  const {Team, teamMentors} = teamData

  return (
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
              <div key={name} className="mentor-wrapper">
                <div className="mentor-card">
                  <h4>{name}<br /><small>{position}</small></h4>
                </div>
                <img 
                  src={`assets/team/${name.trim()}.jpg`} 
                  alt={name}
                  style={{ width: '75%', height: '70%', objectFit: 'cover',  margin: '0 auto', display: 'block', marginTop:'0.75rem'}}
                />
            </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mentors-section mentors-alt dark" id="mentors">
        <div className="container">
          <div className="section-header">
            <h2>TEAM MENTORS</h2>
          </div>

          <div className="container team-grid">
            {teamMentors.map((mentor, index) => (
              <div className="mentor-card" key={index} id="teamMentor">
                <span>{mentor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mentors-section mentors-alt dark" id="mentors">
        <div className="container">
          <div className="section-header">
            <h2>Honorable Mention</h2>
          </div>

          <div className="container">
            <div className="mentor-card">
              <span>Jiseo Chon</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;