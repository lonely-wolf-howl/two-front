import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '../provider/providers';
import { getServerSession } from 'next-auth';
import SessionProvider from '@components/SessionProvider';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: `TWO - Today's WorkOut`,
  description: 'Generated by create next app',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" className="light">
      <body>
        <main className={roboto.className}>
          <Providers>
            <SessionProvider session={session}>{children}</SessionProvider>
          </Providers>
        </main>
      </body>
    </html>
  );
}
