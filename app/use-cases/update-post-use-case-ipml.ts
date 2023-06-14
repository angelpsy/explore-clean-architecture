import { TPost } from '../../domain/entities/post';
import { TPostRepository } from '../../domain/repositories/post-repository';
import {
  TUpdatePostUseCase,
  TUpdatePostData,
} from '../../domain/use-cases/update-post-use-case';

export class UpdatePostUseCaseImpl implements TUpdatePostUseCase {
  constructor(private postRepository: TPostRepository) {}

  async execute(id: TPost['id'], data: TUpdatePostData): Promise<TPost> {
    return await this.postRepository.update(id, data);
  }
}
