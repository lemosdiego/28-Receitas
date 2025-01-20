import "react";
import PropTypes from "prop-types";
import Card from "../card/Card";
import "./layout.css";

const Layout = ({ title, items, className }) => {
  return (
    <section className={`section-layout ${className}`}>
      <h2 className="title-layout">{title}</h2>
      <div className="container-card-layout">
        {items.map((item, index) => (
          <Card key={index} className="card-layout">
            <img src={item.image} alt={item.title} className="image-layout" />
            <h3 className="title-card-layout">{item.title}</h3>
            <p className="description-card-layout">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: "",
};

export default Layout;
