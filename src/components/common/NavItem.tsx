import { NavLinks } from '@/components/common/constant/NavLinks';
import { Link } from 'react-router-dom';
import ModeToggle from '../ui/mode-toggle';

export default function NavItem() {
  return (
    <>
      {NavLinks?.map((nav, index) => (
        nav.href.startsWith('http') ? (
            <a
              key={index}
              href={nav.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:bg-primary py-1.5 px-2.5 hover:text-primary-foreground hover:rounded-md duration-500 flex items-center gap-2"
            >
              {nav.label}
            </a>
          ) : (
            <Link
              key={index}
              to={nav.href}
              className="transition-all hover:bg-primary py-1.5 px-2.5 hover:text-primary-foreground hover:rounded-md duration-500 flex items-center gap-2"
            >
              {nav.label}
            </Link>
          )
      ))}
      <div className="md:block hidden">
      <ModeToggle  />
      </div>
    </>
  );
}
