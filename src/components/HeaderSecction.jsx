import PropTypes from "prop-types";
import '../style/HeaderSecction.css'
export const HeaderSecction = ({ subTitle, description }) => {
  return (
    <>
      <h1>{subTitle}</h1>
      <div className="description-seccition">{description}</div>
    </>
  );
};

HeaderSecction.propTypes = {
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
