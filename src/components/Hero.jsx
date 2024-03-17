import styled from "styled-components"
import title from "../img/movie-title/rogue1.png"
import banner from "../img/banner/rogue1.webp"
import { Colors } from "../shared/DesignTokens"
import { Box, Flex } from "reflexbox"
import Avaliation from "./Avaliation"
import MovieButton from "./MovieButton"

const Wrapper = styled.div`
    padding-top: 175px;
    background-image: linear-gradient(to bottom, #0007, ${Colors.BLACK}), url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 600px;

    .content {
        gap: 14px;
    }

    .title {
        margin: 10px 0;
        max-width: 100%;
    }
`

function Hero() {
    return (
        <Wrapper>
            <Flex
                maxWidth="650px"
                flexDirection="column"
                margin="0 auto"
                color={Colors.WHITE}
                alignItems="center"
                className="content">
                <Box
                    width="100%"
                    letterSpacing="2px">
                    <p>Destaque:</p>
                </Box>

                <img className="title" src={title} alt="Rogue One" />

                <Flex
                    alignItems="baseline"
                    className="content">
                    <Avaliation score="7.5" />
                    <Box
                        color={Colors.LIGHT_GRAY}>
                        Ano: 2024
                    </Box>
                </Flex>
                <Box
                    color={Colors.LIGHT_GRAY}
                    textAlign="center"
                    letterSpacing="1px"
                    lineHeight="1.5"
                    fontSize="14px">
                    <p>
                        Em busca de uma nova esperança para a galáxia, a Aliança Rebelde enfrenta uma arriscada missão: roubar os planos que revelam uma falha na construção da Estrela da Morte. Para isso, eles contam com a ajuda de Jyn Erso, filha do criador da arma mais poderosa do império.
                    </p>
                </Box>

                <MovieButton />
            </Flex>
        </Wrapper>
    )
}

export default Hero
