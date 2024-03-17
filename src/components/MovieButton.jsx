import { IconContext } from "react-icons"
import { IoPlay } from "react-icons/io5";
import { Colors } from "../shared/DesignTokens";
import styled from "styled-components";

const Wrapper = styled.div`
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
`

function MovieButton() {
    return (
        <Wrapper>
            <IconContext.Provider value={{title: "Ícone de assistir"}}>
                <IoPlay />
            </IconContext.Provider>
            Assistir
        </Wrapper>
    )
}

export default MovieButton