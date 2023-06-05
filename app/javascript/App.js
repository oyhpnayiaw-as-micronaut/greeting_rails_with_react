import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Greeting from "./pages/Greeting";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/greeting">Greeting</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
