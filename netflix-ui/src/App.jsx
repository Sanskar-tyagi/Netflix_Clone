import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./pages/Forms";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/Signup";
import Watching from "./pages/Watching";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/Signup" element={<SignUp></SignUp>}></Route>
        <Route exact path="/" element={<Netflix></Netflix>}></Route>
        <Route exact path="/GetStarted" element={<GetStarted />} />
        <Route exact path="/Forms" element={<Forms />} />
        <Route exact path="/profile" element={<Watching />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
