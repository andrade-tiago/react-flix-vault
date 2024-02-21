import { Link } from "react-router-dom"
import styled from "styled-components"
import { Text } from "./Text"
import { Colors } from "../shared/DesignTokens"

const Wrapper = styled(Link)`
    border: 1px solid ${Colors.GRAY};
    border-radius: 5px;
    color: ${Colors.WHITE};
    cursor: pointer;
    transition: .2s;
    padding: 5px;
    text-decoration: none;
    display: flex;
    width: min-content;

    &:hover {
        background-color: ${Colors.THEME};
        color: ${Colors.BLACK};
    }
`

function FilmGenreTag({text, destination}) {
    return (
        <Wrapper to={`/genero/${destination}`}>
            <Text>{text}</Text>
        </Wrapper>
    )
}

export default FilmGenreTag