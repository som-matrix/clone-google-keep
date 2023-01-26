import React from "react";
import Notes from "../components/notes";

export const HomePage = ({ theme }) => {
  return (
    <div className="h-screen w-screen">
      <Notes theme={theme} />
    </div>
  );
};
