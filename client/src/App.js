import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./styles/globalStyle";
// Global Component
import Header from "./components/header";
// Pages
import Home from "./pages/home";
import SearchPage from "./pages/search";
import Trash from "./pages/trash";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { keepAction } from "./actions/keepNotes";
const darkTheme = {
  backgroundColor: "#333",
  text: "#ffffff",
  input: "rgba(0,0,0,0.3)",
};
const lightTheme = {
  backgroundColor: "#fff",
  text: "#333333",
  input: "rgba(51, 51, 51,0.3)",
};
function App() {
  const [theme, setCurrentTheme] = useState("dark");
  const [showMenu, setShowMenu] = useState("false");
  const themes = window.localStorage.getItem("theme");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(keepAction());
  }, [dispatch]);
  return (
    <Router>
      <ThemeProvider theme={themes === "dark" ? darkTheme : lightTheme}>
        <div className="App">
          <GlobalStyles />
          <Header
            theme={theme}
            setCurrentTheme={setCurrentTheme}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <Switch>
            <Route exact path="/">
              <Home theme={theme} />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/trash">
              <Trash />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
