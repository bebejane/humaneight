export { generateStaticParams } from '@app/about/[about]/page';
import page from '@app/about/[about]/page';

export default async ({ params }: { params: { about: string } }) => page({ params });