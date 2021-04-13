import React, { useState } from "react";
import { GlobalStyles } from "./styles/globalStyle";
// Global Component
import Header from "./components/header";
// Pages
import Home from "./pages/home";
import SearchPage from "./pages/search";
import Trash from "./pages/trash";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const darkTheme = {
  backgroundColor: "#333",
  text: "#fff",
  input: "rgba(0,0,0,0.3)",
};
const lightTheme = {
  backgroundColor: "#fff",
  text: "#333333",
  input: "rgba(51, 51, 51,0.3)",
};
function App() {
  const [theme, setCurrentTheme] = useState("dark");
  const [searchedInput, setSearchedInput] = useState([]);
  const themes = window.localStorage.getItem("theme");
  return (
    <Router>
      <ThemeProvider theme={themes === "dark" ? darkTheme : lightTheme}>
        <div className="App">
          <GlobalStyles />
          <Header
            theme={theme}
            setCurrentTheme={setCurrentTheme}
            searchedInput={searchedInput}
            setSearchedInput={setSearchedInput}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <SearchPage searchedInput={searchedInput} />
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
