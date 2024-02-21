import { createGlobalStyle } from "styled-components";
import { Fonts } from "./DesignTokens";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box
    }

    body {
        font-family: ${Fonts.PRIMARY};
        font-size: 16px;
    }
`

export default GlobalStyle