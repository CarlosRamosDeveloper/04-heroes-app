import { lazy } from 'react';

export const HeroPage = lazy(() => import('@/heroes/pages/hero/HeroPage'));
export const SearchPage = lazy(
  () => import('@/heroes/pages/search/SearchPage'),
);

export const AdminLayout = lazy(() => import('@/admin/layouts/AdminLayout'));
export const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));
export const NonFoundHero = lazy(
  () => import('@/heroes/pages/error/NonFoundHero'),
);
