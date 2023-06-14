import { TTODO } from '@/../types/helper';
import PageView from './view';
import { usePosts } from '@/hooks/posts.universal';

type TProps = {
  searchParams?: Record<string, TTODO>;
};

export default async function PostsPage(props: TProps) {
  const filter = props?.searchParams || {};

  const { fetchPosts } = usePosts();
  const posts = await fetchPosts();

  return (
    <div>
      <PageView posts={posts} defaultFilter={filter} />
    </div>
  );
}
