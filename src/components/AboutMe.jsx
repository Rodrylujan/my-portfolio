import { Skill } from "./Skill";
import logoHtml from '../images/skills/html.svg'
import logoCss from '../images/skills/css.svg'
import logoJavaScript from '../images/skills/javascript.svg'
import logoReact from '../images/skills/react.svg'
import logoNode from '../images/skills/node.svg'
import logoCsharp from '../images/skills/csharp.svg'
import { Nav } from "react-bootstrap";
import '../style/AboutMe.css'

export const AboutMe = () => {
  return (
    <section id="about-me">
      <h1>About me</h1>
      <div className="description-seccition">
        In this section, you will find information about my skills and the
        technologies I work with
      </div>
      <div className="body-secction-about">
        <div className="section-know-me">
          <h2>Get to Know me</h2>
          <p>
            I am a student in the computer systems engineering program,
            currently in the 10th semester. I work as a Frontend web developer.
            During my time at the university, I have worked on various web and
            desktop projects as part of my coursework. I am open to job
            opportunities where I can showcase my skills and knowledge. If you
            believe I am a suitable candidate for an opportunity, please feel
            free to contact me
          </p>
          <Nav.Link className="button-project" href="#contact">Contact</Nav.Link>
        </div>
        <div className="section-skills">
          <h2>Skills</h2>
          <div className="contenedor-skills">
            <Skill ability="HTML" image={logoHtml} description="icon html"></Skill>
            <Skill ability="CSS" image={logoCss} description="icon CSS"></Skill>
            <Skill ability="JavaScript" image={logoJavaScript} description="icon JavaScript"></Skill>
            <Skill ability="React" image={logoReact} description="icon React"></Skill>
            <Skill ability="Node" image={logoNode} description="icon Node"></Skill>
            <Skill ability="C#" image={logoCsharp} description="icon Csharp"></Skill>
          </div>
        </div>
      </div>
    </section>
  );
};
