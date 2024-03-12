import React from 'react';
import TopBarWithGoBack from '@components/TopBarWithGoBack';
import BottomBar from '@components/BottomBar';

export default async function ChatDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <div className="pt-12 pb-12">{children}</div>
        <TopBarWithGoBack />
      </div>
    </div>
  );
}
