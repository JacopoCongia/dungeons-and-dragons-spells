import { useState } from "react";
import useSpells from "../hooks/use-spells";
import SpellShow from "./SpellShow";
import SelectedSpell from "./SelectedSpell";

function SpellList({ result }) {
  const { resultsShow, setResultsShow } = useSpells();
  const [spellCard, setSpellCard] = useState([]);

  const handleClick = (receivedSpell) => {
    setResultsShow(false);
    setSpellCard(receivedSpell);
  };

  const spellElements = result.map((spell) => {
    return (
      <SpellShow
        spell={spell}
        key={spell.slug}
        onChange={handleClick}
      />
    );
  });
  return (
    <div>
      {resultsShow && (
        <div className="flex gap-1 flex-col px-[100px] py-3 text-[1.2rem]">
          {spellElements}
        </div>
      )}
      {!resultsShow && <SelectedSpell spellCard={spellCard} />}
    </div>
  );
}

export default SpellList;
