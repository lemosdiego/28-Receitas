import PropTypes from "prop-types";
import "./cta.css";
const Cta = ({ href, className, children }) => {
  return (
    <button href={href} className={`cta ${className}`}>
      {children}
    </button>
  );
};

Cta.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Cta;
