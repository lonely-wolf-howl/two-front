import React from 'react';
import TopBar from '@components/TopBar';
import BottomBar from '@components/BottomBar';

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <div className="pt-12 pb-12">{children}</div>
        <TopBar />
        <BottomBar />
      </div>
    </div>
  );
}
