import SideNav from '../../components/SideNav';
import HomeNav from '../../components/HomeNav';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SideNav />
      <div className="p-4 xl:ml-80">
        <HomeNav />
        {children}
      </div>
    </div>
  );
}
