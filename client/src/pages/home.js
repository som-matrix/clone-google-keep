import React, { useState } from "react";
import Notes from "../components/notes";
const Home = ({ theme }) => {
  const [showImage, setShowImage] = useState(false);
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    description: "",
    colors: [
      {
        id: 0,
        color: "#ffffff",
        text: "default",
      },
      {
        id: 1,
        color: "#de8971",
        text: "Red",
      },
      {
        id: 2,
        color: "#ff8303",
        text: "Orange",
      },
      {
        id: 3,
        color: "#fdca40",
        text: "Yellow",
      },
      {
        id: 4,
        color: "#9ede73",
        text: "Green",
      },
      {
        id: 5,
        color: "#00adb5",
        text: "Light-Blue",
      },
      {
        id: 6,
        color: "#ff75a0",
        text: "Pink",
      },
      {
        id: 7,
        color: "#2f5d62",
        text: "Ocean-Green",
      },
    ],
    selectedImage: "",
  });

  return (
    <div className="h-screen w-screen">
      <Notes
        showImage={showImage}
        setShowImage={setShowImage}
        noteDetails={noteDetails}
        setNoteDetails={setNoteDetails}
        theme={theme}
      />
    </div>
  );
};

export default Home;
