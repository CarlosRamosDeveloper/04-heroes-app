import { Link, useLocation } from 'react-router';
import { NavigationMenuItem, NavigationMenuLink } from '../ui';
import { cn } from '@/lib/utils';

interface Props {
  route: string;
  text: string;
}

export const CustomNavItem = ({ route, text }: Props) => {
  const { pathname } = useLocation();
  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className={cn(isActive(route) && 'bg-slate-200', 'rounded-md p-2 mx-1')}
      >
        <Link to={route}>{text}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
