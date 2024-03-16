import styled from "styled-components"
import title from "../img/movie-title/rogue1.png"
import banner from "../img/banner/rogue1.webp"
import { Colors } from "../shared/DesignTokens"

const Wrapper = styled.div`
    padding-top: 225px;
    background-image: linear-gradient(to bottom, #0006, ${Colors.BLACK}), url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        max-height: 125px;
    }
`

function Hero() {
    return (
        <Wrapper>
            <div className="content">
                <p>Destaque</p>
                <img className="title" src={title} alt="Rogue One" />
            </div>
        </Wrapper>
    )
}

export default Hero
