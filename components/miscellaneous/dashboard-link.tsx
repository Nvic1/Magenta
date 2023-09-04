'use client';

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, children }:{href:Url, children:any}) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`block text-base  hover:text-cyan-600 ${
        active ? 'text-cyan-800 font-medium' : 'text-slate-700'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavItem;


