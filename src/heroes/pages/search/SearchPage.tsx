import { CustomJumbotron } from '@/components/custom';
import { HeroStats } from '@/heroes/components';
import { SearchControls } from './components/SearchControls';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron title="Búsqueda de superhéroes y villanos" />
      <HeroStats />
      <SearchControls />
    </>
  );
};

export default SearchPage;
