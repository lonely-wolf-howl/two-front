import React from 'react';
import SideNav from '../../components/SideNav';
import TopNav from '../../components/TopNav';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SideNav />
      <div className="p-4 xl:ml-80">
        <TopNav />
        {children}
      </div>
    </div>
  );
}
