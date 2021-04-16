import styled from 'styled-components'
import {motion} from 'framer-motion'
export const StyledMenu = styled(motion.div)`
 min-height:35vh;
 margin-right:3rem;
 width:250px;
 max-width:100%;
 .menu{
     display:flex;
     justify-content:space-between;
     align-items:center;
     padding:1rem 3rem;
     border-radius:0rem 3rem 3rem 0rem;
     margin-top:1.2rem;
 }
 #menu-active{
     transition:background .3s;
     &:hover{
        background: #eee;
     }
 }
 img{
     height:28px;
     width:28px;
 }
 
`