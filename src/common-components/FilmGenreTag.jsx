import { Link } from "react-router-dom"
import styled from "styled-components"
import { Colors } from "../shared/DesignTokens"

const Wrapper = styled.li`
    padding: 0;
    width: min-content;
    cursor: pointer;

    .link {
        text-decoration: none;
        transition: .2s;
        padding: 5px;
        color: ${Colors.WHITE};
        display: block;
        border: 1px solid ${Colors.GRAY};
        border-radius: 5px;

        &:hover {
            background-color: ${Colors.THEME};
            color: ${Colors.BLACK};
            border-color: ${Colors.THEME};
        }
    }
`

function FilmGenreTag({children, destination}) {
    return (
        <Wrapper>
            <Link className="link" to={`/genero/${destination}`}>
                {children}
            </Link>
        </Wrapper>
    )
}

export default FilmGenreTag
