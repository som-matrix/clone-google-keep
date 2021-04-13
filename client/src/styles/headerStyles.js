import styled from "styled-components";

export const StyledHeader = styled.div`
  min-height: 8vh;
  width: 100%;
  padding: 1rem 3rem;
  color:${props=>props.theme.text};
  position:relative;
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .child-1 {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      width: 100%;
      height: 100%;
      .menu {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          background-color: rgba(89, 64, 151, 0.3);
        }
      }
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 2rem;

        h1 {
          font-size: 1.5rem;
          font-weight: 500;
          margin-left: 1rem;
        }
      }
      form {
        position: relative;
        height: 40px;
        width: 500px;
        img {
          position: absolute;
          top: 19.5%;
          left: 2%;
        }
        input {
          height: 100%;
          width: 100%;
          padding-left: 2.5rem;
          border-radius: 0.5rem;
          max-width: 100%;
          background: none;
          box-shadow: 1px 1px 4px 0.5px ${props=>props.theme.input};
          transition : all .3s;
          font-family: 'Poppins', sans-serif;
        }
        input:focus{  
          box-shadow: 3px 3px 5px 1.5px ${props=>props.theme.input};
          color:${props=>props.theme.text};
        }
        input::placeholder{
          color: ${props=>props.theme.text};
          opacity:0.4;
        }
      }
    }
    .child-2 {
        /* height: 50px;
        width: 50px;
        border-radius: 50%; */
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
  }
  img {
    height: 24px;
    width: 24px;
  }
  .down{
    position: absolute;
    right:1%;
    bottom:0%;
    border-radius:0.5rem;
    h3{
      font-size:0.8rem;
      cursor: pointer;
    }
  }
`;

export const SideMenu = styled.div`
 height:10rem;
 width:200px;
 max-width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 .menu-item{
   height:40px;
   width:100%;
   margin-top:1rem;
   display:flex;
   justify-content:center;
   align-items:center;
 }
 img{
   height:24px;
   width:24px;
   margin-right:1.5rem;
 }
 h2{
   font-size:1rem;
   font-weight:400;
 }
`