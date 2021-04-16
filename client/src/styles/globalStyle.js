import styled,{createGlobalStyle} from 'styled-components'

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
    background-color: ${props=>props.theme.backgroundColor};
 }
 input{
    border:none;
    outline:none;
 }
 a{
    text-decoration:none;
    color: ${props=>props.theme.text};
 }
 
`
export const Container = styled.div`
 min-height:100vh;
 width:100%;
 max-width:100%;
 position:relative;
 color: ${props=>props.theme.text};
`
export const Flex = styled.div`
 height:100%;
 width:100%;
 display:flex;
 align-items:center;
 
`