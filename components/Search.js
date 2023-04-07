import { useState } from "react";
import useSpells from "@/hooks/use-spells";

function Search({ onSubmit }) {
  const { setResultsShow } = useSpells();
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setResultsShow(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="p-2 text-zinc-200 text-[1.1rem] h-[40px] rounded-md outline-none bg-zinc-600"
          value={text}
          placeholder="Search for spells..."
        />
      </form>
    </div>
  );
}

export default Search;
