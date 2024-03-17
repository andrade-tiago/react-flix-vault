import { Box, Flex } from "reflexbox";
import { FaRegStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Colors } from "../shared/DesignTokens";

function Avaliation({score}) {
    return (
        <Flex
            alignItems="center">
            <Box
                marginRight="5px">
                <IconContext.Provider value={{
                    color: Colors.THEME,
                    size: '20px',
                    title: 'Ícone de uma estrela'}}>
                    <FaRegStar />
                </IconContext.Provider>
            </Box>
            <Flex alignItems="baseline">
                <Box
                    fontSize="24px">
                    {score}
                </Box>
                <Box>/10</Box>
            </Flex>
        </Flex>
    )
}

export default Avaliation