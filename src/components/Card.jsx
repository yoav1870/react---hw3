import propsTypes from "prop-types";

const Card = (props) => {
  const cardStyle = {
    backgroundColor: "#f4f4f4",
    color: "#333",
    borderRadius: "15px",
    padding: "40px 50px",
    margin: "20px 0",
    position: "relative",
  };
  return (
    <div className="card" style={cardStyle}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: propsTypes.node.isRequired,
  style: propsTypes.object,
};

export default Card;
