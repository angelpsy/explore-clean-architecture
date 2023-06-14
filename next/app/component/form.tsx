import { TPost } from '@/../domain/entities/post';
import { TTODO } from '@/../types/helper';
import React, { FormEvent, useState } from 'react';
import UIInput from '../ui/input';
import UITextarea from '../ui/textarea';
import UIButton from '../ui/button';

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
        <UITextarea
          id="post-content"
          rows={8}
          value={formValues.content}
          placeholder="Content..."
          onChangeField={(value) => {
            handlerChangeField('content', value);
          }}
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="excerpt"
          className="block mb-2 text-sm font-medium text-white"
        >
          Excerpt of post
        </label>
        <UITextarea
          id="excerpt"
          rows={5}
          placeholder="Excerpt..."
          value={formValues.excerpt}
          onChangeField={(value) => {
            handlerChangeField('excerpt', value);
          }}
        />
      </div>
      <div className="flex justify-end">
        <UIButton type="submit">{isCreationForm ? 'Add' : 'Update'}</UIButton>
      </div>
    </form>
  );
}
