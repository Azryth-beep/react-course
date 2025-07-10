import { fetchHeroByIdWithDelay } from "../helpers/functions";

const displayHeroById = async (id) => {
  try {
    const hero = await fetchHeroByIdWithDelay(id);
    console.log(hero);
  } catch (error) {
    console.error(error);
  }
};

displayHeroById(1);
