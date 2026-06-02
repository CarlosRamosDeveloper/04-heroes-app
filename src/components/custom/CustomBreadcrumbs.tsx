import { Link } from 'react-router';
import {
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumb,
} from '../ui';
import { SlashIcon } from 'lucide-react';

interface Breadcrumb {
  label: string;
  path: string;
}

interface Props {
  currentPage?: string;
  label?: string;
  path?: string;
  breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = (
  { currentPage, label, path, breadcrumbs = [] }: Props,
  //{ label, path }: Breadcrumb,
) => {
  const isHome = () => {
    if (
      currentPage === undefined ||
      path === undefined ||
      label === undefined
    ) {
      return true;
    }
    return false;
  };

  const activeStyle = (isActive: boolean = true): string => {
    return isActive ? 'text-black font-bold' : '';
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className={activeStyle(isHome())}>
              Inicio
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {!isHome() &&
          breadcrumbs.map((bread) => (
            <>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  {path && <Link to={bread.path}>{bread.label}</Link>}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}

        {!isHome() && (
          <>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {path && (
                  <Link className={activeStyle()} to={path}>
                    {label}
                  </Link>
                )}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
