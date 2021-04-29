import React from "react";
import Notes from "../components/notes";
const Home = ({ theme }) => {
  return (
    <div>
      <Notes theme={theme} />;
    </div>
  );
};

export default Home;
