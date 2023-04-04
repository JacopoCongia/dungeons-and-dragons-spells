function SpellShow({ spell }) {
  const handleClick = () => {
    console.log("Clicked", spell.url);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-neutral-200 rounded px-2 py-1 hover:opacity-80"
    >
      {spell.name}
    </div>
  );
}

export default SpellShow;
