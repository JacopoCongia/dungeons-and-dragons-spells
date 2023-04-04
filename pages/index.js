import { useState } from "react";
import Search from "@/components/Search";
import SpellList from "@/components/SpellList";
import fetchSpells from "@/fetchSpells";

export default function Home() {
  const [spells, setSpells] = useState([]);

  const handleSubmit = async (term) => {
    const result = await fetchSpells(term);

    setSpells(result);
  };

  return (
    <>
      <div className="p-5">
        <Search onSubmit={handleSubmit} />
        <SpellList result={spells} />
      </div>
    </>
  );
}
