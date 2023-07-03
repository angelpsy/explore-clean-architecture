'use client';
import { useState } from 'react';

import { TPost } from '@/../domain/entities/post';
import PostForm from '@/app/component/form';
import { getPostControllerInstance } from '@/utilities/post-controller-instance';

export default function CreatePostPageView() {
  const [post, setPost] = useState<TPost | null>(null);

  const handlerCreatePost = async (data: {
    title: TPost['title'];
    content: TPost['content'];
    excerpt: TPost['excerpt'];
  }) => {
    const createdPost = await getPostControllerInstance().createPost({
      ...data,
    });
    setPost(createdPost);
  };

  return <PostForm onSubmit={handlerCreatePost} />;
}
