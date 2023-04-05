import axios from "axios";

const fetchSpells = async (term) => {
  const response = await axios.get(
    `https://api.open5e.com/spells/?search=${term}`
  );

  return response.data.results;
};

export default fetchSpells;
