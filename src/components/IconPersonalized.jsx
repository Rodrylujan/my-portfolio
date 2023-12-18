import PropTypes from "prop-types"

export const IconPersonalized = ({ link, icon, description }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="iconos" src={icon} alt={description} />
    </a>
  );
};

IconPersonalized.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
