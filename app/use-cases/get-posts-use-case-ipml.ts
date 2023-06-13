import { TPost } from '../../domain/entities/post';
import { TPostRepository } from '../../domain/repositories/post-repository';
import { TGetPostsUseCase } from '../../domain/use-cases/get-posts-use-case';

export class GetPostsUseCaseImpl implements TGetPostsUseCase {
  constructor(private postRepository: TPostRepository) {}

  async execute(): Promise<TPost[]> {
    return await this.postRepository.findByFilter();
  }
}
