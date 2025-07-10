import { heroes } from "../data/heroes";

const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
  }
  
  const getHeroeByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
  }

  const fetchHeroByIdWithDelay = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const hero = getHeroeById(id);
        if (hero) {
          resolve(hero);
        } else {
          reject(`Hero with id ${id} not found`);
        }
      }, 1000);
    });
  };


  export { getHeroeById, getHeroeByOwner, fetchHeroByIdWithDelay };