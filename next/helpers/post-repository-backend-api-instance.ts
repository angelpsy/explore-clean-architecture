import { PostRepositoryBackend } from '@/../infrastructure/repositories/post-repository-backend-api';

export const getPostRepositoryBackendApiInstance =
  (): PostRepositoryBackend => {
    return PostRepositoryBackend.getInstance();
  };
