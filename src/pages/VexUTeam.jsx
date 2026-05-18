import teamData from "../data/team.json";
import "@/assets/css/team.css";

function VexUTeam() {
  const { Officers } = teamData;

  return (
    <>
      <div className="top-bg bg-75">
        <img src="assets/img/team/banner.jpg" alt="Background" />
        <div className="title-banner">
          <h1>Vex U Officers</h1>
        </div>
      </div>

      <section className="mentors-section light">
        <div className="container">
          <div id="officers">
            {Object.entries(Officers).map(([name, position]) => (
              <div key={name} className="mentor-wrapper">
                <div className="mentor-card">
                  <h4>
                    {name}
                    <br />
                    <small>{position}</small>
                  </h4>
                </div>
                <img
                  src={`assets/team/${name.trim()}.jpg`}
                  alt={name}
                  style={{
                    width: "75%",
                    height: "75%",
                    objectFit: "cover",
                    margin: "0 auto",
                    display: "block",
                    marginTop: "0.75rem",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default VexUTeam;
