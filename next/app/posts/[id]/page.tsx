import { usePosts } from '@/hooks/posts.universal';
import PageView from './view';
import { TPost } from '@/../domain/entities/post';

type TProps = {
  params: {
    id: string;
  };
};

export default async function PostByIdPage({ params: { id } }: TProps) {
  const { fetchPostById } = usePosts();
  const postDatga = await fetchPostById(id) as TPost; // TODO add handling for 404

  return <PageView data={postDatga} />;
}
