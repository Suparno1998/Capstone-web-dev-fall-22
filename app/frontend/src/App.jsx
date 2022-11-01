import React from "react";
import { createRoot } from "react-dom/client";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import VerifyEmail from "./pages/verifyEmail.jsx";
import { AuthContextProvider } from "./utils/AuthContext.js";

export default function App(){
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/home" exact element={<HomePage/>}></Route>
        <Route path="/verify" exact element={<VerifyEmail/>}></Route>
    </Routes>
  </BrowserRouter>
}
const element = document.getElementById("app");
const root = createRoot(element);
root.render(<AuthContextProvider><App/></AuthContextProvider>);
