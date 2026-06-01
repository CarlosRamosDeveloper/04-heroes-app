import { HeroCard } from './HeroCard';

export const HeroGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <HeroCard
        isActive={true}
        owner="DC"
        isFavourite={false}
        alias="Superman"
        name="Clark Kent"
        role="Héroe"
        affiliation="Liga de la Justicia"
        description="El último hijo de Krypton, protector de la tierra y símbolo de la esperanza para toda la humanidad"
        strValue={100}
        intValue={80}
        spdValue={90}
        stmValue={100}
        powers={['Super fuerza', 'Volar', '+4 más']}
        firstAppeared={1938}
      />

      <HeroCard
        isActive={true}
        owner="DC"
        isFavourite={true}
        alias="Batman"
        name="Bruce Wayne"
        role="Héroe"
        affiliation="Liga de la Justicia"
        description="            The Dark Knight of Gotham City, using fear as a weapon against crime
            and corruption."
        strValue={60}
        intValue={100}
        spdValue={60}
        stmValue={70}
        powers={['Artes Marciales', 'Deducción', '+3 más']}
        firstAppeared={1939}
      />

      <HeroCard
        isActive={true}
        owner="DC"
        isFavourite={false}
        alias="Wonder Woman"
        name="Diana Prince"
        role="Héroe"
        affiliation="Liga de la Justicia"
        description="Amazonian princess and warrior, champion of truth, justice, and equality."
        strValue={90}
        intValue={80}
        spdValue={80}
        stmValue={90}
        powers={['Super fuerza', 'Volar', '+4 más']}
        firstAppeared={1941}
      />

      <HeroCard
        isActive={true}
        owner="Marvel"
        isFavourite={true}
        alias="Spiderman"
        name="Peter Parker"
        role="Héroe"
        affiliation="Vengadores"
        description="Your friendly neighborhood Spider-Man, with great power comes great responsibility."
        strValue={70}
        intValue={90}
        spdValue={70}
        stmValue={70}
        powers={['Trepar paredes', 'Sentido arácnido', '+3 más']}
        firstAppeared={1962}
      />

      <HeroCard
        isActive={false}
        owner="Marvel"
        isFavourite={false}
        alias="Iron Man"
        name="Tony Stark"
        role="Héroe"
        affiliation="Vengadores"
        description="Billionaire genius inventor who uses his technology to protect the world."
        strValue={80}
        intValue={100}
        spdValue={70}
        stmValue={80}
        powers={['Armadura de poder', 'Genio', '+3 más']}
        firstAppeared={1963}
      />

      <HeroCard
        isActive={true}
        owner="Marvel"
        isFavourite={true}
        alias="Deadpool"
        name="Wade Wilson"
        role="anti-héroe"
        affiliation="X-Force"
        description="The Merc with a Mouth, an unpredictable anti-hero with accelerated healing powers."
        strValue={60}
        intValue={70}
        spdValue={70}
        stmValue={90}
        powers={['Factor curativo', 'Artes marciales', '+3 más']}
        firstAppeared={1991}
      />
    </div>
  );
};
