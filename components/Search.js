import { useState } from "react";

function Search({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="border-2 p-2 w-[100%]"
          value={text}
        />
      </form>
    </div>
  );
}

export default Search;
