import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="education">
      <ScrollAnimation animateIn="fadeInLeft">
        <h2>EDUCATION</h2>
      </ScrollAnimation>

      <div className="education-content">
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <div className="education-item">
            <div className="edu-header">
              <h3>Lovely Professional University, Punjab, India</h3>
              <span className="date">Aug’2023 - Present</span>
            </div>
            <p>B.Tech – Computer Science and Engineering | CGPA: 6.92</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="education-item">
            <div className="edu-header">
              <h3>Siddharth Public School, Siddharth Nagar, Uttar Pradesh</h3>
              <span className="date">Apr’2022 - Mar’2023</span>
            </div>
            <p>Intermediate (Class XII) – 67.4%</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <div className="education-item">
            <div className="edu-header">
              <h3>Siddharth Public School, Siddharth Nagar, Uttar Pradesh</h3>
              <span className="date">Apr’2020 - Mar’2021</span>
            </div>
            <p>Matriculation (Class X) – 83.2%</p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
