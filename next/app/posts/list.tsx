'use client';
import Link from 'next/link';
import { formatDistance } from 'date-fns';
import { TPost } from '@/../domain/entities/post';
import { TPrettify } from '@/../types/helper';

export default function PostsList({ posts }: { posts: TPrettify<TPost>[] }) {
  return (
    <ul className="divide-y divide-gray-100">
      {posts.map((post) => {
        const distanceUpdatedDate = formatDistance(new Date(post.updatedAt), new Date());
        return (
          <li key={post.id} className="py-5">
            <div className="flex justify-start g-5">
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-xl font-bold text-white">{post.title}</h2>
              </Link>
            </div>
            <div className="line-clamp-3 text-base font-light text-gray-400 mb-2">
              {post.excerpt}
            </div>
            <div className="flex justify-between">
              <div className="text-base font-light text-gray-400">
                Last updated <time dateTime={post.updatedAt}>{distanceUpdatedDate} ago</time>
              </div>
              <Link className="" href={`/posts/${post.id}`}>
                Read more
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
