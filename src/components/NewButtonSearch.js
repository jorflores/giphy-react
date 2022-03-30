import React, { useState } from "react";

const NewButtonSearch = (props) => {
  const [newButton, setNewButton] = useState("");

  const dataHandler = (e) => {
    setNewButton(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(newButton);
    props.newButton(newButton);
    setNewButton("");
  };

  return (
    <div>
      <form id="animal-form" onSubmit={onSubmitHandler}>
        <label htmlFor="animal-input">Add an animal</label>
        <input
          type="text"
          id="animal-input"
          onChange={dataHandler}
          value={newButton}
        />
        <br />
        <input id="add-animal" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewButtonSearch;
