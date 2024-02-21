import propsTypes from "prop-types";

const Container = (props) => {
  return <div className="container">{props.children}</div>;
};

Container.propTypes = {
  children: propsTypes.node.isRequired,
};

export default Container;
