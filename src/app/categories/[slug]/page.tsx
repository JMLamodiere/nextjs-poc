import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: slug + ' Category',
  };
}

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <div>My category: {slug}</div>;
}
