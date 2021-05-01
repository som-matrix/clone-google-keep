import React, { useState } from "react";

import { Edit, Gallery, ColorPallete } from "../assets/svg-icons";
const Notes = ({ theme, showImage, setShowImage }) => {
  const [baseFile, setBaseFile] = useState(" ");
  // Converting image into base64
  const getImage = async (e) => {
    let files = e.target.files[0];
    const base64 = await baseImage(files);
    setBaseFile(base64);
    setShowImage(!showImage);
  };
  const baseImage = (file) =>
    new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handaleFiles = () => {
    setShowImage(!showImage);
  };
  return (
    <div className="w-full h-screen">
      <div className="flex items-center flex-col  max-w-4xl h-96 mx-auto">
        <form method="post" className="h-12 w-full  ">
          <input
            className={`h-full shadow-md rounded-md   py-4 px-2 w-3/4 ${
              theme === "dark" ? "bg-black text-white" : ""
            }`}
            type="text"
            placeholder="Title"
          />
        </form>
        <div className="w-full h-72 mt-2">
          <form method="post" className="h-36 w-full">
            <input
              className={` w-3/4 mt-1 shadow-md h-full py-4 px-2 rounded-md ${
                theme === "dark" ? "bg-black text-white" : ""
              }`}
              type="text"
              placeholder="Description.."
            />
          </form>
          <form method="post" className="mt-3 p-2">
            <label className="inline-block mr-2" htmlFor="file">
              <Gallery />
            </label>
            <input
              onChange={getImage}
              type="file"
              accept="image/png image/jpeg image/jpg"
            />
          </form>
          {showImage && (
            <div className="h-66 w-66 overflow-hidden">
              {showImage && (
                <img
                  className=" h-52 w-52 object-cover"
                  src={baseFile}
                  alt="base"
                />
              )}
              <button
                onClick={handaleFiles}
                className="mt-2 bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          )}
          <div className="flex items-center space-x-11 mt-4">
            <div className="flex items-center space-x-8">
              <Edit />

              <ColorPallete />
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
