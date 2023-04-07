import useSpells from "@/hooks/use-spells";
import SpellList from "@/components/SpellList";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { spells, handleSubmit } = useSpells();

  return (
    <>
      <Navbar onSubmit={handleSubmit} />
      <div>
        <SpellList result={spells} />
      </div>
    </>
  );
}
