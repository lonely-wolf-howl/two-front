'use client';

import { usePathname } from 'next/navigation';
import { getPathname } from '../constants';

export default function TopBar() {
  const path = usePathname();
  const pathname = getPathname(path);

  return (
    <div className="bg-main w-full max-w-xl text-lg font-bold py-4 fixed top-0 justify-center flex items-center">
      {pathname}
    </div>
  );
}
