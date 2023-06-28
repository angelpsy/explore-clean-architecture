import { TPost } from '../../domain/entities/post';
import {
  TPostRepository,
  TPostRepositorySaveDate,
  TPostRepositoryUpdateDate,
} from '../../domain/repositories/post-repository';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class PostRepositoryBackend implements TPostRepository {
  static instance: PostRepositoryBackend;
  constructor() {}
  async findById(id: TPost['id']): Promise<TPost | null> {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
      cache: 'no-store',
    });
    const post = await res.json();
    return post.data.item;
  }
  async findByFilter(): Promise<TPost[]> {
    const res = await fetch(`${BASE_URL}/posts`, {
      cache: 'no-store',
    });
    const posts = await res.json();
    return posts.data.items;
  }
  async save(data: TPostRepositorySaveDate): Promise<TPost> {
    const res = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(data),
      cache: 'no-store',
    });
    const post = await res.json();
    return post.data.item;
  }
  async update(
    id: TPost['id'],
    data: TPostRepositoryUpdateDate
  ): Promise<TPost> {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      cache: 'no-store',
    });
    const post = await res.json();
    return post.data.item;
  }
  async delete(id: TPost['id']): Promise<void> {
    await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE',
      cache: 'no-store',
    });
  }
  public static getInstance(): PostRepositoryBackend {
    if (!PostRepositoryBackend.instance) {
      PostRepositoryBackend.instance = new PostRepositoryBackend();
    }
    return PostRepositoryBackend.instance;
  }
}
