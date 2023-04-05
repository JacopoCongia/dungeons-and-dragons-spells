import SpellShow from "./SpellShow";

function SpellList({ result }) {
  const spellElements = result.map((spell) => {
    return (
      <SpellShow
        spell={spell}
        key={spell.slug}
      />
    );
  });
  return <div className="flex flex-col text-[1.2rem]">{spellElements}</div>;
}

export default SpellList;
