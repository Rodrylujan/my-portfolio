import "../style/Home.css";
import { Nav } from "react-bootstrap";

export const Home = () => {
  return (
    <section id="home">
      <h1 className="presentacion">Hi, I&apos;M</h1>
      <p className="description">
        Student of computer systems engineering, currently in the 10th semester.
      </p>
      <p className="description">
        I have experience as a frontend developer, using the React library, and
        working in environments based on Node.js
      </p>
      <Nav.Link className="button-project" href="#projects">Projects</Nav.Link>
      <span className="mouse">
        <span className="mouse-wheel"></span>
      </span>
    </section>
  );
};
