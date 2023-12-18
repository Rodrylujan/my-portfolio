import "../style/Footer.css";
import iconGit from "../images/projects/github.svg";
import iconEmail from "../images/email.svg";
import iconLinkedin from "../images/linkedin.svg";
import { IconPersonalized } from "./IconPersonalized";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="mensaje-final">
        Contact me and let&apos;s work together
      </div>
      <div className="contenedor-redes">
        <IconPersonalized
          link="https://www.linkedin.com/in/yober-rodriguez-6794b8270/"
          icon={iconLinkedin}
          description="icon github"
        ></IconPersonalized>
        <IconPersonalized
          link="mailto:yober.la14@gmail.com"
          icon={iconEmail}
          description="icon gmail"
        ></IconPersonalized>
        <IconPersonalized
          link="https://github.com/Rodrylujan"
          icon={iconGit}
          description="icon github"
        ></IconPersonalized>
      </div>
      <hr />
      <div className="autor">
        &#169; Copyright 2023. Created by Yober Rodriguez
      </div>
    </footer>
  );
};
