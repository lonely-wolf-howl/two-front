'use client';

import React from 'react';
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter(() => {});
  const path = usePathname();

  return (
    <header className="sticky flex items-center justify-between py-4 bg-main">
      <div className="ml-6">
        <img
          className="object-cover rounded-full"
          src="images/logo.png"
          alt="Card background"
          width="40"
        />
      </div>
      <div className="mr-6">
        <Link
          href="/signin"
          className="bg-white font-bold text-main py-2 px-4 rounded-lg inline-block"
        >
          로그인
        </Link>
      </div>
    </header>
  );
}
