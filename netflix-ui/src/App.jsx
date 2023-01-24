import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Forms from "./pages/Forms";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/Signup";
import Watching from "./pages/Watching";
import { AuthContext, ProtectedRoute } from "./utils/Authcontext";
import Player from "./pages/Player";
import { firbaseauth } from "./utils/firebase_config";
export default function App() {
  const [firebaseAuth, setFirebaseAuth] = useState(null);
  useEffect(() => {
    const unsubscribe = firbaseauth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseAuth(user);
      } else {
        setFirebaseAuth(null);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/Signup" element={<SignUp></SignUp>}></Route>
        <Route path="/" element={<Netflix />}></Route>
        <Route exact path="/GetStarted" element={<GetStarted />} />
        <Route exact path="/Forms" element={<Forms />} />
        <Route exact path="/profile" element={<Watching />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/Player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}
