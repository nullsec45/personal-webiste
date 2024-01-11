import RootLayout from '@/layouts/RootLayout';

export default function NotFound({ title }: { title?: string }) {
  return (
    <RootLayout title={'404'}>
      <h1 className="text-center md:text-3xl text-xl py-20">
        404 {title ? title : 'Page'} Not Found
      </h1>
    </RootLayout>
  );
}
