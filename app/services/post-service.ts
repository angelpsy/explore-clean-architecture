import { TPost } from '../../domain/entities/post';
import { TCreatePostData } from '../../domain/use-cases/create-post-use-case';
import { TUpdatePostData } from '../../domain/use-cases/update-post-use-case';
import { CreatePostUseCaseImpl } from '../use-cases/create-post-use-case-ipml';
import { DeletePostUseCaseImpl } from '../use-cases/delete-post-use-case-ipml';
import { GetPostByIdUseCase } from '../use-cases/get-post-by-id-use-case-ipml';
import { GetPostsUseCaseImpl } from '../use-cases/get-posts-use-case-ipml';
import { UpdatePostUseCaseImpl } from '../use-cases/update-post-use-case-ipml';

export class PostService {
  constructor(
    private createPostUseCase: CreatePostUseCaseImpl,
    private updatePostUseCase: UpdatePostUseCaseImpl,
    private deletePostUseCase: DeletePostUseCaseImpl,
    private getPostByIdUseCase: GetPostByIdUseCase,
    private getPostsUseCase: GetPostsUseCaseImpl,
  ) { }

  async createPost(data: TCreatePostData): Promise<TPost> {
    return this.createPostUseCase.execute(data);
  }

  async updatePost(id: TPost['id'], data: TUpdatePostData): Promise<TPost> {
    return this.updatePostUseCase.execute(id, data);
  }

  async deletePost(id: TPost['id']): Promise<void> {
    return this.deletePostUseCase.execute(id);
  }

  async getPostById(id: TPost['id']): Promise<TPost | null> {
    return this.getPostByIdUseCase.execute(id);
  }

  async getPosts(): Promise<TPost[]> {
    return this.getPostsUseCase.execute();
  }
};