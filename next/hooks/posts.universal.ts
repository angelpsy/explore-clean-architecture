import { PostController } from '@/controllers/post-controllers';
import { PostRepositoryRealtime } from '../../infrastructure/repositories/post-repository-realtime';
import { TPost } from '@/../domain/entities/post';
import { TUpdatePostData } from '@/../domain/use-cases/update-post-use-case';
import { TCreatePostData } from '@/../domain/use-cases/create-post-use-case';

type TGetPosts = {
  createPost(data: TCreatePostData): Promise<TPost>;
  fetchPosts(): Promise<TPost[]>;
  fetchPostById(id: TPost['id']): Promise<TPost | null>;
  updatePost(id: TPost['id'], data: TUpdatePostData): Promise<TPost>;
};

export const usePosts = (): TGetPosts => {
  const postRepositry = new PostRepositoryRealtime([
    {
      id: 'b3fdac203c3',
      createdAt: '2023-05-25T09:30:51.289Z',
      updatedAt: '2023-05-25T09:30:51.289Z',
      title: '10 Surprising Benefits of Meditation for Your Mental Health',
      excerpt:
        "One unexpected benefit of meditation is its ability to improve your creativity and boost your problem-solving skills. Studies have shown that regular meditation practice can increase activity in the prefrontal cortex, which is responsible for higher-level thinking, decision making, and creativity. By clearing your mind of clutter and distractions, meditation can help you tap into your inner wisdom and find innovative solutions to complex problems. So if you're looking to supercharge your creativity, adding meditation to your daily routine might be just what you need.",
      content:
        "<ul>\n      <li>Coding is a highly sought-after skill in the job market</li>\n      <li>Coding teaches problem-solving and critical thinking</li>\n      <li>Coding can lead to the development of innovative solutions</li>\n      <li>Coding is a gateway to tech entrepreneurship</li>\n      <li>Coding is a lifelong learning opportunity</li>\n    </ul>\n    <p>So if you haven't already, consider learning how to code today!</p>",
    },
  ]);
  const postController = new PostController(postRepositry);

  async function createPost(data: TCreatePostData) {
    const createdPost = await postController.createPost(data);
    return createdPost;
  }

  async function fetchPosts() {
    return await postController.getPosts();
  }

  async function fetchPostById(id: TPost['id']) {
    return await postController.getPostById(id);
  }

  async function updateFirstPost() {
    const posts = await postController.getPosts();
    const idFirstPost = posts[0].id;
    const updatedPost = await postController.updatePost(idFirstPost, {
      title: 'new title',
      excerpt: 'new excerpt',
      content: 'new content',
    });

    return updatedPost;
  }

  async function updatePost(id: TPost['id'], data: TUpdatePostData) {
    const updatedPost = await postController.updatePost(id, data);
    return updatedPost;
  }

  return {
    createPost,
    fetchPosts,
    fetchPostById,
    updatePost,
  };
};
