import { PostController } from '@/controllers/post-controllers';
import { getPostRepositoryBackendApiInstance } from '@/helpers/post-repository-backend-api-instance';

import { TPost } from '@/../domain/entities/post';
import { TUpdatePostData } from '@/../domain/use-cases/update-post-use-case';
import { TCreatePostData } from '@/../domain/use-cases/create-post-use-case';

type TGetPosts = {
  createPost(data: TCreatePostData): Promise<TPost>;
  fetchPosts(): Promise<TPost[]>;
  fetchMetaDataPosts(): Promise<{total: number}>;
  fetchPostById(id: TPost['id']): Promise<TPost | null>;
  updatePost(id: TPost['id'], data: TUpdatePostData): Promise<TPost>;
};

export const usePosts = (): TGetPosts => {
  const postRepositry = getPostRepositoryBackendApiInstance();
  const postController = new PostController(postRepositry);

  async function createPost(data: TCreatePostData) {
    const createdPost = await postController.createPost(data);
    return createdPost;
  }

  async function fetchPosts() {
    return await postController.getPosts();
  }

  async function fetchDataPosts() {
    return await postController.getPostsMetaData();
  }

  async function fetchPostById(id: TPost['id']) {
    return await postController.getPostById(id);
  }

  async function updatePost(id: TPost['id'], data: TUpdatePostData) {
    const updatedPost = await postController.updatePost(id, data);
    return updatedPost;
  }

  return {
    createPost,
    fetchPosts,
    fetchMetaDataPosts: fetchDataPosts,
    fetchPostById,
    updatePost,
  };
};
