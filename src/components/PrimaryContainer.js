import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const PrimaryContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0]

    const {original_title, overview, id} = mainMovie

    return (
        <div>
            <VideoTitle title = {original_title} overview = {overview}></VideoTitle>
            <VideoBackground movie_id = {id}></VideoBackground>
        </div>
    )
}

export default PrimaryContainer