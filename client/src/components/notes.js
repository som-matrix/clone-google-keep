import React from "react";
import { NotesStyles } from "../styles/noteStyles";
import { Container } from "../styles/globalStyle";
const Notes = () => {
  return (
    <Container>
      <NotesStyles>
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
      </NotesStyles>
    </Container>
  );
};

export default Notes;
