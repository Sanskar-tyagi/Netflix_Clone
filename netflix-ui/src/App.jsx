import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import SignUp from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/Signup" element={<SignUp></SignUp>}></Route>
        <Route exact path="/Home" element={<Netflix></Netflix>}></Route>
        <Route exact path="/GetStarted" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}
