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
          className="p-2 text-[1.1rem] h-[40px] outline-none"
          value={text}
          placeholder="Search for spells..."
        />
      </form>
    </div>
  );
}

export default Search;
