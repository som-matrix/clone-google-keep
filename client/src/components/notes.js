import React from "react";
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
        <h3>Icon1</h3>
        <h3>Icon2</h3>
        <h3>Icon3</h3>
      </div>
    </div>
  );
};

export default Notes;
