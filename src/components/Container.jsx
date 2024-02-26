import propsTypes from "prop-types";

const Container = (props) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1200px",
    margin: "auto",
    padding: "0 20px",
  };
  return (
    <div className="container" style={containerStyle}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: propsTypes.node.isRequired,
};

export default Container;
