import React from "react";

import { Edit, Gallery, ColorPallete } from "../assets/svg-icons";
const Notes = ({ theme }) => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center flex-col  max-w-4xl h-96 mx-auto">
        <form className="h-12 w-full  ">
          <input
            className={`h-full shadow-xl rounded-md   py-4 px-2 w-3/4 ${
              theme === "dark" ? "bg-black text-white" : ""
            }`}
            type="text"
            placeholder="Title"
          />
        </form>
        <div className="w-full h-72 mt-2">
          <form className="h-36 w-full">
            <input
              className={` w-3/4 mt-1 shadow-xl h-full py-4 px-2 rounded-md ${
                theme === "dark" ? "bg-black text-white" : ""
              }`}
              type="text"
              placeholder="Description.."
            />
          </form>
          <div className="flex items-center space-x-10 mt-4">
            <div>
              <Edit />
            </div>
            <div>
              <Gallery />
            </div>
            <div>
              <ColorPallete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
