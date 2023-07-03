import { TPost } from '../entities/post';

export type TPostRepositorySaveDate = {
  title: TPost['title'];
  excerpt: TPost['excerpt'];
  content: TPost['content'];
};

export type TPostRepositoryUpdateDate = {
  title: TPost['title'];
  excerpt: TPost['excerpt'];
  content: TPost['content'];
};

type TPostRepositoryBase = {
  findById(id: TPost['id']): Promise<TPost | null>;
  findByFilter(): Promise<{
    items: TPost[];
    metadata: {
      total: number;
    };
  }>;
  save(data: TPostRepositorySaveDate): Promise<TPost>;
  update(id: TPost['id'], data: TPostRepositoryUpdateDate): Promise<TPost>;
  delete(id: TPost['id']): Promise<void>;
};

export type TPostRepository = TPostRepositoryBase;
