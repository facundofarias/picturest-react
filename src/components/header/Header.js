import "./Header.css";
import Logo from "../../assets/logo.png";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const localStorageUser = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="header__container">
      <div className="header__logo">
        <div className="button__container" onClick={() => history.push("/")}>
          <img className="img__logo" src={Logo} alt="Picturest Logo" />
        </div>
      </div>
      <div className="header_userInfo__container">
        {localStorageUser ? (
          <img
            onClick={() => history.push("/user")}
            src={localStorageUser?.avatar}
            className="header_userInfo__image"
            alt="User avatar"
          />
        ) : (
          <Link className="header_login_button" to="/login">
            Login!
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
