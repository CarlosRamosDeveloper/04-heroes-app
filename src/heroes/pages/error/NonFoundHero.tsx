import { Button } from '@/components/ui';
import { Link } from 'react-router';

export const NonFoundHero = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight">
        Personaje no encontrado
      </h1>

      <p className="max-w-md text-muted-foreground">
        El héroe que buscas no existe o no pudo cargarse correctamente.
      </p>

      <Link to="/">
        <Button size="lg">Volver a la página principal</Button>
      </Link>
    </div>
  );
};

export default NonFoundHero;
