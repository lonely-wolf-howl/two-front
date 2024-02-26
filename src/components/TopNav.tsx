'use client';

import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  Avatar,
} from '@material-tailwind/react';
import { BellIcon, ClockIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import { Link } from '@nextui-org/react';
import { getPathname } from '../constants';
import { useAuth } from '../hooks/useAuth.ts';

const TopNav = () => {
  const path = usePathname();
  const pathname = getPathname(path);
  const { isLoggedIn, logout } = useAuth();

  return (
    <Navbar
      color="white"
      className="rounded-xl transition-all sticky top-4 z-40 py-3 shadow-md"
      fullWidth
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Typography variant="h6" className="text-main font-bold">
            {pathname}
          </Typography>
        </div>
        <div className="flex items-center">
          {isLoggedIn ? (
            <Link href="/signin">
              <Button
                variant="text"
                className="hidden items-center gap-1 px-4 xl:flex normal-case text-main"
                onClick={logout}
              >
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                로그아웃
              </Button>
            </Link>
          ) : (
            <Link href="/signin">
              <Button
                variant="text"
                className="hidden items-center gap-1 px-4 xl:flex normal-case text-main"
              >
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                로그인
              </Button>
            </Link>
          )}
          <Menu>
            <MenuHandler>
              <IconButton variant="text">
                <BellIcon className="h-5 w-5 text-main" />
              </IconButton>
            </MenuHandler>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
};
export default TopNav;
