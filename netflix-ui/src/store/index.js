import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { API_KEY, TMBD_BASE_URL } from "../utils/constent";
import axios from "axios";
const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};
const initialAnime = {
  anime: [],
  genresLoaded: false,
  genres: [],
};

const createArrayfromRawdata = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};
const rawData = async (api, genres, paging) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayfromRawdata(results, moviesArray, genres);
  }
  return moviesArray;
};
export const fetchMovies = createAsyncThunk(
  "neflix/trending",
  async ({ type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    return rawData(
      `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);

//`${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genres}`
export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);

  return genres;
});

const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});
export const fetchAnime = createAsyncThunk(
  "myanimelist/topAnime",
  async ({ type }, thunkAPI) => {
    const {
      myanimelist: { genres },
    } = thunkAPI.getState();
    return rawData(`https://api.jikan.moe/v4/top/anime`, genres, false);
  }
);
export const getGenresAnime = createAsyncThunk(
  "Myanimelist/genres",
  async () => {
    const {
      data: { genres },
    } = await axios.get(`https://api.jikan.moe/v4/genres/anime`);

    return genres;
  }
);
const animeSlice = createSlice({
  name: "Myanimelist",
  initialAnime,
  extraReducers: (builder) => {
    builder.addCase(getGenresAnime.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchAnime.fulfilled, (state, action) => {
      state.anime = action.payload;
    });
  },
});
export const store = configureStore({
  reducer: {
    netflix: netflixSlice.reducer,
    anime: animeSlice.reducer,
  },
});
