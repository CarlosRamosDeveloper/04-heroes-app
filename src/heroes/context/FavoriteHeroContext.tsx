import { createContext, useState, type PropsWithChildren } from 'react';
import type { Hero } from '../types';

interface FavoriteHeroContext {
  favorites: Hero[];
  favoriteCount: number;

  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>([]);

  const toggleFavorites = (hero: Hero): void => {
    const heroExists = favorites.find((h) => h.id === hero.id);

    if (heroExists) {
      return setFavorites(favorites.filter((h) => h.id !== hero.id));
    }

    return setFavorites([...favorites, hero]);
  };

  return (
    <FavoriteHeroContext
      value={{
        favoriteCount: 0,
        favorites: [],

        isFavorite: () => true,
        toggleFavorite: toggleFavorites,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
