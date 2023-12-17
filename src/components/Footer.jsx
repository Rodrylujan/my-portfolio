import "../style/Footer.css";
import iconGit from "../images/projects/github.svg";
import iconEmail from "../images/email.svg";
import iconLinkedin from "../images/linkedin.svg";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="mensaje-final">Contactame y trabajemos juntos</div>
      <div className="contenedor-redes">
        <a
          href="https://www.linkedin.com/in/yober-rodriguez-6794b8270/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="iconos" src={iconLinkedin} alt="icon github" />
        </a>
        <a
          href="https://github.com/Rodrylujan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="iconos" src={iconGit} alt="icon github" />
        </a>
        <a href="mailto:yober.la14@gmail.com">
          <img className="iconos" src={iconEmail} alt="icon github" />
        </a>
      </div>
      <hr />
      <div className="autor">
        &#169; Copyright 2023. Creado por Yober Rodriguez
      </div>
    </footer>
  );
};
