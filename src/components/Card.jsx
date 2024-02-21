import propsTypes from "prop-types";

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

Card.propTypes = {
  children: propsTypes.node.isRequired,
};

export default Card;
