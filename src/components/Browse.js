import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import PrimaryContainer from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
    
    useNowPlayingMovies()

    return(
        <div>
            <Header></Header>
            <PrimaryContainer></PrimaryContainer>
            <SecondaryContainer></SecondaryContainer>
        </div>
    )
}

export default Browse