import { IconContext } from "react-icons"
import { IoPlay } from "react-icons/io5";
import { Colors } from "../shared/DesignTokens";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkWrapper = styled(Link)`
    text-transform: uppercase;
    color: ${Colors.BLACK};
    background-color: ${Colors.THEME};
    padding: 15px;
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 25px;
    width: min-content;
`

function MovieButton() {
    return (
        <LinkWrapper>
            <IconContext.Provider value={{title: "Ícone de acessar"}}>
                <IoPlay />
            </IconContext.Provider>
            Assistir
        </LinkWrapper>
    )
}

export default MovieButton