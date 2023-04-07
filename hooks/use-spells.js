import { useContext } from "react";
import SpellsContext from "@/context/spells";

function useSpells() {
  return useContext(SpellsContext);
}

export default useSpells;
