import { CustomBreadcrumbs, CustomJumbotron } from '@/components/custom';
import { HeroStats } from '@/heroes/components';
import { SearchControls } from './components/SearchControls';

export const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
