import { createGlobalStyle } from "styled-components";
import { Colors, Fonts } from "./DesignTokens";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box
    }

    body {
        font-family: ${Fonts.PRIMARY};
        font-size: 16px;
        background-color: ${Colors.BLACK};
        color: ${Colors.WHITE};
    }
`

export default GlobalStyle