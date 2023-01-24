import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { API_KEY, TMBD_BASE_URL } from "../utils/constent";
import axios from "axios";
import { Action } from "@remix-run/router";
const initialState = {
  movies: [],
  genersLoaded: false,
  geners: [],
};
export const getGenres = createAsyncThunk("Netflix/genres", async () => {
  const { data } = await axios.get(
    `${TMBD_BASE_URL}/genre/movie/list?${API_KEY}`
  );
  console.log();
  return data;
});
const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.geners = action.payload;
      state.genersLoaded = true;
    });
  },
});
export const store = configureStore({
  reducer: NetflixSlice.reducer,
});
