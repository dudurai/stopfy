 import { createGlobalStyle } from 'styled-components';

 const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0;
 }
 
 html, border-style, #root {
   height: 100%;
 }

 body {
   text-rendering: optimizeLegibility!important;
   -webkit-font-smoothing: antialised !important;
   background: #181818;
   font-family: 'Montserrat', sans-serif;
   color: #fff;
 }
 `;

 export default GlobalStyle;