import { Container } from "./styles";
import Sravan from "../../assets/sravan.jpg";
import htmlIcon from "../../assets/html-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import angularIcon from "../../assets/angular-icon.png";
import figma from "../../assets/figma.svg"
import adobe from "../../assets/adobe-xd.png";
import ink from "../../assets/inkscape.webp";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi there! I'm Vennela Sravan Kumar, a UI/UX Developer with 3.5 years of
          experience with proficiency in HTML, CSS, JavaScript, and modern
          design tools such as Figma and Adobe XD. Experienced in responsive web
          design, UI/UX principles, and front-end frameworks like Bootstrap and
          Tailwind CSS. Adept at collaborating with developers and stakeholders
          to bring concepts to life while ensuring seamless functionality across
          devices. Strong problem-solving skills and committed to delivering
          high-quality digital experiences that enhance brand identity and user
          engagement.
        </p>
        <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          I have gained hands-on experience working as a UI/UX developer and
          love tackling projects that push my boundaries. You can explore some
          of my work in the projects section.
        </p>
        <p>
          I am open to new collaborations and opportunities where I can
          contribute and grow. Feel free to connect with me; links are in the
          footer.
        </p>

        <h3>Here are my main skills:</h3>
        <div className="hard-skills">
          <div className="hability" title="VS Code">
            <img src={vscodeIcon} alt="Visual Studio Code" />
          </div>
          <div className="hability" title="React">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="hability" title="Angular">
            <img src={angularIcon} alt="Angular" />
          </div>
          {/* <div className="hability" title="TypeScript">
            <img src={typescriptIcon} alt="TypeScript" />
          </div> */}
          {/* <div className="hability" title="Node JS">
            <img src={nodeIcon} alt="Node.js" />
          </div> */}
          <div className="hability" title="HTML">
            <img src={htmlIcon} alt="HTML" />
          </div>
          <div className="hability" title="CSS">
            <img src={cssIcon} alt="CSS" />
          </div>
          <div className="hability" title="Bootstrap">
            <img src={bootstrapIcon} alt="Bootstrap" />
          </div>
          <div className="hability" title="Javascript">
            <img src={jsIcon} alt="JavaScript" />
          </div>
          <div className="hability" title="Figma">
            <img src={figma} alt="Figma" />
          </div>
          <div className="hability" title="Adobe XD">
            <img src={adobe} alt="Adobe XD" />
          </div>
          <div className="hability" title="Inkscape">
            <img src={ink} alt="Inkscape" />
          </div>
        </div>
      </div>
      <div className="about-image">
        <img style={{ borderRadius: "20px" }} src={Sravan} alt=" Sravan Kumar Vennela" />
      </div>
    </Container>
  );
}
