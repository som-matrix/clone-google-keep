import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// SVG's
import Logo from "../assets/google-keep (1).png";
import { Menu, Setting, Search } from "../assets/svg-icons";
const Header = ({ theme, setCurrentTheme, showMenu, setShowMenu }) => {
  const history = useHistory();
  const [showSetting, setShowSetting] = useState("false");
  const themeHandler = () => {
    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
      setCurrentTheme("light");
      setShowSetting(" ");
    } else {
      window.localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
      setShowSetting(" ");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setCurrentTheme(localTheme);
  }, [theme, setCurrentTheme]);
  const searchHandler = (e) => {
    e.preventDefault();
    return history.push("/search");
  };
  return (
    <div className="w-screen h-20 relative">
      <div className="flex p-2 items-center max-w-full">
        <div className="flex items-center space-x-4 mx-2">
          <div className="flex-shrink" onClick={() => setShowMenu(!showMenu)}>
            <Menu />
          </div>
          <div className="flex items-center space-x-2">
            <img className="h-6 w-6" src={Logo} alt="keep-logo" />
            <Link to="/">
              <h1>Keep</h1>
            </Link>
          </div>
        </div>
        <div
          className="flex items-center flex-1 justify-between p-3"
          onClick={() => setShowSetting(!showSetting)}
        >
          <form
            className="flex items-center space-x-3"
            onSubmit={searchHandler}
          >
            <Search />
            <input type="text" placeholder="Search here" />
          </form>
          <div>
            <Setting />
          </div>
        </div>
      </div>
      {!showSetting && (
        <div className="absolute inset-y-10 right-3 cursor-pointer">
          <h3 onClick={themeHandler}>Toggle theme</h3>
        </div>
      )}
    </div>
  );
};

export default Header;
