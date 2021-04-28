import React from "react";
import { Edit, Gallery, ColorPallete } from "../assets/svg-icons";
const Notes = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" className="title" />
      </form>
      <form>
        <input
          type="text"
          placeholder="Take a Note..."
          className="description"
        />
      </form>
      <div>
        <div>
          <Edit />
          <h3>Edit</h3>
        </div>
        <div>
          <Gallery />
          <h3>Add Image</h3>
        </div>
        <div>
          <ColorPallete />
          <h3>Choose Color</h3>
        </div>
      </div>
    </div>
  );
};

export default Notes;
