import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Welcom to gretting app.</h2>
      <p>
        Go to the <Link to="/greeting">Greeting</Link> page to see a random
        greeting.
      </p>
    </>
  );
};

export default Home;
