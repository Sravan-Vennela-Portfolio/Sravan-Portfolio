import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import linkedin from '../../assets/linkedin.svg'
import Hello from '../../assets/Hello.gif'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <h1>Vennela Sravan Kumar</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <h3>UI/UX Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <p className="small-resume">3.5 Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <BrowserRouter>
            <a href="https://www.linkedin.com/in/sravan-v-07a30933a/" className="button">Contact</a>
          </BrowserRouter>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp">
      <div className="social-media"><a
        href="https://www.linkedin.com/in/sravan-v-07a30933a/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight">
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}