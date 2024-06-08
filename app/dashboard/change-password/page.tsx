import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Overview',
};
 
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Change Password
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          {/* <CardWrapper /> */}
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* TODO: Think of what chart to add in here */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* <RevenueChart /> */}
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          {/* <LatestReports /> */}
        </Suspense>
      </div>
    </main>
  );
}