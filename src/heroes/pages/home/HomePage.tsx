import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import {
  CustomBreadcrumbs,
  CustomJumbotron,
  CustomPagination,
} from '@/components/custom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page-action';
import { HeroGrid, HeroStats } from '@/heroes/components';

type TabContentType = 'all' | 'favorites' | 'heroes' | 'villains';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabContentType>('all');

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() => setActiveTab('favorites')}
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites"></TabsContent>
          <TabsContent value="heroes">
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={10} />
      </>
    </>
  );
}
