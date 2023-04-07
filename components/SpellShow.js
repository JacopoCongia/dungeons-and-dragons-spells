function SpellShow({ spell, onChange }) {
  const handleClick = () => {
    onChange(spell);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="cursor-pointer rounded-md bg-neutral-200  px-4 py-2 hover:bg-neutral-300 hover:text-red-700"
      >
        <h1>{spell.name}</h1>
      </div>
    </div>
  );
}

export default SpellShow;
