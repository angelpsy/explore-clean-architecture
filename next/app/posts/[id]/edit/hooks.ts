import { useState } from 'react';

import { TPost } from '@/../domain/entities/post';
import { TPrettify } from '@/../types/helper';
import { getPostControllerInstance } from '@/utilities/post-controller-instance';

export const useEditPost = (data: TPost) => {
  const [post, setPost] = useState<TPrettify<TPost>>(() => {
    console.log('maybe expensive function');
    return {
      ...data,
    };
  });

  const handlerUpdatePost = async (data: {
    title: TPost['title'];
    content: TPost['content'];
    excerpt: TPost['excerpt'];
  }) => {
    const updatedPost = await getPostControllerInstance().updatePost(post.id, {
      ...data,
    });
    setPost(updatedPost);
  };

  return {
    post,
    handlerUpdatePost,
  };
};
