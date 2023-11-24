export { generateStaticParams } from '@app/shop/[collection]/page';
import page from '@app/shop/[collection]/page';

export default async ({ params }: { params: { collection: string } }) => page({ params });