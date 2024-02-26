import PropTypes from "prop-types";
import Container from "./Container";
import { FcHome } from "react-icons/fc";
const Header = ({ text, bgColor, textColor, getAllPlans }) => {
  const HeaderStyle = {
    height: "70px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={HeaderStyle}>
      <Container>
        <button className="all-plans" onClick={getAllPlans}>
          <FcHome />
        </button>
        <h1>{text}</h1>
      </Container>
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
  getAllPlans: PropTypes.func.isRequired,
};

export default Header;
