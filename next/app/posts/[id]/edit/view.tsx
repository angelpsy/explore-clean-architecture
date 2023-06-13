'use client';
import { FormEvent, useState } from 'react';

import { usePosts } from '@/hooks/posts.universal';

import { TPost } from '@/../domain/entities/post';
import { TPrettify, TTODO } from '@/../types/helper';
import Link from 'next/link';
import PostForm from '@/app/component/form';
import { useEditPost } from './hooks';

type TProps = {
  data: TPost;
};

export default function PageView({ data }: TProps) {
  const { post, handlerUpdatePost } = useEditPost(data);

  return (
    <>
      <h1>
        Update post:{' '}
        <Link className="underline" href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h1>

      <PostForm post={post} onSubmit={handlerUpdatePost} />
    </>
  );
}
