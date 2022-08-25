// import logo from "../img/axios-fetch.png";
import "../style/Header.css";

const Header = ({ userName }) => {
  return (
    <header className="header">
      <h1>Hello {userName} ! Welcome on my API website.</h1>
      <h2>The purpose : Fetching Data From an API in React.</h2>
      {/* <img className="logo" src={logo} alt="logo" /> */}
      <a
        className="link"
        href="https://www.linkedin.com/in/remisamson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        About me
      </a>
    </header>
  );
};

export default Header;
