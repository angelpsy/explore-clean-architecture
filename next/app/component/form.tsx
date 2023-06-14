import { TPost } from '@/../domain/entities/post';
import { TTODO } from '@/../types/helper';
import React, { FormEvent, useState } from 'react';
import UIInput from '../ui/input';

type TProps = {
  post?: TPost;
  onSubmit(data: {
    title: TPost['title'];
    content: TPost['content'];
    excerpt: TPost['excerpt'];
  }): Promise<void>;
};

export default function PostForm({ post, onSubmit }: TProps) {
  const isCreationForm = !post;

  const [formValues, setFormValues] = useState<{
    title: TPost['title'];
    content: TPost['content'];
    excerpt: TPost['excerpt'];
  }>({
    title: post?.title || '',
    content: post?.content || '',
    excerpt: post?.excerpt || '',
  });

  const handlerSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(formValues);
  };

  const handlerChangeField = (fieldName: string, value: TTODO) => {
    setFormValues((val) => ({
      title: val.title,
      content: val.content,
      excerpt: val.excerpt,
      [fieldName]: value,
    }));
  };

  return (
    <form onSubmit={handlerSubmitForm} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-white"
        >
          Title of post
        </label>
        <UIInput
          id="title"
          placeholder="Title..."
          value={formValues.title}
          onChange={(value) => {
            handlerChangeField('title', value);
          }}
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="post-content"
          className="block mb-2 text-sm font-medium text-white"
        >
          Content of post
        </label>
        <textarea
          id="post-content"
          rows={8}
          className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Content..."
          value={formValues.content}
          onChange={(e) => {
            handlerChangeField('content', e.target.value);
          }}
        ></textarea>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="excerpt"
          className="block mb-2 text-sm font-medium text-white"
        >
          Excerpt of post
        </label>
        <textarea
          id="excerpt"
          rows={5}
          className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Excerpt..."
          value={formValues.excerpt}
          onChange={(e) => {
            handlerChangeField('excerpt', e.target.value);
          }}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center rounded-lg focus:ring-4 bg-blue-700 focus:ring-blue-900 hover:bg-blue-900"
          type="submit"
        >
          {isCreationForm ? 'Add' : 'Update'}
        </button>
      </div>
    </form>
  );
}
