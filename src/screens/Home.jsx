import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import MovieCard from "../components/MovieCard"

function Home() {
    return (
        <>
            <Hero />
            <Carousel>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </Carousel>
        </>
    )
}

export default Home
