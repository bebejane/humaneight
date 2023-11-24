export { generateStaticParams } from '@app/products/[product]/page';
import page from '@app/products/[product]/page';

export default async ({ params }: { params: { product: string } }) => page({ params });