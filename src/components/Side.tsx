'use client';

import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

const Side = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full mt-10">
        <div className="flex flex-col space-y-2 md:px-6">
          {NAV_ITEMS.map((item, index) => {
            return <MenuItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Side;

const MenuItem = ({ item }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={item.path}
        className={`flex flex-row space-x-4 items-center p-2 rounded-lg mt-2 ${
          item.path === pathname ? 'bg-main text-white' : 'hover:bg-zinc-100'
        }`}
      >
        {item.icon}
        <span className="flex font-bold">{item.title}</span>
      </Link>
    </div>
  );
};
