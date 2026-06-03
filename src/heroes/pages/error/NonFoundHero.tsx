import { Button } from '@/components/ui';
import { Link } from 'react-router';

export const NonFoundHero = () => {
  return (
    <>
      <h1>Personaje no encontrado</h1>
      <Link to="/">
        <Button>Volver a la página principal</Button>
      </Link>
    </>
  );
};

export default NonFoundHero;
