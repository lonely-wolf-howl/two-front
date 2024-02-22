'use client';

import { Image, Link } from '@nextui-org/react';
import { NAV_ITEMS } from '../constants';
import { usePathname } from 'next/navigation';

const SideNav = () => {
  return (
    <aside className="bg-white fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl border shadow-md">
      <div className="flex justify-center items-center">
        <div>
          <Image
            className="object-cover rounded-full"
            src="images/logo.png"
            alt="Card background"
            width="100"
          />
        </div>
      </div>
      <div className="m-4">
        {NAV_ITEMS.map((item, index) => {
          return <MenuItem key={index} item={item} />;
        })}
      </div>
    </aside>
  );
};
export default SideNav;

const MenuItem = ({ item }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={item.path}
        className={`flex flex-row space-x-4 items-center p-2 rounded-lg mt-2 ${
          item.path === pathname
            ? 'bg-main text-white'
            : 'hover:bg-zinc-100 text-main'
        }`}
      >
        {item.icon}
        <span className="flex font-bold">{item.title}</span>
      </Link>
    </div>
  );
};
