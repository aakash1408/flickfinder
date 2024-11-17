import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import PrimaryContainer from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import FlickFinder from "./FlickFinder"
import { useSelector } from "react-redux"

const Browse = () => {
    const showSearch = useSelector(store => store.finder.showSearch)
    useNowPlayingMovies()
    usePopularMovies()

    return(
        <div>
            <Header></Header>
            {showSearch ? ( 
            <FlickFinder></FlickFinder>
            ) : (
                <>
                    <PrimaryContainer></PrimaryContainer>
                    <SecondaryContainer></SecondaryContainer>
                </>
            )}
            
            
        </div>
    )
}

export default Browse