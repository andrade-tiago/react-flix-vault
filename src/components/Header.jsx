import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import styled from "styled-components"
import { Colors } from "../shared/DesignTokens"

const Wrapper = styled.header`
    position: absolute;
    z-index: 1000;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .logo {
        height: 65px;
    }

    .menu {
        display: flex;
        list-style: none;
    }

    .menu-item {
        display: block;
        padding: 20px;
        transition: .1s;
        color: ${Colors.WHITE};
        text-decoration: none;
        
        &:hover {
            background-color: #FFF2;
        }
    }
`

function Header() {
    return (
        <Wrapper>
            <img className="logo" src={logo} />

            <nav>
                <ul className="menu">
                    <li><Link className="menu-item" to="/">Home</Link></li>
                    <li><Link className="menu-item" to="/series">Séries</Link></li>
                    <li><Link className="menu-item" to="/lancamentos">Lançamentos</Link></li>
                </ul>
            </nav>
        </Wrapper>
    )
}

export default Header
