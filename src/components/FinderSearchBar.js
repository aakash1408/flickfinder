import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import addGptMovieResult from "../utils/finderSlice"

const FinderSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearchClick = async() => {

    const refinedSearch =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Avengers, Iron Man, Don, Golmaal, Krish";

    const aiResults = await client.chat.completions.create({
        messages: [{ role: "user", content: refinedSearch }],
        model: "gpt-3.5-turbo",
    });

    console.log(aiResults)

    const gptMovies = aiResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults)

    dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );

  };

  


  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()} 
      >
        
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What's on your mind today?"
        />

        {/* Search Button */}
        <button
          type="button"
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FinderSearchBar;
