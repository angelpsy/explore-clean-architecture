import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostForm from './';
import { TPost } from '@/../domain/entities/post';
import { fi } from 'date-fns/locale';

const getPost = (): TPost => ({
  title: '10 Surprising Benefits of Meditation for Your Mental Health',
  excerpt:
    "One unexpected benefit of meditation is its ability to improve your creativity and boost your problem-solving skills. Studies have shown that regular meditation practice can increase activity in the prefrontal cortex, which is responsible for higher-level thinking, decision making, and creativity. By clearing your mind of clutter and distractions, meditation can help you tap into your inner wisdom and find innovative solutions to complex problems. So if you're looking to supercharge your creativity, adding meditation to your daily routine might be just what you need.",
  content: `<ul>
    <li>Coding is a highly sought-after skill in the job market</li>
    <li>Coding teaches problem-solving and critical thinking</li>
    <li>Coding can lead to the development of innovative solutions</li>
    <li>Coding is a gateway to tech entrepreneurship</li>
    <li>Coding is a lifelong learning opportunity</li>
  </ul>
  <p>So if you haven't already, consider learning how to code today!</p>`,
  id: '0',
  createdAt: '2023-05-09T14:30:15Z',
  updatedAt: '2023-05-09T14:30:15Z',
});

describe('Form conponent', () => {
  it('should create a new blog post', () => {
    const onSubmit = jest.fn();
    render(<PostForm onSubmit={onSubmit} />);

    const titleEl = screen.getByLabelText(/title of post/i);
    const contentEl = screen.getByLabelText(/content of post/i);
    const excerptEl = screen.getByLabelText(/excerpt of post/i);
    const submitEl = screen.getByRole('button', { name: /add/i });

    fireEvent.change(titleEl, { target: { value: 'test' } });
    fireEvent.change(contentEl, { target: { value: 'test' } });
    fireEvent.change(excerptEl, { target: { value: 'test' } });
    fireEvent.click(submitEl);

    expect(onSubmit).toHaveBeenCalledWith({
      title: 'test',
      content: 'test',
      excerpt: 'test',
    });
  });

  it('should update an existing blog post', () => {
    const onSubmit = jest.fn();
    const post = getPost();
    render(<PostForm onSubmit={onSubmit} post={post} />);

    const titleEl = screen.getByLabelText(/title of post/i);
    const contentEl = screen.getByLabelText(/content of post/i);
    const excerptEl = screen.getByLabelText(/excerpt of post/i);
    const submitEl = screen.getByRole('button', { name: /update/i });

    fireEvent.change(titleEl, { target: { value: 'test title' } });
    fireEvent.change(contentEl, { target: { value: 'test conten' } });
    fireEvent.change(excerptEl, { target: { value: 'test excerpt' } });
    fireEvent.click(submitEl);

    expect(onSubmit).toHaveBeenCalledWith({
      title: 'test title',
      content: 'test conten',
      excerpt: 'test excerpt',
    });
  });

  it('should display error message when title is empty', () => {
    const onSubmit = jest.fn();
    render(<PostForm onSubmit={onSubmit} />);

    const titleEl = screen.getByLabelText(/title of post/i);
    const submitEl = screen.getByRole('button', { name: /add/i });

    fireEvent.change(titleEl, { target: { value: '' } });
    fireEvent.click(submitEl);

    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
  });

  it('should correct create a new blog post with special characters', () => {
    const onSubmit = jest.fn();
    render(<PostForm onSubmit={onSubmit} />);
    const titleEl = screen.getByLabelText(/title of post/i);
    const contentEl = screen.getByLabelText(/content of post/i);
    const excerptEl = screen.getByLabelText(/excerpt of post/i);
    const submitEl = screen.getByRole('button', { name: /add/i });

    fireEvent.change(titleEl, { target: { value: 'test title 🤣' } });
    fireEvent.change(contentEl, { target: { value: 'test conten 🤣' } });
    fireEvent.change(excerptEl, { target: { value: 'test excerpt 🤣' } });
    fireEvent.click(submitEl);

    expect(onSubmit).toHaveBeenCalledWith({
      title: 'test title 🤣',
      content: 'test conten 🤣',
      excerpt: 'test excerpt 🤣',
    });
  });

  it('should display error message when title is empty', () => {
    const onSubmit = jest.fn();
    const post = getPost();
    render(<PostForm onSubmit={onSubmit} post={post} />);

    const titleEl = screen.getByLabelText(/title of post/i);
    const submitEl = screen.getByRole('button', { name: /update/i });

    fireEvent.change(titleEl, { target: { value: '' } });
    fireEvent.click(submitEl);

    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
  });
});
