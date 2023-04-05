import { useState } from "react";
import SpellList from "@/components/SpellList";
import Navbar from "@/components/Navbar";
import fetchSpells from "@/fetchSpells";

export default function Home() {
  const [spells, setSpells] = useState([]);

  const handleSubmit = async (term) => {
    const result = await fetchSpells(term);

    setSpells(result);
  };

  console.log(spells);

  return (
    <>
      <Navbar onSubmit={handleSubmit} />
      <div>
        <SpellList result={spells} />
      </div>
    </>
  );
}
