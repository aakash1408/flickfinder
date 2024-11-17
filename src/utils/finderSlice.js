import { createSlice } from "@reduxjs/toolkit";

const finderSlice = createSlice({
    name: 'finder',
    initialState: {
        showSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleView : (state) => {
            state.showSearch = !state.showSearch
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
          },
    }
})

export const {toggleView} = finderSlice.actions
export default finderSlice.reducer