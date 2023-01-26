import React, { useState } from "react";
// Global Component
import Header from "./components/header";

function App() {
  const [theme, setCurrentTheme] = useState("dark");
  const [showMenu, setShowMenu] = useState("false");
  const themes = window.localStorage.getItem("theme");
  return (

        <div className="App">
          <Header
            theme={theme}
            setCurrentTheme={setCurrentTheme}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </div>
  
   
  );
}

export default App;
