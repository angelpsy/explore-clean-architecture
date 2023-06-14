'use client';

import { TPost } from '@/../domain/entities/post';
import PostForm from '@/app/component/form';
import { usePosts } from '@/hooks/posts.universal';
import { useState } from 'react';

export default function CreatePostPageView() {
  const [post, setPost] = useState<TPost | null>(null);

  const { createPost } = usePosts();
  const handlerCreatePost = async (data: {
    title: TPost['title'];
    content: TPost['content'];
    excerpt: TPost['excerpt'];
  }) => {
    const createdPost = await createPost({
      ...data,
    });
    setPost(createdPost);
  };

  return <PostForm onSubmit={handlerCreatePost} />;
}
