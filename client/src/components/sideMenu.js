import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { StyledMenu } from "../styles/menuStyles";
import Notes from "../assets/note.png";
import Trash from "../assets/delete.png";
const SideMenu = ({ showMenu }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {!showMenu && (
        <StyledMenu
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          exit={{x:-100,opacity:0,transition:{duration:0.3}}}
        >
          <div className="menu" id={!showMenu ? "menu-active" : ""}>
            <div>
              <Link to="/">
                <img src={Notes} alt="notes" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <h3>Notes</h3>
              </Link>
            </div>
          </div>
          <div className="menu" id={!showMenu ? "menu-active" : ""}>
            <div>
              <Link to="/trash">
                <img src={Trash} alt="trash" />
              </Link>
            </div>
            <div>
              <Link to="/trash">
                <h3>Trash</h3>
              </Link>
            </div>
          </div>
        </StyledMenu>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
