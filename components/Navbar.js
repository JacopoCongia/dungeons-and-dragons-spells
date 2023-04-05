import Search from "./Search";

function Navbar({ onSubmit }) {
  return (
    <div className="p-5 flex gap-4 items-center bg-sky-700">
      <Search onSubmit={onSubmit} />
      <h1 className="text-white ml-auto text-[1.5rem]">D&D Spells</h1>
    </div>
  );
}

export default Navbar;
