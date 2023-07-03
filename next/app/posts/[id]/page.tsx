import { Metadata } from 'next';

import PageView from './view';
import { TPost } from '@/../domain/entities/post';
import { getPostControllerInstance } from '@/utilities/post-controller-instance';

type TProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: TProps): Promise<Metadata> {
  const postDatga = (await getPostControllerInstance().getPostById(id)) as TPost;

  return {
    title: `${postDatga.title}`,
  };
}

export default async function PostByIdPage({ params: { id } }: TProps) {
  const postDatga = (await getPostControllerInstance().getPostById(id)) as TPost; // TODO add handling for 404

  return <PageView data={postDatga} />;
}
