import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';

import type { Hero } from '../types';

interface FavoriteHeroContextType {
  favorites: Hero[];
  favoriteCount: number;

  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

const favoritesKey = 'favorites';

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem(favoritesKey);
  return favorites ? JSON.parse(favorites) : [];
};

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContextType);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage(),
  );

  useEffect(() => {
    localStorage.setItem(favoritesKey, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorites = (hero: Hero): void => {
    const heroExists = favorites.find((h) => h.id === hero.id);

    if (heroExists) {
      return setFavorites(favorites.filter((h) => h.id !== hero.id));
    }

    return setFavorites([...favorites, hero]);
  };

  const checkIfFavorite = (hero: Hero) => {
    return favorites.some((h) => hero.id === h.id);
  };

  return (
    <FavoriteHeroContext
      value={{
        favoriteCount: favorites.length,
        favorites: favorites,

        isFavorite: checkIfFavorite,
        toggleFavorite: toggleFavorites,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
