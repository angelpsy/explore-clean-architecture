import { TData, TId } from '../../types/helper';
import { TAuthor } from './author';

export type TPost = {
  id: TId;
  title: string;
  content: string;
  excerpt: string;
  createdAt: TData;
  updatedAt: TData;
};
