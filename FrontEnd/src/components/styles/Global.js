import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        width: 100%;
        height: max-content;
        background-color: rgba(0, 0, 0, 0.2);
        background-image: url("https://www.transparenttextures.com/patterns/broken-noise.png");
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

`;

export const StldBody = styled.div `
    width: 100vw;
    min-height: 600px;
    max-height: max-content;
    display: flex;
    flex-wrap: wrap;
`

export default GlobalStyles;