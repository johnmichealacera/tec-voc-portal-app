import { fetchCustomers, fetchFilteredCustomers, fetchInvoicesPages } from '@/app/lib/data';
import Table from '@/app/ui/announcements/table';
import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/reports/pagination';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
 
export const metadata: Metadata = {
  title: 'Reports',
};

export default async function Page({
  searchParams
}: {
  searchParams: {
    query: string,
    page: number
  }
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  const customers: any = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Reports</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." />
        <CreateInvoice /> */}
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table customers={customers} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}