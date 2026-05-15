import "@/assets/css/about/first.css";

const VEXU = () => {
  return (
    <>
      <div className="top-bg">
        <video autoPlay muted loop playsInline>
          <source src="/assets/morethanrobots.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="title-banner">
          <h1>
            <i>FIRST</i>® ROBOTICS
          </h1>
        </div>
      </div>
      <section className="first-section dark" id="first">
        <div className="container">
          <div className="section-header lined">
            <h2>WHAT IS COMPETITIVE ROBOTICS?</h2>
          </div>
          <div className="grid">
            <div className="row">
              <div
                className="col-lg-6 col-md-12 mb-4"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="robot-image mt-0">
                  <img
                    src="../assets/img/about/first/robots-on-field.jpg"
                    alt="Competitive Robot"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="grid-item">
                  <div className="first-description">
                    <p>
                      <i>FIRST</i> was founded in 1989 by prolific inventor Dean
                      Kamen as he became frustrated with popular culture's
                      obsession over sports and entertainment with little
                      interest in science and technology. He believed that it
                      was necessary to present science and technology in a fun
                      and exciting way. Teaming up with MIT mechanical engineer
                      professor Woodie Flowers, Mr. Kamen launched a program
                      called <i>FIRST</i>.
                    </p>
                  </div>
                  <div className="founder-images">
                    <div className="founder">
                      <img
                        src="../assets/img/about/first/dean-kamen.jpg"
                        alt="Dean Kamen"
                        className="img-fluid"
                      />
                      <p>Dean Kamen</p>
                    </div>
                    <div className="founder">
                      <img
                        src="../assets/img/about/first/woodie-flowers.jpg"
                        alt="Woodie Flowers"
                        className="img-fluid"
                      />
                      <p>Woodie Flowers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="cryptonite-item">
                  <div className="cryptonite-description">
                    <p>
                      CRyptonite is part of{" "}
                      <strong>
                        <i>FIRST</i>®
                      </strong>{" "}
                      (For Inspiration and Recognition of Science and
                      Technology), an international non-profit organization to
                      transform culture and inspire young people to be
                      technology leaders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="program-item lego">
                  <h3>
                    <i>FIRST</i> LEGO LEAGUE
                  </h3>
                  <p>Ages 9-16</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="program-item tech">
                  <h3>
                    <i>FIRST</i> TECH CHALLENGE
                  </h3>
                  <p>Ages 12-18</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                <div className="program-item robotics">
                  <h3>
                    <i>FIRST</i> ROBOTICS COMPETITION
                  </h3>
                  <p>Ages 14-18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="frc-section light" id="frc">
        <div className="container">
          <div className="section-header lined">
            <h2>FRC</h2>
          </div>
          <div className="frc-main-grid">
            <div className="frc-text-top">
              <p>
                The <i>FIRST</i> Robotics Competition (FRC) began in 1992 with
                only 28 teams competing in a New Hampshire high school gym. It
                paired high school students with professional engineers as
                mentors to teach them engineering, science, and technology in a
                fun and engaging way. This idea quickly caught on and spread
                throughout the country. As it grew, FRC stayed true to its core
                values of "Gracious Professionalism®" - even though teams
                fiercely compete, they respect their competitors and support
                them when it is needed.
              </p>
            </div>
            <div className="frc-image-left">
              <img
                src="../assets/img/about/first/frc/left.jpg"
                alt="FRC Students Celebrating"
              />
            </div>
            <div className="frc-image-middle">
              <img
                src="../assets/img/about/first/frc/middle.jpg"
                alt="FRC Stadium Competition"
              />
            </div>
            <div className="frc-image-right">
              <img
                src="../assets/img/about/first/frc/right.jpg"
                alt="FRC Robot Close-up"
              />
            </div>
            <div className="frc-text-bottom">
              <p>
                Today, there are more than 5,784 FRC teams, and <i>FIRST</i> has
                grown to encompass numerous programs. The <i>FIRST</i> LEGO®
                League (FLL) and <i>FIRST</i> LEGO® League Jr. programs give
                elementary and middle school students the chance to use
                engineering principles with Lego robots, and the <i>FIRST</i>{" "}
                Tech Challenge (FTC) teaches science and technology to middle
                school and high school students.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="seasons-section dark" id="seasons">
        <div className="container">
          <div className="section-header lined">
            <h2>THE SEASONS</h2>
          </div>
          <div className="seasons-content">
            <div className="row seasons-row">
              <div className="col-4 seasons-image">
                <img
                  src="../assets/img/about/first/seasons/pre.jpg"
                  alt="Pre Season Activities"
                  className="img-fluid"
                />
              </div>
              <div className="col-8 seasons-text">
                <h3>Pre Season</h3>
                <p>
                  Before the official season begins, teams spend time preparing
                  and training. This includes recruiting new members, teaching
                  fundamental skills, and reviewing past seasons to improve
                  strategies. Teams also work on organizational skills,
                  fundraising, and building team culture.
                </p>
              </div>
            </div>
            <div className="row seasons-row seasons-row-reverse">
              <div className="col-8 seasons-text">
                <h3>Kickoff</h3>
                <p>
                  The season officially begins with Kickoff, where the year's
                  game is revealed. Teams receive the game manual, field
                  elements, and kit of parts. This is an exciting day filled
                  with strategy discussions, initial prototyping ideas, and the
                  start of the intense 6-week build period.
                </p>
              </div>
              <div className="col-4 seasons-image">
                <img
                  src="../assets/img/about/first/seasons/kickoff.jpg"
                  alt="Kickoff Event"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row seasons-row">
              <div className="col-4 seasons-image">
                <img
                  src="../assets/img/about/first/seasons/build.jpg"
                  alt="Build Season"
                  className="img-fluid"
                />
              </div>
              <div className="col-8 seasons-text">
                <h3>Build Season</h3>
                <p>
                  The heart of <i>FIRST</i> Robotics - 6 weeks of intense
                  design, prototyping, building, and programming. Teams work
                  together to create a robot that can compete in the year's
                  game. This period teaches time management, engineering
                  principles, and collaborative problem-solving.
                </p>
              </div>
            </div>
            <div className="row seasons-row seasons-row-reverse">
              <div className="col-8 seasons-text">
                <h3>Competition</h3>
                <p>
                  Teams compete in regional and district events, showcasing
                  their robots and demonstrating gracious professionalism. It's
                  not just about winning - teams are judged on their robot
                  performance, community outreach, and how they embody{" "}
                  <i>FIRST</i> values.
                </p>
              </div>
              <div className="col-4 seasons-image">
                <img
                  src="../assets/img/about/first/seasons/comp.jpg"
                  alt="Competition Season"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row seasons-row">
              <div className="col-4 seasons-image">
                <img
                  src="../assets/img/about/first/seasons/off.jpg"
                  alt="Off Season Activities"
                  className="img-fluid"
                />
              </div>
              <div className="col-8 seasons-text">
                <h3>Off Season</h3>
                <p>
                  After competitions end, teams continue learning through
                  off-season events, community demonstrations, and skill
                  development. This is time for reflection, planning
                  improvements, and sharing knowledge with other teams and the
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="competitions-section light" id="competitions">
        <div className="container">
          <div className="section-header lined">
            <h2>THE COMPETITIONS</h2>
          </div>
          <div className="competitions-main-grid">
            <div className="competitions-info">
              <div className="competition-info-item">
                <h3>Matches</h3>
                <p>
                  Each FRC match is two and half minutes long. Alliances of
                  three teams each compete on a 54 x 26 foot field completing
                  game objectives. In the past, robots have been required to
                  shoot exercise balls into goals 15 feet off the ground, shoot
                  frisbees into relatively small goals above, and climb
                  free-standing bars with another robot in tow.
                </p>
              </div>
              <div className="competition-info-item">
                <h3>Competition Structure</h3>
                <p>
                  At any FRC competition, teams compete in a set of preliminary
                  matches, where for completing certain game objectives and
                  winning the match, teams collect Ranking Points. At the end of
                  prelims, the team with the most Ranking Points is considered
                  the first seed, and so on. Teams then partake in an "Alliance
                  Selection" process, where based on seeding, teams can invite
                  other teams to create an alliance for the Playoffs, a regular
                  seeded single-elimination bracket.
                </p>
              </div>
              <div className="competition-info-item">
                <h3>Involvement</h3>
                <p>
                  CRyptonite utilizes nearly forty students at each competition.
                  Before the team even competes, students go through a rigorous
                  tryout process to get a spot on the Drive Team and Pit Crew.
                  Following the selection of these roles, further tryouts are
                  held to decide who holds key scouting roles and other key
                  needs. All students attending a competition have already met a
                  high bar for attendance, and each student plays a distinct and
                  crucial role to ensure success.
                </p>
              </div>
            </div>
            <div className="competitions-right-column">
              <div className="more-than-robots-header">
                <h3>More than Robots</h3>
                <p>
                  As any CRyptonite student can attest, <i>FIRST</i> is a truly
                  incredible organization. Find out more about <i>FIRST</i>{" "}
                  at&nbsp;
                  <a
                    href="https://www.firstinspires.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.firstinspires.org
                  </a>
                </p>
              </div>
              <div className="competitions-awards">
                <div className="awards-container">
                  <div className="awards-title">
                    <h3>Awards</h3>
                  </div>
                  <div className="accordion" id="awardsAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingImpact">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseImpact"
                          aria-expanded="false"
                          aria-controls="collapseImpact"
                        >
                          <i>FIRST</i>&nbsp;Impact Award
                        </button>
                      </h2>
                      <div
                        id="collapseImpact"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingImpact"
                        data-bs-parent="#awardsAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            The <i>FIRST</i> Impact Award is the most
                            prestigious award at <i>FIRST</i>, it honors the
                            team that best represents a model for other teams to
                            emulate and best embodies the mission of{" "}
                            <i>FIRST</i>. It was created to keep the central
                            focus of <i>FIRST</i> Robotics Competition on the
                            ultimate goal of transforming the culture in ways
                            that will inspire greater levels of respect and
                            honor for science and technology, as well as
                            encouraging more of today's youth to become science
                            and technology leaders.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSafety">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSafety"
                          aria-expanded="false"
                          aria-controls="collapseSafety"
                        >
                          Safety Animation Award
                        </button>
                      </h2>
                      <div
                        id="collapseSafety"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSafety"
                        data-bs-parent="#awardsAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            The 2020 Safety Animation Award theme is
                            <em>'Sustainability on the RISE'</em>. This season
                            presents a unique opportunity for us to RISE
                            together to transform world sustainability. Your
                            animation should focus on the theme of
                            sustainability giving consideration to the concepts:
                          </p>
                          <ul>
                            <li>sustainable cities and communities</li>
                            <li>responsible consumption and production.</li>
                          </ul>
                          <p>Animations must:</p>
                          <ul>
                            <li>
                              Be no more than 40 seconds long, including opening
                              and credits
                            </li>
                            <li>
                              Be animated. Any kind of animation, including
                              stop-motion, is allowed. Live video is allowed
                              provided it is accompanied by virtual/augmented
                              animated elements. Live video of people is not
                              allowed.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingEngineering">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEngineering"
                          aria-expanded="false"
                          aria-controls="collapseEngineering"
                        >
                          Engineering Inspiration Award
                        </button>
                      </h2>
                      <div
                        id="collapseEngineering"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEngineering"
                        data-bs-parent="#awardsAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Celebrates outstanding success in advancing respect
                            and appreciation for engineering within a team's
                            school or organization and community.
                          </p>
                          <ul>
                            <li>
                              Extent and inventiveness of the team's efforts to
                              recruit students to engineering with particular
                              emphasis on the most recent year's efforts.
                              Measurable success of those efforts.
                            </li>
                            <li>
                              Extent and effectiveness of the team's community
                              outreach efforts with particular emphasis on the
                              most recent year's efforts. Measurable success of
                              those efforts.
                            </li>
                            <li>
                              A commitment to science and technology education
                              among the team, school, and community.
                            </li>
                            <li>
                              Achievement of the{" "}
                              <em>
                                <i>FIRST</i>
                              </em>{" "}
                              mission and ability to communicate that at the
                              competition and aw
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingDesign">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseDesign"
                          aria-expanded="false"
                          aria-controls="collapseDesign"
                        >
                          Industrial Design Award
                        </button>
                      </h2>
                      <div
                        id="collapseDesign"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingDesign"
                        data-bs-parent="#awardsAccordion"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li>
                              A team spokesperson must be able to identify and
                              describe the controls innovation and can trace its
                              conception, design, manufacturing/assembly, or
                              deployment.
                            </li>
                            <li>
                              The control system is innovative and unique. It is
                              integrated with the machine, human players,
                              strategy, etc. in concept and execution.
                            </li>
                            <li>
                              The innovation is practical; it addresses the
                              game's challenge. It is not just a cute idea and
                              is reliable under the stress of competition.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingAutonomous">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseAutonomous"
                          aria-expanded="false"
                          aria-controls="collapseAutonomous"
                        >
                          Autonomous Award
                        </button>
                      </h2>
                      <div
                        id="collapseAutonomous"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingAutonomous"
                        data-bs-parent="#awardsAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Celebrates the team that has demonstrated
                            consistent, reliable, high-performance robot
                            operation during autonomously managed actions.
                            Evaluation is based on the robot's ability to sense
                            its surroundings, position itself or onboard
                            mechanisms appropriately, and execute tasks.
                          </p>
                          <p>
                            The award is based on the performance of the robot's
                            autonomous (non-operator guided) operations during
                            matches
                          </p>
                          <ul>
                            <li>
                              Consistent and reliable operation is weighted more
                              heavily than the ability to score maximum points
                              during any specific autonomously managed actions
                            </li>
                            <li>
                              A team spokesperson must be able to explain:
                              <ul>
                                <li>
                                  How the robot understands its surroundings,
                                  navigates on the field or positions onboard
                                  mechanisms and then executes tasks.
                                </li>
                                <li>
                                  The factors the teams considered that could
                                  interfere with success during autonomously
                                  managed actions.
                                </li>
                                <li>
                                  The design, development, and testing that was
                                  done for the robot's autonomously managed
                                  actions.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingControl">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseControl"
                          aria-expanded="false"
                          aria-controls="collapseControl"
                        >
                          Innovation in Control Award
                        </button>
                      </h2>
                      <div
                        id="collapseControl"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingControl"
                        data-bs-parent="#awardsAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Celebrates an innovative control system or
                            application of control components – electrical,
                            mechanical or software – to provide unique machine
                            functions.
                          </p>
                          <ul>
                            <li>
                              A team spokesperson must be able to identify and
                              describe the controls innovation and can trace its
                              conception, design, manufacturing/assembly, or
                              deployment.
                            </li>
                            <li>
                              The control system is innovative and unique. It is
                              integrated with the machine, human players,
                              strategy, etc. in concept and execution.
                            </li>
                            <li>
                              The innovation is practical; it addresses the
                              game's challenge. It is not just a cute idea and
                              is reliable under the stress of competition.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSpirit">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSpirit"
                          aria-expanded="false"
                          aria-controls="collapseSpirit"
                        >
                          Team Spirit Award
                        </button>
                      </h2>
                      <div
                        id="collapseSpirit"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSpirit"
                        data-bs-parent="#awardsAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Celebrates extraordinary enthusiasm and spirit
                            through exceptional partnership and teamwork
                            furthering the objectives of{" "}
                            <em>
                              <i>FIRST</i>
                            </em>
                            .
                          </p>
                          <ul>
                            <li>
                              Spirit is consistent both throughout the team and
                              also throughout the contest in attitude,
                              appearance, originality, and depth.
                            </li>
                            <li>
                              The team displays obvious enthusiasm – in
                              supporting teams, appearance, interactions with
                              teams/Judges, etc. – at the competition.
                            </li>
                            <li>
                              Spirit is part of the team and is apparent in all
                              they do, including at their school, in their
                              community, with sponsors and other teams, etc.
                            </li>
                            <li>They demonstrate spirit as a unified team.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingDeans">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseDeans"
                          aria-expanded="false"
                          aria-controls="collapseDeans"
                        >
                          Dean's List Award
                        </button>
                      </h2>
                      <div
                        id="collapseDeans"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingDeans"
                        data-bs-parent="#awardsAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Criteria for selection of the
                            <em>
                              <i>FIRST</i>
                            </em>{" "}
                            Dean's List Award shall include, but not be limited
                            to a student's:
                          </p>
                          <ul>
                            <li>
                              Demonstrated leadership and commitment to the
                              <em>
                                <i>FIRST</i>
                              </em>{" "}
                              Core Values
                            </li>
                            <li>
                              Effectiveness at increasing awareness of
                              <em>
                                <i>FIRST</i>
                              </em>{" "}
                              in the school and community
                            </li>
                            <li>
                              Interest in and passion for a long-term commitment
                              to{" "}
                              <em>
                                <i>FIRST</i>
                              </em>
                            </li>
                            <li>
                              Overall individual contribution to their team
                            </li>
                            <li>Technical expertise and passion</li>
                            <li>Entrepreneurship and creativity</li>
                            <li>
                              Ability to motivate and lead fellow team members
                            </li>
                          </ul>
                          <p>
                            Although a single mentor must submit the nomination,
                            the team as a whole must verify the accuracy of the
                            submission.{" "}
                            <em>
                              <i>FIRST</i>
                            </em>{" "}
                            is relying upon the team for the veracity and
                            accuracy of the submission data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingWoodie">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseWoodie"
                          aria-expanded="false"
                          aria-controls="collapseWoodie"
                        >
                          Woodie Flowers Award
                        </button>
                      </h2>
                      <div
                        id="collapseWoodie"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingWoodie"
                        data-bs-parent="#awardsAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            This award recognizes an individual who has done an
                            outstanding job of motivation through communication
                            while also challenging the students to be clear and
                            succinct in their communications. As such, it is
                            very important that this be a student-led effort and
                            a student decision. One student will act as the
                            nominator. Lead Mentors/Coaches should direct 1 or 2
                            students to the online entry site and let the high
                            school students decide whom to nominate. Adults can
                            help edit and should check the essay and the
                            submission information for accuracy, but this must
                            be a student-led effort. The author(s) of the
                            3,000-character (max.) essay must be clearly
                            identified as high school students in the online
                            submission.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VEXU;
