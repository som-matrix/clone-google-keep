import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// SVG's
import Logo from "../assets/google-keep (1).png";
import { Menu, Setting, Search, Notes, Trash } from "../assets/svg-icons";
import { motion } from "framer-motion";
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
        <div className="flex items-center h-full w-full justify-between p-3">
          <form
            className="flex items-center space-x-3  relative"
            onSubmit={searchHandler}
          >
            <div className="absolute inset-2 left-5 z-10">
              <Search />
            </div>
            <input
              className={`shadow-md pl-10 py-2 rounded-md ${
                theme === "dark" ? "bg-black text-white" : ""
              }`}
              placeholder="Search.."
              type="text"
            />
          </form>
          <div onClick={() => setShowSetting(!showSetting)}>
            <Setting />
          </div>
        </div>
      </div>
      {!showSetting && (
        <div className="absolute inset-y-20 right-8 cursor-pointer">
          <h3
            className={`font-md ${theme === "dark" ? "text-white" : ""}`}
            onClick={themeHandler}
          >
            Toggle theme
          </h3>
        </div>
      )}
      <div className="absolute">
        {!showMenu && (
          <motion.div
            className="h-auto max-w-xs p-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{ x: -100, opacity: 0, transition: { duration: 0.3 } }}
          >
            <div
              className={`flex items-center space-x-8 py-3 px-1 mb-6  ${
                theme === "dark" ? "hover:bg-yellow-500" : "hover:bg-yellow-200"
              } rounded-md`}
              id={!showMenu ? "menu-active" : ""}
            >
              <div>
                <Link to="/">
                  <Notes />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <h3>Notes</h3>
                </Link>
              </div>
            </div>
            <div
              className={`flex items-center space-x-8 py-3 px-1 w-72 ${
                theme === "dark" ? "hover:bg-yellow-500" : "hover:bg-yellow-200"
              } rounded-md`}
              id={!showMenu ? "menu-active" : ""}
            >
              <div>
                <Link to="/trash">
                  <Trash />
                </Link>
              </div>
              <div>
                <Link to="/trash">
                  <h3>Trash</h3>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
