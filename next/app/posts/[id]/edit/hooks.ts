import { useState } from 'react';

import { TPost } from '@/../domain/entities/post';
import { TPrettify } from '@/../types/helper';
import { usePosts } from '@/hooks/posts.universal';

export const useEditPost = (data: TPost) => {
  const [post, setPost] = useState<TPrettify<TPost>>(() => {
    console.log('maybe expensive function');
    return {
      ...data,
    };
  });

  const { updatePost } = usePosts();
  const handlerUpdatePost = async (data: {
    title: TPost['title'];
    content: TPost['content'];
    excerpt: TPost['excerpt'];
  }) => {
    const updatedPost = await updatePost(post.id, {
      ...data,
    });
    setPost(updatedPost);
  };

  return {
    post,
    handlerUpdatePost,
  };
};
