import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { firbaseauth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import BackgroundVid from "../components/BackgroundVid";
import {
  fetchMovies,
  getGenres,
  RawdataAnime,
  updateAnime,
} from "../store/index";

import Slider from "../components/Slider";

export default function Netflix() {
  const [scrolled, isScrolled] = useState(false);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const anime = useSelector((state) => state.anime.anime);

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [error, Seterror] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
    onAuthStateChanged(firbaseauth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const [animeRawData, setAnimeRawData] = useState(null);

  useEffect(() => {
    if (!genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  });
  useEffect(() => {
    RawdataAnime().then((data) => {
      dispatch(updateAnime(data));
    });
  }, []);

  return (
    <Container>
      <Navbar scrolled={scrolled}></Navbar>
      <BackgroundVid />
      <Slider movies={movies} anime={anime} />
    </Container>
  );
}

const Container = styled.div``;
