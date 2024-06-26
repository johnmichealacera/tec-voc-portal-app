import Breadcrumbs from '@/app/ui/classes/breadcrumbs';
import Form from '@/app/ui/courses/create-form';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Create Announcements',
};
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Courses', href: '/dashboard/courses' },
          {
            label: 'Create Course',
            href: '/dashboard/announcements/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}