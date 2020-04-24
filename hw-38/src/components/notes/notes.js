import React, { useState } from "react";
import FilterSearchWord from "./FilterSearchWord";

const styles = {
  width: "600px",
  margin: "50px auto",
};

export default function NotesSearch({ props }) {
  const [searchText, setSearchText] = useState("");

  function onChangeHandler(e) {
    setSearchText(e.target.value);
  }

  return (
    <>
      <div style={styles}>
        <input type="text" value={searchText} onChange={onChangeHandler} />
        {FilterSearchWord(props, searchText)}
      </div>
    </>
  );
}