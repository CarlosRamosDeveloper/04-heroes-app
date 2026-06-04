import { use } from 'react';
import { useSearchParams } from 'react-router';

import {
  CustomBreadcrumbs,
  CustomJumbotron,
  CustomPagination,
} from '@/components/custom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { HeroGrid, HeroStats } from '@/heroes/components';
import { useHeroSummary, usePaginatedHero } from '@/heroes/hooks';
import { FavoriteHeroContext } from '@/heroes/context/FavoriteHeroContext';

export default function HomePage() {
  const [searchParams, searchSetParams] = useSearchParams();
  const { favorites, favoriteCount } = use(FavoriteHeroContext);
  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'all';
  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);
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
                  prev.set('page', '1');
                  prev.set('category', 'all');
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
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                searchSetParams((prev) => {
                  prev.set('tab', 'heroes');
                  prev.set('page', '1');
                  prev.set('category', 'hero');
                  return prev;
                })
              }
            >
              Heroes ({summaryData?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                searchSetParams((prev) => {
                  prev.set('tab', 'villains');
                  prev.set('page', '1');
                  prev.set('category', 'villain');
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
          <TabsContent value="favorites">
            <HeroGrid heroes={favorites} />
          </TabsContent>
          <TabsContent value="heroes">
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="villains">
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={10} />
      </>
    </>
  );
}
