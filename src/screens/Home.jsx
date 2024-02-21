import { Colors } from "../shared/DesignTokens"
import { Text } from "../common-components/Text"
import FilmGenreTag from "../common-components/FilmGenreTag"

function Home() {
    return (
        <>
            <Text color={Colors.WHITE}>Teste</Text>
            <FilmGenreTag to="teste" text="Teste" />
        </>
    )
}

export default Home
