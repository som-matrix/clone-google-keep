import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// SVG's
import Logo from "../assets/google-keep (1).png";

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
    <div className="w-screen h-20">
      <div className="flex p-2 items-center max-w-full">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink" onClick={() => setShowMenu(!showMenu)}>
            <h1>Menu</h1>
          </div>
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="keep-logo" />
            <Link to="/">
              <h1>Keep</h1>
            </Link>
          </div>
        </div>
        <div
          className="flex flex-grow"
          onClick={() => setShowSetting(!showSetting)}
        >
          <form onSubmit={searchHandler}>
            <h2>Search icon</h2>
            <input type="text" placeholder="Search here" />
          </form>
          <h2>Setting icon</h2>
        </div>
      </div>
      {!showSetting && (
        <div className="down">
          <h3 onClick={themeHandler}>Toggle theme</h3>
        </div>
      )}
    </div>
  );
};

export default Header;
