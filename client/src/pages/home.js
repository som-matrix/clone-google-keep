import React from "react";
import Notes from "../components/notes";
const Home = ({ theme }) => {
  return (
    <div className="h-screen w-screen">
      <Notes theme={theme} />
    </div>
  );
};

export default Home;
