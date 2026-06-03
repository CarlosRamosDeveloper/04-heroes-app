import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';
import { createBrowserRouter, Navigate } from 'react-router';
import {
  AdminLayout,
  AdminPage,
  HeroPage,
  NonFoundHero,
  SearchPage,
} from './lazy.pages';
import HomePage from '@/heroes/pages/home/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'heroes/:idSlug',
        element: <HeroPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'non-found-hero',
        element: <NonFoundHero />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
