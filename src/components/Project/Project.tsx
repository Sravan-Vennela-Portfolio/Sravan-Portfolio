import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX" className="form-control">
          <div className="project" style={{width: '100%'}}>
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>MANAGRUHAM</h3>
              <p>
                As a UI & UX Developer, I was responsible for
designing and developing user interfaces, ensuring seamless user
experiences through modern design principles and front-end
technologies. My role involved creating visually appealing designs,
implementing responsive layouts, and enhancing user interactions
using tools like Adobe XD, Figma, Inkscape, and Photoshop, along
with front-end technologies such as HTML and CSS.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Material UI</li>
                <li>React.js</li>
                <li>GitHub</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX" className="form-control">
          <div className="project" style={{width: '100%'}}>
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>INSTEDIA WEBSITE</h3>
              <p>
              This application is mainly focused on Routing & Tracking the
                mining truck Locations. Used Mapbox library for creating layers
                & routes. Used highcharts for creating charts related to the
                data of trucks in mining.Working knowledge of front-end
                optimization and performance techniques. Makes design
                recommendations towards the development of new code or reuse of
                existing code. Took an active role in structuring our reusable
                components to make them easy to maintain and to ensure they are
                highly modularized.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Material UI</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>GitHub</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX" className="form-control">
          <div className="project" style={{width: '100%'}}>
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Event Calendar</h3>
              <p>
                This Application helps the MNCs to create a Calendar which is
                limited to the particular organization. We can create, edit,
                delete an event that is schedule to the team. When a person from
                a specific team is logged-in only events related to that team
                are visible. Converted text to image. Created a package which
                can be used by organization using which we can upload images or
                files or video or audio.Worked with UI / UX designers to help
                create and then implemented best design practices. Extensive
                knowledge of CSS and JS methods for providing performance visual
                effects. Work with mobile app developers to interface with
                native app features. Worked in Test Driven Development
                environment, leveraging QA automation test suite to provide unit
                tests and integration tests for all new functionality.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular.js</li>
                <li>Syncfusion</li>
                <li>Node.js</li>
                <li>Postgres</li>
                <li>Github</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="flipInX" className="form-control">
          <div className="project" style={{width: '100%'}}>
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>HRMS</h3>
              <p>
                HRMS application helps any organization to manage employee
                details & assets etc. Admin can create tenants & employees and
                manage their data and give only specific access to them, which
                they can moodify but new access cannot be added by them until
                and unless its approved by admin. Cooperated with the back-end
                developer in the process of building the RESTful API.I have been
                responsible for maintenance of applications with technologies
                such as HTML5/JavaScript/Bootstrap. Collaborated with the QA team to define test cases, and metrics, and resolve questions
                about test results.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Material UI</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>GitHub</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
