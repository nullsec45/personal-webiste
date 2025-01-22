import { Home,  User } from 'lucide-react';
import { FaBriefcase } from 'react-icons/fa6';

export const NavLinks = [
  {
    label: 'Home',
    href: '/',
    icon: <Home size={22} className="md:hidden block" />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <User size={22} className="md:hidden block" />,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: <FaBriefcase size={22} className="md:hidden block" />,
  }
];
