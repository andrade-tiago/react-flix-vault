import styled from "styled-components"
import { Colors, Sizes } from "../shared/DesignTokens"

export const Text = styled.p`
    color: ${props => props.color ?? Colors.WHITE};
    font-size: ${props => props.size ?? Sizes[4]};
`
