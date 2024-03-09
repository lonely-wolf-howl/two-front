import React from 'react';
import TopBar from '@components/TopBar';
import BottomBar from '@components/BottomBar';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <TopBar />
        <div className="pt-12 pb-12">{children}</div>
        <BottomBar />
      </div>
    </div>
  );
}
