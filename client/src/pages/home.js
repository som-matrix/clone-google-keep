import React, { useState } from "react";
import Notes from "../components/notes";
import { useSelector } from "react-redux";
const Home = ({ theme }) => {
  const [showImage, setShowImage] = useState(false);
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    description: "",
    colors: [],
    selectedFile: "",
  });
  const { keepNotes } = useSelector((state) => state.notes);
  console.log(keepNotes.keepNotes);
  return (
    <div>
      <Notes
        showImage={showImage}
        setShowImage={setShowImage}
        noteDetails={noteDetails}
        setNoteDetails={setNoteDetails}
        theme={theme}
      />
      ;
    </div>
  );
};

export default Home;
