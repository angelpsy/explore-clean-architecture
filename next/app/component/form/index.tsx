import { TPost } from '@/../domain/entities/post';
import { TTODO } from '@/../types/helper';
import React, { FormEvent, useState } from 'react';
import UIInput from '../../ui/input';
import UITextarea from '../../ui/textarea';
import UIButton from '../../ui/button';

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

  const [formErrors, setFormErrors] = useState<{
    title: string;
    content: string;
    excerpt: string;
  }>({
    title: '',
    content: '',
    excerpt: '',
  });

  const handlerSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form fields
    const errors = validateForm();
    if (Object.values(errors).some((error) => error !== '')) {
      setFormErrors({
        ...formErrors,
        ...errors,
      });
      return;
    }

    await onSubmit(formValues);
  };

  const handlerChangeField = (fieldName: string, value: TTODO) => {
    setFormValues((val) => ({
      ...val,
      [fieldName]: value,
    }));
    setFormErrors((errors) => ({
      ...errors,
      [fieldName]: '',
    }));
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    const { title, content, excerpt } = formValues;

    if (!title.trim()) {
      errors.title = 'Title is required.';
    }

    if (!content.trim()) {
      errors.content = 'Content is required.';
    }

    if (!excerpt.trim()) {
      errors.excerpt = 'Excerpt is required.';
    }

    return errors;
  };

  const renderLabel = (id: string, label: string) => (
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
      {label}
    </label>
  );

  const renderError = (error: string) => {
    if (!error) return null;
    return <span className="mb-1 text-sm text-red-500">{error}</span>;
  };

  return (
    <form onSubmit={handlerSubmitForm} className="flex flex-col gap-4">
      <div className="flex flex-col">
        {renderLabel('title', 'Title of post')}
        <UIInput
          id="title"
          placeholder="Title..."
          value={formValues.title}
          onChange={(value) => {
            handlerChangeField('title', value);
          }}
        />
        {renderError(formErrors.title)}
      </div>

      <div className="flex flex-col">
        {renderLabel('post-content', 'Content of post')}
        <UITextarea
          id="post-content"
          rows={8}
          value={formValues.content}
          placeholder="Content..."
          onChangeField={(value) => {
            handlerChangeField('content', value);
          }}
        />
        {renderError(formErrors.content)}
      </div>

      <div className="flex flex-col">
        {renderLabel('excerpt', 'Excerpt of post')}
        <UITextarea
          id="excerpt"
          rows={5}
          placeholder="Excerpt..."
          value={formValues.excerpt}
          onChangeField={(value) => {
            handlerChangeField('excerpt', value);
          }}
        />
        {renderError(formErrors.excerpt)}
      </div>

      <div className="flex justify-end">
        <UIButton type="submit">{isCreationForm ? 'Add' : 'Update'}</UIButton>
      </div>
    </form>
  );
}
