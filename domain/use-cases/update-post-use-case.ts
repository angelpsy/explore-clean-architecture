import { TPost } from '../entities/post';

export type TUpdatePostData = {
  title: TPost['title'];
  excerpt: TPost['excerpt'];
  content: TPost['content'];
};

export type TUpdatePostUseCase = {
  execute(id: TPost['id'], data: TUpdatePostData): Promise<TPost>;
};
