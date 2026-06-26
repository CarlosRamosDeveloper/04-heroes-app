import { heroApi } from '../api/hero.api';
import type { Hero } from '../types';

interface Options {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
  intelligence?: string;
  speed?: string;
  durability?: string;
}

// : Promise<Hero[]>
const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroesAction = async (
  options: Options = {},
): Promise<Hero[]> => {
  const {
    name,
    team,
    category,
    universe,
    status,
    strength,
    intelligence,
    speed,
    durability,
  } = options;

  if (
    !name &&
    !team &&
    !category &&
    !universe &&
    !status &&
    !strength &&
    !intelligence &&
    !speed &&
    !durability
  ) {
    return [];
  }

  const { data } = await heroApi.get<Hero[]>('/search', {
    params: {
      name,
      team,
      category,
      universe,
      status,
      strength,
      intelligence,
      speed,
      durability,
    },
  });

  return data.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));
};
