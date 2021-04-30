import React from "react";
import Notes from "../components/notes";
import { useSelector } from "react-redux";
const Home = ({ theme }) => {
  const { keepNotes } = useSelector((state) => state.notes);
  console.log(keepNotes.keepNotes);
  return (
    <div>
      <Notes theme={theme} />;
    </div>
  );
};

export default Home;
