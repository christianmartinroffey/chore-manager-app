import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import { Single } from "./pages/single";
import { History } from "./pages/history";

import { TeamMetricsPage } from "./pages/teamMetrics";
import Play from "./pages/playaround";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import VideoSearch from "./component/YTSearch";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signup />} exact path="/signup" />
            <Route element={<Login />} exact path="/login" />
            <Route element={<Profile />} exact path="/profile" />
            <Route element={<History />} path="/history" />
            <Route element={<TeamMetricsPage />} path="/teamMetrics" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<VideoSearch />} path="/YTSearch" />
            <Route element={<Play />} path="/play" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
