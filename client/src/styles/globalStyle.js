import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *{
     margin:0;
     padding:0;
     box-sizing:border-box;
 }
 html{
    overflow-x:hidden;
    overscroll-behavior:none;
 }
 body{
    font-family: 'Poppins', sans-serif;
    font-weight:400;
    background-color: ${(props) => props.theme.backgroundColor};
 }
 input{
    border:none;
    outline:none;
 }
 a{
    text-decoration:none;
    color: ${(props) => props.theme.text};
 }
 svg{
    cursor:pointer;
    stroke:${(props) => props.theme.text};
 }
 
`;
