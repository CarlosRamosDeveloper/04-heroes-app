import { useSearchParams } from 'react-router';

import { useQuery } from '@tanstack/react-query';

import {
  CustomBreadcrumbs,
  CustomJumbotron,
  CustomPagination,
} from '@/components/custom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page-action';
import { HeroGrid, HeroStats } from '@/heroes/components';

export default function HomePage() {
  const [searchParams, searchSetParams] = useSearchParams();
  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';

  const selectedTab = () => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  };

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5,
  });

  console.log({ heroesResponse });

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
              All Characters (16)
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
              Heroes (12)
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
              Villains (2)
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
