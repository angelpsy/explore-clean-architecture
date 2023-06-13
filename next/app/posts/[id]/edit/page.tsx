import { usePosts } from '@/hooks/posts.universal';
import PageView from './view';

type TProps = {
  params: {
    id: string;
  }
};

export default async function EditPage({ params: { id } }: TProps) {
  const { fetchPostById } = usePosts();
  const postDatga = await fetchPostById(id);

  if (postDatga === null) {
    return (404);
  }

  return <PageView
    data={postDatga}
  />;
}