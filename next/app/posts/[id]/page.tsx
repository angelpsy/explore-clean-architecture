import { Metadata } from 'next';

import { usePosts } from '@/hooks/posts.universal';
import PageView from './view';
import { TPost } from '@/../domain/entities/post';

type TProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: TProps): Promise<Metadata> {
  const { fetchPostById } = usePosts();
  const postDatga = (await fetchPostById(id)) as TPost;

  return {
    title: `${postDatga.title}`,
  };
}

export default async function PostByIdPage({ params: { id } }: TProps) {
  const { fetchPostById } = usePosts();
  const postDatga = (await fetchPostById(id)) as TPost; // TODO add handling for 404

  return <PageView data={postDatga} />;
}
