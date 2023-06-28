'use client';
import { useMemo } from 'react';
import { HomeIcon, PencilIcon } from '@heroicons/react/24/solid';
import { TPost } from '@/../domain/entities/post';
import { formatDistance } from 'date-fns';
import Link from 'next/link';

type TProps = {
  data: TPost;
};

export default function PageView({ data }: TProps) {
  const distanceUpdateDate = useMemo(
    () => formatDistance(new Date(data.updatedAt), new Date()),
    [data]
  );

  return (
    <>
      <div className="mb-3">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <HomeIcon />
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  href="/posts"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ml-2"
                >
                  Posts
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <article className="flex grow flex-col">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl">
          {data.title}
        </h1>
        <main
          className="grow"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <footer className="flex justify-between py-3">
          <div className="text-base font-light text-gray-400">
            Last updated{' '}
            <time dateTime={data.updatedAt}>{distanceUpdateDate} ago</time>
          </div>
          <div>
            <Link
              href={`/posts/${data.id}/edit`}
              className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <span>Change post</span>
              <PencilIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
