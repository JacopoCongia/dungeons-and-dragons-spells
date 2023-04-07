function SelectedSpell({ spellCard }) {
  return (
    <div className="text-white px-10 py-6">
      <div className="text-red-500 font-medium text-xl py-5">
        {spellCard.name || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Level: </span>
        {spellCard.level || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">School: </span>
        {spellCard.school || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Class: </span>
        {spellCard.dnd_class || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Archetype: </span>
        {spellCard.archetype || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Range: </span>
        {spellCard.range || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Material: </span>
        {spellCard.material || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Ritual: </span>
        {spellCard.ritual || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Concentration: </span>
        {spellCard.concentration || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Casting Time: </span>
        {spellCard.casting_time || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Duration: </span>
        {spellCard.duration || "none."}
      </div>
      <div>
        <span className="text-red-500 font-medium">Description: </span>
        {spellCard.desc}
      </div>
      <div>
        <span className="text-red-500 font-medium">Higher Level: </span>
        {spellCard.higher_level || "none."}
      </div>
    </div>
  );
}

export default SelectedSpell;
