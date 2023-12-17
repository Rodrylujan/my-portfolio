import PropTypes from "prop-types";
import iconGit from '../images/projects/github.svg'
import iconWeb from '../images/projects/web.svg'

export const Project = ({ image, name, description, linkGit, Linkweb }) => {
  return (
    <div className="contenedor-project">
      <img className="img-project" src={image} alt={description} />
      <div className="body-contenedor-project">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <div className="links-project">
          {linkGit && (
            <a href={linkGit} target="_blank" rel="noopener noreferrer">
              <img
                className="iconos"
                src={iconGit}
                alt="icon github"
              />
            </a>
          )}
          {Linkweb && (
            <a href={Linkweb} target="_blank" rel="noopener noreferrer">
              <img
                className="iconos"
                src={iconWeb}
                alt="Icon page web"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkGit: PropTypes.string,
  Linkweb: PropTypes.string,
};
