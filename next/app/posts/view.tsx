'use client';
import { useState, useEffect } from 'react';
import { TPost } from '@/../domain/entities/post';
import PostsList from './list';
import { usePosts } from '@/hooks/posts.universal';
import { TPrettify, TTODO } from '@/../types/helper';
import PostsFilter from './filter';
import { useFilter } from './hooks';

export default function PageView({
  defaultFilter,
  posts,
}: {
  defaultFilter: Record<string, TTODO>;
  posts: TPrettify<TPost>[];
}) {
  const { handlerChangeFilter } = useFilter();

  const onChangeFilter = (fieldName: string, value: TTODO) => {
    handlerChangeFilter(fieldName, value, defaultFilter);
  }

  return (
    <div>
      <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Filters</h2>
      <PostsFilter
        filter={defaultFilter}
        onChangeFilter={onChangeFilter}
      />

      <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Posts</h2>
      <PostsList posts={posts} />
    </div>
  );
}
