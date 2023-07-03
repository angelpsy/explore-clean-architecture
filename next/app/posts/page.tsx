import { Metadata } from 'next';

import { TTODO } from '@/../types/helper';
import PageView from './view';
import { getPostControllerInstance } from '@/utilities/post-controller-instance';

type TProps = {
  searchParams?: Record<string, TTODO>;
};

export async function generateMetadata({
  searchParams,
}: TProps): Promise<Metadata> {
  const { total } = await getPostControllerInstance().getPostsMetaData();

  return {
    title: `${total} Posts`,
  };
}

export default async function PostsPage(props: TProps) {
  const filter = props?.searchParams || {};

  const items = await getPostControllerInstance().getPosts();

  return (
    <div>
      <PageView posts={items} defaultFilter={filter} />
    </div>
  );
}
