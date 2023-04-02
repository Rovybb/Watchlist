import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 0px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 12px;
    }

    body {
        min-height: 100vh;
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        background-color: ${({ theme }) => theme.colors.body};
    }

    #root {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.colors.text};
    }

    img {
        -webkit-user-drag: none;
    }  

    @media only screen and (min-width: 400px) {
        html {
            font-size: 14px;
        }
    }

    @media only screen and (min-width: 610px) {
        html {
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 740px) {
        html {
            font-size: 18px;
        }
    }
`

export default GlobalStyles;