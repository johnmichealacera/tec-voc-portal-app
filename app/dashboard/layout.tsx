import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';
import HeaderNav from '../ui/dashboard/header-nav';
import { getBasicUserdata } from '@/auth';
 
export const metadata: Metadata = {
  title: 'Dashboard',
};
 
export default async function Layout({ children }: { children: React.ReactNode }) {
  const userdata: any = await getBasicUserdata();
  const fullName = `${userdata?.first_name} ${userdata?.middle_name} ${userdata?.last_name}`;

  return (
    <div className="bg-tec-voc-background-bgfc bg-cover bg-center h-screen flex flex-col h-screen">
      <header className="flex-none">
        <HeaderNav studentName={fullName} role={userdata?.role}/>
      </header>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <aside className="w-full flex-none md:w-64">
          <SideNav userdata={userdata}/>
        </aside>
        <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}