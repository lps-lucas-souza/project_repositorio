import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root{
    min-height: 100%;
}

body{
    backgroud: #0D2636;
    font-size: 14px;
    -webkit-font-smoothing: antialised !important;
}

body, input, butto{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

button{
    cursor: pointer;
}


`;