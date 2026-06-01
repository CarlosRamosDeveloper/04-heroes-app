import { AdminPage } from '@/admin/pages/AdminPage';
import { HeroPage } from '@/hero/pages/hero/HeroPage';
import { HomePage } from '@/hero/pages/home/HomePage';
import { SearchPage } from '@/hero/pages/search/SearchPage';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/heroes/1',
    element: <HeroPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]);
