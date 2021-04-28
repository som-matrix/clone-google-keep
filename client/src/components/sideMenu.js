import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Notes, Trash } from "../assets/svg-icons";
const SideMenu = ({ showMenu }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {!showMenu && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          exit={{ x: -100, opacity: 0, transition: { duration: 0.3 } }}
        >
          <div className="menu" id={!showMenu ? "menu-active" : ""}>
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
          <div className="menu" id={!showMenu ? "menu-active" : ""}>
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
    </AnimatePresence>
  );
};

export default SideMenu;
