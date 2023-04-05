import { useState, useEffect } from "react";

function SpellShow({ spell }) {
  const [spellCard, setSpellCard] = useState([]);
  const [visibility, setVisibility] = useState(false);

  const handleClick = async () => {
    setSpellCard(spell);
    setVisibility(!visibility);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="cursor-pointer drop-shadow-sm font-bold bg-neutral-300 px-4 py-1 hover:opacity-80"
      >
        <h1>{spell.name}</h1>
      </div>
      {visibility && (
        <div className=" bg-neutral-50 px-4 py-2">
          <div>
            <span className="font-bold">Level: </span>
            {spellCard.level || "none."}
          </div>
          <div>
            <span className="font-bold">School: </span>
            {spellCard.school || "none."}
          </div>
          <div>
            <span className="font-bold">Class: </span>
            {spellCard.dnd_class || "none."}
          </div>
          <div>
            <span className="font-bold">Archetype: </span>
            {spellCard.archetype || "none."}
          </div>
          <div>
            <span className="font-bold">Range: </span>
            {spellCard.range || "none."}
          </div>
          <div>
            <span className="font-bold">Material: </span>
            {spellCard.material || "none."}
          </div>
          <div>
            <span className="font-bold">Ritual: </span>
            {spellCard.ritual || "none."}
          </div>
          <div>
            <span className="font-bold">Concentration: </span>
            {spellCard.concentration || "none."}
          </div>
          <div>
            <span className="font-bold">Casting Time: </span>
            {spellCard.casting_time || "none."}
          </div>
          <div>
            <span className="font-bold">Duration: </span>
            {spellCard.duration || "none."}
          </div>
          <div>{spellCard.desc} </div>
          <div>
            <span className="font-bold">Higher Level: </span>
            {spellCard.higher_level || "none."}
          </div>
        </div>
      )}
    </div>
  );
}

export default SpellShow;
