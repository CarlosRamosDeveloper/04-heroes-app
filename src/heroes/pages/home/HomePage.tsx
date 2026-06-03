import { useSearchParams } from 'react-router';

import {
  CustomBreadcrumbs,
  CustomJumbotron,
  CustomPagination,
} from '@/components/custom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { HeroGrid, HeroStats } from '@/heroes/components';
import { useHeroSummary, usePaginatedHero } from '@/heroes/hooks';

export default function HomePage() {
  const [searchParams, searchSetParams] = useSearchParams();
  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const { data: heroesResponse } = usePaginatedHero(+page, +limit);
  const { data: summaryData } = useHeroSummary();

  const selectedTab = () => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  };

  return (
    <>
      <>
        <CustomBreadcrumbs />
        <CustomJumbotron
          title="Universo de Superhéroes"
          description="Descubre, explora y administra superhéroes y villanos"
        />

        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab()} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                searchSetParams((prev) => {
                  prev.set('tab', 'all');
                  return prev;
                })
              }
            >
              All Characters ({summaryData?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() =>
                searchSetParams((prev) => {
                  prev.set('tab', 'favorites');
                  return prev;
                })
              }
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                searchSetParams((prev) => {
                  prev.set('tab', 'heroes');
                  return prev;
                })
              }
            >
              Heroes ({summaryData?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                searchSetParams((prev) => {
                  prev.set('tab', 'villains');
                  return prev;
                })
              }
            >
              Villains ({summaryData?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites"></TabsContent>
          <TabsContent value="heroes"></TabsContent>
          <TabsContent value="villains"></TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={10} />
      </>
    </>
  );
}
