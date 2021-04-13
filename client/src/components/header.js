import React, { useState,useEffect } from "react";
import {Link,useHistory} from 'react-router-dom'
// Styled-components
import { Container } from "../styles/globalStyle";
import { StyledHeader, SideMenu } from "../styles/headerStyles";
// SVG's
import Logo from "../assets/google-keep (1).png";
import Settings from "../assets/settings.png";
import Menu from "../assets/list.png";
import Search from "../assets/loupe.png";
import Notes from "../assets/note.png";
import Trash from "../assets/delete.png";

const Header = ({ theme, setCurrentTheme,searchedInput,setSearchedInput }) => {
  const history = useHistory()
  const [showSetting, setShowSetting] = useState("false");
  const [showMenu, setShowMenu] = useState("false");
  const themeHandler = () => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setCurrentTheme('light');
      setShowSetting(' ')
    } else {
      window.localStorage.setItem('theme', 'dark');
      setCurrentTheme('dark');
      setShowSetting(' ')
    }
  };
  useEffect(()=>{
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setCurrentTheme(localTheme)
  },[theme,setCurrentTheme])
  const searchHandler = (e)=>{
    e.preventDefault()
    return(
      history.push('/search')
    )
  }
  return (
    <div>
      <StyledHeader>
        <div className="flex">
          <div className="child-1">
            <div className="menu" onClick={()=>setShowMenu(!showMenu)}>
              <img src={Menu} alt="menu" />
            </div>
            <div className="logo">
              <img src={Logo} alt="keep-logo" />
              <Link to="/">
              <h1>Keep</h1>
              </Link>
            </div>
            <form onSubmit={searchHandler}>
              <img src={Search} alt="search" />
              <input value={searchedInput} type="text" placeholder="Search here" onChange={(e)=>setSearchedInput(e.target.value)}/>
            </form>
          </div>
          <div className="child-2" onClick={() => setShowSetting(!showSetting)}>
            <img src={Settings} alt="settings" />
          </div>
        </div>
        {!showSetting && (
          <div className="down">
            <h3 onClick={themeHandler}>Toggle theme</h3>
          </div>
        )}
      </StyledHeader>
      <Container>
        {showMenu && (
          <SideMenu>
            <div className="menu-item">
              <img src={Notes} alt="notes" />
              <Link to="/"><h2>Notes</h2></Link>
            </div>
            <div className="menu-item">
              <img src={Trash} alt="trash" />
              <Link to="/trash"><h2>Trash</h2></Link>
            </div>
          </SideMenu>
        )}
      </Container>
    </div>
  );
};

export default Header;
