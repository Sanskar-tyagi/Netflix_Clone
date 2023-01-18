import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { firbaseauth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";
export default function Netflix() {
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
  const Logout = async function (event) {
    event.preventDefault();
    try {
      await signOut(firbaseauth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      Seterror(error.message);
      setTimeout(() => {
        Seterror("");
      }, 2000);
    }
  };
  return (
    <>
      <div>Netflix</div>
      <button className="Lgout" onClick={Logout}>
        <span>Log Out</span>
      </button>
    </>
  );
}
