import { Flex } from "reflexbox"
import Movie from "../img/movie/rogue1.jpg"
import styled from "styled-components"
import { Colors } from "../shared/DesignTokens"
import MovieButton from "./MovieButton"
import Avaliation from "./Avaliation"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min-content;
    transition: .2s;
    font-size: 14px;
    color: ${Colors.LIGHT_GRAY};
    text-decoration: none;

    .image {
        background-image: url(${Movie});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 185px;
        aspect-ratio: 2/3;
        border-radius: 10px;
    }

    .description {
        width: 100%;
        height: 100%;
        padding: 10px;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        background-color: #000C;
        visibility: hidden;
        opacity: 0;
        transition: .2s;
        color: ${Colors.LIGHT_GRAY};
        position: relative;
        line-height: 1.35;
        border: 1px solid #FFF3;
    }

    .button {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }

    &:hover {
        transform: translateY(-5px);

        .description {
            opacity: 1;
            visibility: visible;
        }
    }
`

function MovieCard() {
    return (
        <Wrapper>
            <div className="image">
                <div className="description">
                    <p>
                        Em busca de uma nova esperança para a galáxia, a Aliança Rebelde enfrenta uma arriscada missão: roubar os planos que revelam uma falha na construção da Estrela da Morte. Para isso, eles contam com a ajuda de Jyn Erso ...
                    </p>

                    <div className="button">
                        <MovieButton />
                    </div>
                </div>
            </div>

            <h4>Rogue One: uma história...</h4>

            <Flex
                justifyContent="space-between"
                alignItems="center">
                <span>2024</span>

                <span>1h41</span>

                <Avaliation score="9.1" />
            </Flex>
        </Wrapper>
    )
}

export default MovieCard