import { TPost } from '../../domain/entities/post';
import { TPostRepository } from '../../domain/repositories/post-repository';
import { TDeletePostUseCase } from '../../domain/use-cases/delete-post-use-case';

export class DeletePostUseCaseImpl implements TDeletePostUseCase {
  constructor(private postRepository: TPostRepository) {}

  async execute(id: TPost['id']): Promise<void> {
    return await this.postRepository.delete(id);
  }
}
