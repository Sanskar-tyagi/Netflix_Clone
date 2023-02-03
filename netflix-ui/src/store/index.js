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
async function createAnimeFromRawData(rawData, animeArray) {
  const data = rawData;
  console.log(animeArray);
  for (let i = 0; i < data.length; i++) {
    const anime = data[i];
    if (anime) {
      const genreArr = anime.genres.map((genre) => genre.name);
      animeArray.push({
        name: anime.title,
        genre: genreArr,
        score: anime.score,
        image: anime.images.jpg.image_url,
        trailer: anime.trailer.embed_url,
        episodes: anime.episodes,
        synopsis: anime.synopsis,
      });
    }
  }
  console.log(animeArray);
  return animeArray;
}

export const RawdataAnime = async () => {
  const Animearray = [];
  for (let i = 1; Animearray.length < 60 && i < 10; i++) {
    const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`); // Equivalent to response.data
    const results = data?.data || [];

    try {
      await createAnimeFromRawData(results, Animearray);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(error);
    }
  }
  return Animearray;
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

const animeSlice = createSlice({
  name: "Myanimelist",
  initialState: initialAnime,
  reducers: {
    setAnime: (state, action) => {
      state.anime = action.payload;
    },
  },
});
export const store = configureStore({
  reducer: {
    netflix: netflixSlice.reducer,
    anime: animeSlice.reducer,
  },
});
export const { setAnime } = animeSlice.actions;
export const fetchAnime = () => async (dispatch) => {
  const anime = await RawdataAnime();
  dispatch(setAnime(anime));
};
