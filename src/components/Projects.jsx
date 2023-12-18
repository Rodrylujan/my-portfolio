import imgProyecto01 from "../images/projects/proyecto01.webp";
import imgProyecto02 from "../images/projects/proyecto02.webp";
import imgProyecto03 from "../images/projects/proyecto03.webp";
import { HeaderSecction } from "./HeaderSecction.jsx"
import "../style/Projects.css";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section id="projects">
      <HeaderSecction subTitle="My projects" description="In this section, you will find some of my developed projects. It
        includes a brief description and an image, in addition to their
        respective links"></HeaderSecction>
      <div className="body-section-projects">
        <Project
          image={imgProyecto01}
          name="My portfolio"
          description="It's my personal portfolio developed with React.js, JavaScript, and HTML"
          linkGit="https://github.com/Rodrylujan/my-portfolio.git"
        ></Project>
        <Project
          image={imgProyecto02}
          name="search for movies with an API"
          description="Project in which a free API was utilized to search for movies, and the results were displayed on the screen. HTML, JavaScript, and React were employed for this purpose"
          Linkweb="https://busqueda-peliculas.netlify.app/"
          linkGit="https://github.com/Rodrylujan/-busqueda-peliculas.git"
        ></Project>
        <Project
          image={imgProyecto03}
          name="Search for the weather of a city using two APIs"
          description="Project in which two free weather APIs were used. A search for cities is performed using the name, and with that data, the second API is used to return the weather of each city. React JavaScript and HTML were used for this"
          linkGit="https://github.com/Rodrylujan/buscar-clima-ciudad-react.git"
        ></Project>
      </div>
    </section>
  );
};
