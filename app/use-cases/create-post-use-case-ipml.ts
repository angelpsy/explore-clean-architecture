import { TPost } from '../../domain/entities/post';
import { TPostRepository } from '../../domain/repositories/post-repository';
import {
  TCreatePostUseCase,
  TCreatePostData,
} from '../../domain/use-cases/create-post-use-case';

export class CreatePostUseCaseImpl implements TCreatePostUseCase {
  constructor(private postRepository: TPostRepository) {}

  async execute(data: TCreatePostData): Promise<TPost> {
    return await this.postRepository.save(data);
  }
}
