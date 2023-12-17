import imgProyecto01 from "../images/projects/proyecto01.webp";
import imgProyecto02 from "../images/projects/proyecto02.webp";
import imgProyecto03 from "../images/projects/proyecto03.webp";
import "../style/Projects.css";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section id="projects">
      <h1>My projects</h1>
      <div className="description-seccition">
        In this section, you will find some of my developed projects. It
        includes a brief description and an image, in addition to their
        respective links
      </div>
      <div className="body-section-projects">
        <Project
          image={imgProyecto01}
          name="My portfolio"
          description="Estos estilos proporcionan un diseño básico para el contenedor del proyecto, la imagen, la descripción y los enlaces. Puedes ajustar los colores, tamaños de fuente, márgenes y otros estilos según tus preferencias y el diseño general de tu aplicación.
                      Asegúrate de importar correctamente estos estilos en tu componente React y de tener imágenes válidas en las rutas proporcionadas (iconGit y iconWeb)."
          Linkweb="https://www.google.com/"
          linkGit="https://github.com/"
        ></Project>
        <Project
          image={imgProyecto02}
          name="search for movies with an API"
          description="Estos estilos proporcionan un diseño básico para el contenedor del proyecto, la imagen, la descripción y los enlaces. Puedes ajustar los colores, tamaños de fuente, márgenes y otros estilos según tus preferencias y el diseño general de tu aplicación.
                      Asegúrate de importar correctamente estos estilos en tu componente React y de tener imágenes válidas en las rutas proporcionadas (iconGit y iconWeb)."
          Linkweb="https://busqueda-peliculas.netlify.app/"
          linkGit="https://github.com/Rodrylujan/-busqueda-peliculas.git"
        ></Project>
        <Project
          image={imgProyecto03}
          name="Search for the weather of a city using two APIs"
          description="Estos estilos proporcionan un diseño básico para el contenedor del proyecto, la imagen, la descripción y los enlaces. Puedes ajustar los colores, tamaños de fuente, márgenes y otros estilos según tus preferencias y el diseño general de tu aplicación.
                      Asegúrate de importar correctamente estos estilos en tu componente React y de tener imágenes válidas en las rutas proporcionadas (iconGit y iconWeb)."
          linkGit="https://github.com/Rodrylujan/buscar-clima-ciudad-react.git"
        ></Project>
      </div>
    </section>
  );
};
