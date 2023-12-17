import '../style/Skill.css'
import PropTypes from 'prop-types'

export const Skill = ({ ability,image, description }) => {
  return (
    <div className="principal-skills">
      <img className="iconos" src={image} alt={description} />
      <div>{ability}</div>
    </div>
  );
};

Skill.propTypes = {
    ability: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
