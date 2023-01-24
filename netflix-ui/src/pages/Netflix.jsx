import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { firbaseauth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import BackgroundVid from "../components/BackgroundVid";
import { getGenres } from "../store";
export default function Netflix() {
  const [scrolled, isScrolled] = useState(false);
  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [error, Seterror] = useState("");
  useEffect(() => {
    dispatch(getGenres);
    onAuthStateChanged(firbaseauth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const dispatch = useDispatch;
  return (
    <Container>
      <Navbar scrolled={scrolled}></Navbar>
      <BackgroundVid />
    </Container>
  );
}

const Container = styled.div``;
