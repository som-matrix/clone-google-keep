import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { postKeepAction } from "../actions/keepNotes";
import { Edit, ColorPallete } from "../assets/svg-icons";
const Notes = ({ theme }) => {
  const dispatch = useDispatch();
  const [postNoteData, setPostNoteData] = useState({
    title: "",
    description: "",
  });
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([
    { id: 0, bg: "#ffffff", textCol: "#333" },
    { id: 1, bg: "#de8971", textCol: "#333" },
    { id: 2, bg: "#ff8303", textCol: "#333" },
    { id: 3, bg: "#fdca40", textCol: "#333" },
    { id: 4, bg: "#9ede73", textCol: "#333" },
    { id: 5, bg: "#00adb5", textCol: "#333" },
    { id: 6, bg: "#ff75a0", textCol: "#333" },
    { id: 7, bg: "#2f5d62", textCol: "#333" },
    { id: 8, bg: "#333333", textCol: "#fff" },
  ]);
  const [currentColor, setCurrentColor] = useState([""]);
  const selectedColorHandler = (e) => {
    const { style } = e.target;
    setCurrentColor(style.backgroundColor);
    setShowColor(!showColor);
  };
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(postKeepAction(postNoteData));
  };
  return (
    <div className="w-full h-screen">
      <div className="flex items-center flex-col  max-w-4xl h-96 mx-auto">
        <form className="h-96 w-full" onSubmit={formHandler}>
          <input
            onChange={(e) =>
              setPostNoteData({ ...postNoteData, title: e.target.value })
            }
            style={{
              backgroundColor: currentColor,
            }}
            className={`h-12 shadow-md rounded-md mb-5 py-4 px-2 w-3/4 ${
              theme === "dark" ? "bg-gray-900" : ""
            }`}
            type="text"
            placeholder="Title"
            value={postNoteData.title}
          />
          <input
            onChange={(e) =>
              setPostNoteData({ ...postNoteData, description: e.target.value })
            }
            style={{
              backgroundColor: currentColor,
            }}
            className={` w-3/4  shadow-md h-32 py-4 px-2 rounded-md ${
              theme === "dark" ? "bg-gray-900" : ""
            }`}
            type="text"
            value={postNoteData.description}
            placeholder="Description.."
          />
        </form>
        <div className="flex items-center space-x-11 mt-4">
          <div className="flex items-center space-x-8">
            <Edit />

            <ColorPallete showColor={showColor} setShowColor={setShowColor} />
          </div>
          <div>
            <button
              onClick={formHandler}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
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
              colors.map((color) => (
                <div
                  onClick={selectedColorHandler}
                  className="inline-block ml-2 h-8 w-8 rounded-full cursor-pointer"
                  style={{ backgroundColor: color.bg, color: color.textCol }}
                  key={color.id}
                ></div>
              ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Notes;
