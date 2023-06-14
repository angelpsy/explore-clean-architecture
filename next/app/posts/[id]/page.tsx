import { usePosts } from '@/hooks/posts.universal';
import PageView from './view';

type TProps = {
  params: {
    id: string;
  };
};

export default async function PostByIdPage({ params: { id } }: TProps) {
  const { fetchPostById } = usePosts();
  const postDatga = await fetchPostById(id);

  return <PageView data={postDatga} />;
}
