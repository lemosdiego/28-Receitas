import PropTypes from "prop-types";
import "./cta.css";

const Cta = ({ className, children }) => {
  return (
    <a
      href="https://pay.kiwify.com.br/B1lADmz"
      target="_blank"
      rel="noopener noreferrer"
      className={`cta ${className}`}
    >
      {children}
    </a>
  );
};

Cta.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Cta;
