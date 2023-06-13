import { TPost } from '../entities/post';

export type TGetPostsUseCase = {
  execute(): Promise<TPost[]>;
};
