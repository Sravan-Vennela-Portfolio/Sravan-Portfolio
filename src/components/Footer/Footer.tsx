import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";

export function Footer() {
  return (
    <Container className="footer">
      <h2>Made with ❤️ by Vennela Sravan Kumar</h2>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/sravan-v-07a30933a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </Container>
  );
}
