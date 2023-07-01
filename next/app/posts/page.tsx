import { Metadata } from 'next';

import { TTODO } from '@/../types/helper';
import PageView from './view';
import { usePosts } from '@/hooks/posts.universal';

type TProps = {
  searchParams?: Record<string, TTODO>;
};

export async function generateMetadata({
  searchParams,
}: TProps): Promise<Metadata> {
  const { fetchMetaDataPosts } = usePosts();
  const { total } = await fetchMetaDataPosts();

  return {
    title: `${total} Posts`,
  };
}

export default async function PostsPage(props: TProps) {
  const filter = props?.searchParams || {};

  const { fetchPosts } = usePosts();
  const items = await fetchPosts();

  return (
    <div>
      <PageView posts={items} defaultFilter={filter} />
    </div>
  );
}
