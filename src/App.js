import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import TrillerMovies from "./pages/TrillerMovies";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/MoviePage/:id" element={<TrillerMovies />} />
      </Routes>
    </div>
  );
}

export default App;
