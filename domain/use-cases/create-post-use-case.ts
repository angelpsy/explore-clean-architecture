import { TPost } from '../entities/post';

export type TCreatePostData = {
  title: TPost['title'];
  excerpt: TPost['excerpt'];
  content: TPost['content'];
};

export type TCreatePostUseCase = {
  execute(data: TCreatePostData): Promise<TPost>;
};
