import { PostController } from '@/controllers/post-controllers';
import { getPostRepositoryBackendApiInstance } from '@/utilities/post-repository-backend-api-instance';

let postControllerInstance: PostController;

export const getPostControllerInstance = (): PostController => {
  if (!postControllerInstance) {
    const repository = getPostRepositoryBackendApiInstance();
    postControllerInstance = new PostController(repository);
  }
  return postControllerInstance;
};