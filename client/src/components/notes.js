import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { keepAction } from "../actions/keepNotes";
import { Edit, Gallery, ColorPallete } from "../assets/svg-icons";

const Notes = ({
  theme,
  showImage,
  setShowImage,
  noteDetails,
  setNoteDetails,
}) => {
  const dispatch = useDispatch();
  const { keepNotes } = useSelector((state) => state.notes);
  const [baseFile, setBaseFile] = useState(" ");
  const [showColor, setShowColor] = useState(false);
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
  const selectedColorHandler = (e) => {
    const { style } = e.target;
    return style.backgroundColor;
  };
  return (
    <div className="w-full h-screen">
      <div className="flex items-center flex-col  max-w-4xl h-96 mx-auto">
        <form className="h-12 w-full  ">
          <input
            className={`h-full shadow-md rounded-md   py-4 px-2 w-3/4 ${
              theme === "dark" ? "bg-gray-900 text-white" : ""
            }`}
            type="text"
            placeholder="Title"
          />
        </form>
        <div className="w-full h-72 mt-2">
          <form className="h-36 w-full">
            <input
              className={` w-3/4 mt-1 shadow-md h-full py-4 px-2 rounded-md ${
                theme === "dark" ? "bg-gray-900 text-white" : ""
              }`}
              type="text"
              placeholder="Description.."
            />
          </form>
          <form className="mt-3 p-2">
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
            <div className="h-66 max-w-4xl">
              {showImage && (
                <img
                  className="h-full w-full object-cover overflow-hidden"
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

              <ColorPallete showColor={showColor} setShowColor={setShowColor} />
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create
              </button>
            </div>
          </div>
          {showColor && (
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              className="bg-gray-300 mt-4 rounded-md py-2 ml-6 shadow-md h-12 max-w-sm"
            >
              {showColor &&
                noteDetails.colors.map((col) => (
                  <div
                    onClick={selectedColorHandler}
                    className="inline-block ml-2 h-8 w-8 rounded-full cursor-pointer"
                    style={{ backgroundColor: col.color }}
                    key={col.id}
                  ></div>
                ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
