import { NavLinks } from '@/components/common/constant/NavLinks';
import { Link } from 'react-router-dom';

export default function NavItem() {
  return (
    <>
      {NavLinks?.map((nav, index) => (
        <Link
          key={index}
          to={nav.href}
          className="transition-colors hover:text-foreground/80 text-foreground/90 flex items-center gap-2"
        >
          {nav.icon}
          {nav.label}
        </Link>
      ))}
    </>
  );
}
