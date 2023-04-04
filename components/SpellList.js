import SpellShow from "./SpellShow";

function SpellList({ result }) {
  const spellElements = result.map((spell) => {
    return (
      <SpellShow
        spell={spell}
        key={spell.index}
      />
    );
  });
  return (
    <div className="flex flex-col gap-1 py-1 text-[1.2rem]">
      {spellElements}
    </div>
  );
}

export default SpellList;
