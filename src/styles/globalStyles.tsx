import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    scroll-behavior: smooth;
}

body {
   min-height: 100vh;
}

ul {
    list-style: none;
}

a {
    color: inherit;
}

h1 {
    margin: 0;
}


`;

export default GlobalStyles;
