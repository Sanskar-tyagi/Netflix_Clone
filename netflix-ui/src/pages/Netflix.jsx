import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { firbaseauth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import BackgroundVid from "../components/BackgroundVid";
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
    onAuthStateChanged(firbaseauth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Container>
      <Navbar scrolled={scrolled}></Navbar>
      <BackgroundVid />
    </Container>
  );
}

const Container = styled.div``;
