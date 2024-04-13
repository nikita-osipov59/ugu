import { UserContext } from "../../UserProvider";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ROUTER_PATH } from "../../const/PATH";
import "./index.scss";

export const NavBar = () => {
  let [isMenu, setMenu] = useState(false);

  const showHideMenu = () => {
    const menu = document.getElementsByClassName("nav_menu")[0];
    if (isMenu) {
      menu.style.display = "none";
      setMenu(false);
    } else {
      menu.style.display = "flex";
      setMenu(true);
    }
  };

  const quit = () => {
    localStorage.clear();
    navigate(ROUTER_PATH.AUTH);
  };

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header>
      <ul className="navbar_cont">
        <li>
          <Link to={ROUTER_PATH.HOME}>
            <img className="logo_cont" />
          </Link>
        </li>
        <li>
          <button onClick={showHideMenu}>{user.login}</button>
        </li>
        <div className="nav_menu">
          <button onClick={() => navigate(ROUTER_PATH.HOME)}>Главная</button>
          <button onClick={() => navigate(ROUTER_PATH.PROFILE)}>Профиль</button>
          <button onClick={() => quit()}>Выход</button>
        </div>
      </ul>
    </header>
  );
};
