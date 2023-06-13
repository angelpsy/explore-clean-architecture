import { uid } from 'uid';
import { TPost } from '../../domain/entities/post';
import {
  TPostRepository,
  TPostRepositorySaveDate,
  TPostRepositoryUpdateDate,
} from '../../domain/repositories/post-repository';
import { TData } from '../../types/helper';

let instance: TPostRepository | null = null;

export class PostRepositoryRealtime implements TPostRepository {
  private items: TPost[];
  constructor(items: TPost[] = []) {
    this.items = items;
  }
  findByFilter(): Promise<TPost[]> {
    return Promise.resolve(this.items);
  }
  findById(id: TPost['id']): Promise<TPost | null> {
    const item = this.items.find((it) => it.id === id) || null;
    return Promise.resolve(item);
  }
  save(data: TPostRepositorySaveDate): Promise<TPost> {
    const id = uid();
    const createdAt: TData = new Date().toISOString();
    const updatedAt: TData = new Date().toISOString();
    const item: TPost = {
      id,
      createdAt,
      updatedAt,
      ...data,
    };
    this.items.push(item);
    return Promise.resolve(item);
  }
  update(id: TPost['id'], data: TPostRepositoryUpdateDate): Promise<TPost> {
    const index = this.items.findIndex((it) => it.id === id);
    if (index === -1) {
      throw new Error(`post with id ${id} not founded`);
    }
    const itemOrigin = this.items[index];
    const updatedAt = new Date().toISOString();
    const itemNew: TPost = {
      ...itemOrigin,
      updatedAt,
      ...data,
    };
    this.items[index] = itemNew;
    return Promise.resolve(itemNew);
  }
  delete(id: TPost['id']): Promise<void> {
    this.items = this.items.filter((it) => it.id !== id);
    return Promise.resolve();
  }
  getInstance(): TPostRepository {
    if (!instance) {
      instance = new PostRepositoryRealtime();
    }
    return instance;
  }
}
