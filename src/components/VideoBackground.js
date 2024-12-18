import useTrailer from "../hooks/useTrailer"
import { useSelector } from "react-redux";

const VideoBackground = ({movie_id}) => {
    
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    useTrailer(movie_id)

    return (
        <div className="mb-4 w-screen">
            <iframe
                className="w-screen aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                     trailerVideo?.key +
                    "?&autoplay=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}

export default VideoBackground