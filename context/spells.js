import { createContext, useEffect, useState } from "react";
import fetchSpells from "@/fetchSpells";

const SpellsContext = createContext();

function SpellsProvider({ children }) {
  const [spells, setSpells] = useState([]);
  const [resultsShow, setResultsShow] = useState(true);

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async (term) => {
    const result = await fetchSpells(term);

    setSpells(result);
  };
  return (
    <SpellsContext.Provider
      value={{ spells, resultsShow, handleSubmit, setResultsShow }}
    >
      {children}
    </SpellsContext.Provider>
  );
}

export { SpellsProvider };
export default SpellsContext;
