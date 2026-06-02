import { NavigationMenu, NavigationMenuList } from '../ui';
import { CustomNavItem } from './CustomNavItem';

export const CustomMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <CustomNavItem route="/" text="Inicio" />
        <CustomNavItem route="/search" text="Buscar" />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
