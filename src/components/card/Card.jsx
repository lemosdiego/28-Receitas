import PropTypes from "prop-types";
import "./card.css";

const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Card;
