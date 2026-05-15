import { useEffect } from 'react'
import teamData from '../data/team.json'
import '@/assets/css/team.css'

const Team = () => {
  const { currentStudents, boosterClubOfficers, teamMentors, alumni } = teamData

  return (
    <>
      <div className="top-bg bg-75">
        <img
          src="assets/img/team/banner.jpg"
          alt="Background"
        />
        <div className="title-banner">
          <h1>OUR TEAM</h1>
        </div>
      </div>

      <section className="students-section dark" id="students">
        <div className="container">
          <div className="section-header">
            <h2>CURRENT STUDENTS</h2>
          </div>

          <div className="grade-groups">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="grade-card">
                  <h3>FRESHMEN</h3>
                  <ul className="student-list">
                    {currentStudents.freshmen.map((student, index) => (
                      <li key={index}>{student}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="grade-card">
                  <h3>SOPHOMORES</h3>
                  <ul className="student-list">
                    {currentStudents.sophomores.map((student, index) => (
                      <li key={index}>{student}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="grade-card">
                  <h3>JUNIORS</h3>
                  <ul className="student-list">
                    {currentStudents.juniors.map((student, index) => (
                      <li key={index}>{student}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="grade-card">
                  <h3>SENIORS</h3>
                  <ul className="student-list">
                    {currentStudents.seniors.map((student, index) => (
                      <li key={index}>{student}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mentors-section light" id="officers">
        <div className="container">
          <div className="section-header">
            <h2>BOOSTER CLUB OFFICERS</h2>
          </div>

          <div className="mentors-grid">
            {Object.entries(boosterClubOfficers).map(([name, position]) => (
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
            <h2>TEAM MENTORS</h2>
          </div>

          <div className="mentors-grid">
            {teamMentors.map((mentor, index) => (
              <div className="mentor-card" key={index}>
                <h4>{mentor}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alumni-section light" id="alumni">
        <div className="container">
          <div className="section-header">
            <h2>ALUMNI</h2>
          </div>

          <div className="alumni-grid new">
            <div className="row">
              {Object.entries(alumni).sort((a, b) => parseInt(b[0]) - parseInt(a[0])).map(([year, data]) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={year}>
                  <div className="card624">
                    <div className="card-header-624">{year}</div>
                    <img
                      src={data.picture}
                      alt={`Class of ${year}`}
                      className="card-img-624"
                    />
                    <div className="card-content-624 alumni-card">
                      <ul>
                        {data.students.map((student, index) => (
                          <li key={index}>{student}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team