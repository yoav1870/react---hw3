import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  const HeaderStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={HeaderStyle}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "My first React App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#6d6aff",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
