import { CreatePostUseCaseImpl } from '@/../app/use-cases/create-post-use-case-ipml';
import { PostService } from '../../app/services/post-service';
import { UpdatePostUseCaseImpl } from '@/../app/use-cases/update-post-use-case-ipml';
import { DeletePostUseCaseImpl } from '@/../app/use-cases/delete-post-use-case-ipml';
import { GetPostByIdUseCase } from '@/../app/use-cases/get-post-by-id-use-case-ipml';
import { GetPostsUseCaseImpl } from '@/../app/use-cases/get-posts-use-case-ipml';
import { GetPostsMetaDataUseCaseImpl } from '@/../app/use-cases/get-posts-meta-data-use-case-impl';
import { TPostRepository } from '@/../domain/repositories/post-repository';
import { TPost } from '@/../domain/entities/post';
import { TCreatePostData } from '@/../domain/use-cases/create-post-use-case';
import { TUpdatePostData } from '@/../domain/use-cases/update-post-use-case';

export class PostController {
  private postService: PostService;

  constructor(postRepository: TPostRepository) {
    const createPostUseCaseImpl = new CreatePostUseCaseImpl(postRepository);
    const updatePostUseCaseImpl = new UpdatePostUseCaseImpl(postRepository);
    const deletePostUseCaseImpl = new DeletePostUseCaseImpl(postRepository);
    const getPostByIdPostUseCaseImpl = new GetPostByIdUseCase(postRepository);
    const getPostsUseCaseImpl = new GetPostsUseCaseImpl(postRepository);
    const getPostsMetaDataUseCaseImpl = new GetPostsMetaDataUseCaseImpl(
      postRepository
    );

    this.postService = new PostService(
      createPostUseCaseImpl,
      updatePostUseCaseImpl,
      deletePostUseCaseImpl,
      getPostByIdPostUseCaseImpl,
      getPostsUseCaseImpl,
      getPostsMetaDataUseCaseImpl
    );
  }

  async createPost(createPostData: TCreatePostData): Promise<TPost> {
    return this.postService.createPost(createPostData);
  }

  async updatePost(
    id: TPost['id'],
    updatePostData: TUpdatePostData
  ): Promise<TPost> {
    return this.postService.updatePost(id, updatePostData);
  }

  async deletePost(id: TPost['id']): Promise<void> {
    return this.postService.deletePost(id);
  }

  async getPostById(id: TPost['id']): Promise<TPost | null> {
    return this.postService.getPostById(id);
  }

  async getPosts(): Promise<TPost[]> {
    return this.postService.getPosts();
  }

  async getPostsMetaData(): Promise<{
    total: number;
  }> {
    return this.postService.getPostsMetaData();
  }
}
