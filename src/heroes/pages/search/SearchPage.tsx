import { CustomBreadcrumbs, CustomJumbotron } from '@/components/custom';
import { HeroGrid, HeroStats } from '@/heroes/components';
import { SearchControls } from './components/SearchControls';
import { searchHeroesAction } from '@/heroes/actions';
import { useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';
  const strength = searchParams.get('strength') ?? '';

  const { data: filteredHeroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <CustomBreadcrumbs
        currentPage="/search"
        path="/search"
        label="Buscar"
        // breadcrumbs={[
        //   { label: 'Home', path: '/home' },
        //   { label: 'Home1', path: '/home1' },
        //   { label: 'Home2', path: '/home2' },
        // ]}
      />
      <CustomJumbotron title="Búsqueda de superhéroes y villanos" />
      <HeroStats />
      <SearchControls />

      <HeroGrid heroes={filteredHeroes} />
    </>
  );
};

export default SearchPage;
