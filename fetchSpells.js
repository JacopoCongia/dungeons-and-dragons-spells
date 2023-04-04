import axios from "axios";

const fetchSpells = async (term) => {
  const response = await axios.get(
    `https://www.dnd5eapi.co/api/spells/?name=${term}`
  );

  return response.data.results;
};

export default fetchSpells;
